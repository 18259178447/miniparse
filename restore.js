// 还原
const fs = require("fs");
const path = require("path");
const { VM } = require('vm2');
const Tool = require("./tool.js");
const ZParse = require("./z.js");
const crypto = require("crypto");
const UglifyJS = require("uglify-es");
const { js_beautify } = require("js-beautify");
const esprima = require('esprima');
const escodegen = require('escodegen');
const cheerio = require('cheerio');
const cssbeautify = require('cssbeautify');
const csstree = require('css-tree');
var log = require('single-line-log').stdout;
const chalk = require('chalk');
let needParsePackage; //需要解包的包,默认空字符串表示主包
function restore(srcDir, destDir) {
    needParsePackage = [""];
    srcDir = path.resolve(srcDir);
    destDir = path.resolve(destDir);
    // 复制图片到目标目录
    Tool.scanDirByExt(srcDir).filter(item => /\.(png|svg|jpeg|jpg)/.test(item)).forEach(item=>{
    	// fs.readFileSync(frameFile, "utf8")
    	Tool.saveFile(item.replace(srcDir,destDir),fs.readFileSync(item))
    	// console.log(item.replace(srcDir,destDir))
    })

    // return
    parseJson(srcDir, destDir);
    needParsePackage.forEach((item,index) => {
        colorlog(`\n\n---解析${item ? item + "分": "主"}包原始文件开始---`)
        splitjs(path.resolve(srcDir, item, "app-service.js"), destDir);
        splitjs(path.resolve(srcDir, item, "workers.js"), destDir, "workers.js");
        parsewxml(path.resolve(srcDir, item), destDir);
        parsewxss(path.resolve(srcDir, item), destDir, index === 0);
        colorlog(`\n\n---解析${item ? item + "分": "主"}包原始文件完成---`)
    })
}

function parseJson(srcDir, destDir) {
    
    let configFilePath = path.resolve(srcDir, "app-config.json");
    colorlog("\n解析所有包json文件开始:" + configFilePath)
    if (!fs.existsSync(configFilePath)) return console.log("不存在配置app-config.json文件，有可能是分包")

    let fileContent = fs.readFileSync(configFilePath, "utf8");
    let fileObj = JSON.parse(fileContent);
    fileObj.pages.unshift(changeExt(fileObj.entryPagePath)); //把入口页放到第一个  然后去重
    let appjson = {
        pages: [...new Set(fileObj.pages)],
        window: fileObj.global && fileObj.global.window,
        tabBar: fileObj.tabBar,
        navigateToMiniProgramAppIdList: fileObj.navigateToMiniProgramAppIdList || []
    };
    if (fileObj.networkTimeout) appjson.networkTimeout = fileObj.networkTimeout;

    if (fileObj.subPackages) {
        console.log(chalk.bold.red(`\n这个小程序采用了分包，分包个数为：${fileObj.subPackages.length}\n`))
        appjson.subPackages = fileObj.subPackages.map(item => {
            let root = item.root;
            if (root.startsWith("/")) root = root.slice(1);
            if (!root.endsWith("/")) root += "/";
            if (!Tool.isDir(path.resolve(srcDir, root))) {
                console.log(chalk.bold.red(`\n缺少${item.root}分包\n`))
            } else {
                needParsePackage.push(root);
            }
            item.pages = item.pages.map(_item => {
                let pageIndex = appjson.pages.indexOf(_item)
                if (pageIndex > -1) {
                    appjson.pages.splice(pageIndex, 1);
                }
                return _item.replace(root, '')
            })
            return item
        })
    }

    if (fs.existsSync(path.resolve(srcDir, "workers.js"))) appjson.workers = getWorkerPath(path.resolve(srcDir, "workers.js"));
    if (fileObj.extAppid) console.log(chalk.bold.red("==========================\n这个小程序存在第三方平台请注意\n=================="));

    // console.log("开始保存json文件")

    // fileObj.page包含主包页面、分包页面、有的包含主包使用到的组件，有的没有，
    // 所以以下代码会把主包的组件抽出来，以免报错（猜测）
    for (let pagename in fileObj.page) { //页面组件抽出来当做页面
        let usingComponents = fileObj.page[pagename].window.usingComponents;
        //pagename pages/index/index.html
        //usingComponents { header: '/components/header/header' }
        if (!usingComponents) continue;
        for (let componentkey in usingComponents) {
            let componentPath = usingComponents[componentkey] + ".html";
            let file = componentPath.startsWith('/') ? componentPath.slice(1) : path.join(path.dirname(pagename), componentPath).replace(/\\/g, "/");
            if (!fileObj.page[file]) fileObj.page[file] = {};
            if (!fileObj.page[file].window) fileObj.page[file].window = {};
            fileObj.page[file].window.component = true;
        }
    }

    //fileObj.page['pages/collect/collect.html'] = {"component":true,"usingComponents":{}}
    needParsePackage.forEach(item => { //解析存在包的页面json文件
        let _path = path.resolve(srcDir, item, "app-service.js");
        if (!fs.existsSync(_path)) return;
        let matches = fs.readFileSync(_path, { encoding: 'utf8' }).match(/\_\_wxAppCode\_\_\['[^\.]+\.json[^;]+\;/g);
        if (matches) {
            let attachInfo = {};
            (new VM({
                sandbox: {
                    __wxAppCode__: attachInfo
                }
            })).run(matches.join(""));
            delete attachInfo["app.json"]; //主包可能存在app.json文件 删除了
            // console.log(attachInfo["app.json"])
            for (let name in attachInfo) fileObj.page[changeExt(name, ".html")] = { window: attachInfo[name] };
        }
    })

    // return

    //保存各个页面及组件的json值
    // let delWeight = 8;
    for (let file in fileObj.page) {
        let fileName = path.resolve(destDir, changeExt(file, ".json"));

        Tool.saveFile(fileName, JSON.stringify(fileObj.page[file].window, null, 4));
        log(chalk.bold.green(fileName + "保存成功"));
        // wu.save(fileName, JSON.stringify(fileObj.page[file].window, null, 4));
        // if (configFilePath == fileName) delWeight = 0;
    }


    if (appjson.subPackages) {
        for (let subPackage of appjson.subPackages) {
            if (subPackage.pages) {
                for (let item of subPackage.pages) {
                    let a = subPackage.root + item + '.xx';
                    //添加默认的 wxs, wxml, wxss
                    let jsName = changeExt(a, ".js");
                    let fileNameOfWxs = path.resolve(destDir, jsName);
                    Tool.saveFile(fileNameOfWxs, "// " + jsName + "\nPage({data: {}})");
                    let wxmlName = changeExt(a, ".wxml");
                    let fileNameOfWxml = path.resolve(destDir, wxmlName);
                    Tool.saveFile(fileNameOfWxml, "<!--" + wxmlName + "--><text>" + wxmlName + "</text>");
                    let cssName = changeExt(a, ".wxss");
                    let fileNameOfWxss = path.resolve(destDir, cssName);
                    Tool.saveFile(fileNameOfWxss, "/* " + cssName + " */");
                }
            }
        }
    }
    // console.log("处理tabBar开始")
    if (appjson.tabBar && appjson.tabBar.list) {
        let imageFiles = Tool.scanDirByExt(srcDir).filter(item => /\.(png|svg|jpeg|jpg)/.test(item)).map(item => {
            let data = fs.readFileSync(item, {})
            return {
                name: item,
                buffer: crypto.createHash("MD5").update(data).digest()
            }
        })
        appjson.tabBar.list.forEach(item => {
            item.pagePath = changeExt(item.pagePath);
            if (item.iconData) {
                let iconBuffer = crypto.createHash("MD5").update(item.iconData, 'base64').digest();
                imageFiles.some(img => {
                    if (iconBuffer.equals(img.buffer)) {
                        item.iconPath = path.relative(srcDir, img.name).replace(/\\/g, '/');
                        delete item.iconData;
                        return true
                    }
                })
            }
            if (item.selectedIconData) {
                let selectedIconBuffer = crypto.createHash("MD5").update(item.selectedIconData, 'base64').digest();
                imageFiles.some(img => {
                    if (selectedIconBuffer.equals(img.buffer)) {
                        item.selectedIconPath = path.relative(srcDir, img.name).replace(/\\/g, '/');
                        delete item.selectedIconData;
                        return true
                    }
                })
            }
        })
    }

    
    Tool.saveFile(path.resolve(destDir, 'app.json'), JSON.stringify(appjson, null, 4));
    log(chalk.bold.green("app.json  保存成功"));
    log(chalk.bold.green("解析所有包json文件完成"));
        // console.log(fileObj.page, 123)
        // console.log(path.relative("F:\\wxapk\\build\\444","F:\\wxapk\\build\\444\\img\\vip\\tag-svip.png"))
}

function splitjs(jsPath, destDir) {
    if (!fs.existsSync(jsPath)) return;
    colorlog("\n解析js文件开始:" + jsPath)
    let code = fs.readFileSync(jsPath, "utf8");
    code = code.slice(code.indexOf("define("));
    let vm = new VM({
        sandbox: {
            require() {},
            define(name, func) {
                let code = func.toString();
                code = code.slice(code.indexOf("{") + 1, code.lastIndexOf("}") - 1).trim();
                let bcode = code;
                if (code.startsWith('"use strict";') || code.startsWith("'use strict';")) code = code.slice(13);
                else if ((code.startsWith('(function(){"use strict";') || code.startsWith("(function(){'use strict';")) && code.endsWith("})();")) code = code.slice(25, -5);
                let res = jsBeautify(code);
                if (typeof res == "undefined") {
                    console.log("Fail to delete 'use strict' in \"" + name + "\".");
                    res = jsBeautify(bcode);
                }

                Tool.saveFile(path.resolve(destDir, name), jsBeautify(res).replace(/\bqq\./g, "wx."));
                log(chalk.bold.green(path.resolve(destDir, name) + "保存成功"));
            },
            definePlugin() {},
            requirePlugin() {}
        }
    });
    vm.run(code);
    log(chalk.bold.green("解析js文件完成"));
}

function parsewxml(srcDir, destDir) {
    
    let parsePath = path.resolve(srcDir, "page-frame.html");
    if (!fs.existsSync(parsePath)) {
        parsePath = path.resolve(srcDir, "app-wxss.js");
        if (!fs.existsSync(parsePath)) {
        	parsePath = path.resolve(srcDir, "page-frame.js");
        	if(!fs.existsSync(parsePath)) return
        }
    }
    colorlog("\n解析wxml文件开始:" + parsePath)
    let code = fs.readFileSync(parsePath, "utf8");
    let z = ZParse.getZ(code);
    // console.log("z",z)
    // return
    const before = "var nv_require=function(){";
    code = code.replace(/\s*var\s*nv_require\s*=\s*function\s*\(\)\s*\{/, "var nv_require=function(){")
    // let wxsCode = code.slice(code.indexOf())
    code = code.slice(code.lastIndexOf(before) + before.length, code.lastIndexOf("if(path&&e_[path]){"));
    let wxsCode = code.slice(0,code.indexOf("var nom"));

    // let json = code.slice(0, code.indexOf("};") + 1); //nnm=后面的对象
    // let endOfRequire = code.indexOf("()\r\n") + 4;
    // console.log(code.indexOf("};"),6666,code.slice(0,47))

    // if (endOfRequire == 4 - 1) endOfRequire = code.indexOf("()\n") + 3;
    let endOfRequire = code.indexOf("}()") + 4;
    code = code.slice(endOfRequire); //var x=[  到 if(path&&e_[path]){之前
    let rD = {},// {./packageB/components/collect/collect-list.wxml:{}} //对象里面保留template  key(模板名称):函数代码 back-title:function
        rE = {},//{./packageB/components/collect/collect-list.wxml:{f:m1,j:[],i:[],ti:[],ic:[]}}
        rF = {},
        requireInfo = {},
        x, vm = new VM({
            sandbox: {
                d_: rD,
                e_: rE,
                f_: rF,
                _vmRev_(data) {
                    requireInfo = data;
                    // [requireInfo] = data;
                },
                nv_require(path) {
                    return () => path;
                },
                // mynnm:requireInfo
            }
        });
        // console.log(wxsCode)
    let vmCode = code + "\n" + wxsCode + "\n_vmRev_(nnm)";
    // let vmCode = code + "\n_vmRev_([" + json + "])";
    vm.run(vmCode);
    
    x = Object.keys(rD);

    // console.log(rF,requireInfo)
    // return

    // requireInfo = JSON.parse(json);
    let pF = [],
        wxsList = {};
    for (let info in rF) {//解析wxs

        if (typeof rF[info] == "function") {
            let name = path.resolve(destDir, (info[0] == '/' ? '.' : '') + info),
                ref = rF[info]();

            pF[ref] = info;
            Tool.saveFile(name, doWxs(requireInfo[ref].toString(), info));
        } else if (typeof rF[info] == "object") {
            let name = path.resolve(destDir, (info[0] == '/' ? '.' : '') + info);
            let res = [],
                now = rF[info];
            for (let deps in now) {
                let ref = now[deps]();
                if (ref.includes(":")) res.push("<wxs module=\"" + deps + "\">\n" + doWxs(requireInfo[ref].toString()) + "\n</wxs>");
                else if (pF[ref]) res.push("<wxs module=\"" + deps + "\" src=\"" + toDir(pF[ref], info) + "\" />");
                else res.push("<wxs module=\"" + deps + "\" src=\"" + toDir(ref.slice(2), info) + "\" />");
                wxsList[name] = res.join("\n");
            }
        }
    }

    for (let name in rE) {
        tryWxml(srcDir, destDir, name, rE[name].f.toString(), z, x, rD[name], wxsList);
    }
    log(chalk.bold.green("解析wxml文件完成"));
}

function parsewxss(dir, destDir, isMain) {
    
    let saveDir = destDir;
    let files = Tool.scanDirByExt(dir, ".html");
    let frameFile = "";
    if (fs.existsSync(path.resolve(dir, "page-frame.html")))
        frameFile = path.resolve(dir, "page-frame.html");
    else if (fs.existsSync(path.resolve(dir, "app-wxss.js")))
        frameFile = path.resolve(dir, "app-wxss.js");
    else if (fs.existsSync(path.resolve(dir, "page-frame.js")))
        frameFile = path.resolve(dir, "page-frame.js");
    else throw Error("page-frame-like file is not found in the package by auto.");
    colorlog("\n解析wxss文件开始:" + frameFile)
    let code = fs.readFileSync(frameFile, "utf8");
//WXMLRT_$6e616d65732f:
	
	let wxmart = code.match(/WXMLRT_(.+?):/)[1]

    code = code.replace(/display:-webkit-box;display:-webkit-flex;/gm, '');
    // display: -webkit-flex;
    let scriptCode = code;
    //extract script content from html
    if (frameFile.endsWith(".html")) {
        try {
            const $ = cheerio.load(code);
            scriptCode = [].join.apply($('html').find('script').map(function(item) {
                return $(this).html();
            }, "\n"));
        } catch (e) {
            //ignore
        }
    }

    let window = {
        screen: {
            width: 720,
            height: 1028,
            orientation: {
                type: 'vertical'
            }
        }
    };
    let navigator = {
        userAgent: "iPhone"
    };

    scriptCode = scriptCode.slice(scriptCode.lastIndexOf('window.__wcc_version__'));
    let mainCode = 'window= ' + JSON.stringify(window) +
        ';\nnavigator=' + JSON.stringify(navigator) +
        ';\nvar __mainPageFrameReady__ = window.__mainPageFrameReady__ || function(){};var __WXML_GLOBAL__={entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};var __vd_version_info__=__vd_version_info__||{}' +
        ";\n" + scriptCode;

    //remove setCssToHead function
    mainCode = mainCode.replace('var setCssToHead = function', 'var setCssToHead2 = function');
    code = code.slice(code.lastIndexOf('var setCssToHead = function(file, _xcInvalid'));
    code = code.replace(/var _C\s*=/,"var _C=")
    code = code.slice(code.lastIndexOf('var _C='));
    code = code.slice(0, code.indexOf('function makeup'));

    let vm = new VM({ sandbox: {} });
    let runList = {},
        pureData = {},
        result = {},
        actualPure = {},
        importCnt = {},
        frameName = "",
        onlyTest = true,
        blockCss = []; //custom block css file which won't be imported by others.(no extension name)
    pureData = vm.run(code + "\n_C");

	runList[path.resolve(destDir, "./app.wxss")] = mainCode;
    for (let name of files) {
        if (name != frameFile) {
            let _code = fs.readFileSync(name, "utf8");
            _code = _code.replace(/display:-webkit-box;display:-webkit-flex;/gm, '');
            _code = _code.slice(0, _code.indexOf("\n"));
            if (_code.indexOf("setCssToHead(") > -1) {
                let lastName = name;
                if (dir !== saveDir) {
                    lastName = lastName.replace(dir, saveDir)
                }
                // let dirSplit = name.split(nowDir + '/'); //*********************************************
                // if (dirSplit.length > 1) {
                //     lastName = path.resolve(saveDir, dirSplit[1]);

                // }

                runList[lastName] = _code.slice(_code.indexOf("setCssToHead("));
            }
        }
    }


    frameName = frameFile;
    onlyTest = true;
    for (let name in runList) runVM(name, runList[name]);
    onlyTest = false;
    // console.log("Import count info: %j", importCnt);
    for (let id in pureData)
        if (!actualPure[id]) {
            if (!importCnt[id]) importCnt[id] = 0;
            if (importCnt[id] <= 1) {
                // console.log("Cannot find pure import for _C[" + id + "] which is only imported " + importCnt[id] + " times. Let importing become copying.");
            } else {
                let newFile = path.resolve(saveDir, "__wuBaseWxss__/" + id + ".wxss");
                // console.log("Cannot find pure import for _C[" + id + "], force to save it in (" + newFile + ").");
                id = Number.parseInt(id);
                actualPure[id] = newFile;
                cssRebuild.call({ cssFile: newFile }, id)();
            }
        }
    // console.log("Guess wxss(first turn) done.\nGenerate wxss(second turn)...");
    for (let name in runList) runVM(name, runList[name]);
    // console.log("Generate wxss(second turn) done.\nSave wxss...");
	
    
    for (let name in result) {
        let pathFile = path.resolve(saveDir, changeExt(name, ".wxss"));
        if(!isMain && pathFile.endsWith("app.wxss")) continue;

        Tool.saveFile(pathFile, transformCss(result[name]).replace(/\s+;wxcs_.*;/g, ''));
        log(chalk.bold.green(pathFile + "保存成功"));
    }
    log(chalk.bold.green("解析wxss文件完成"));

    function GwxCfg() {}

    GwxCfg.prototype = {
        $gwx() {}
    };
    GwxCfg.prototype[wxmart] = function(){}
    
    for (let i = 0; i < 300; i++) GwxCfg.prototype[wxmart + i] = GwxCfg.prototype[wxmart];
    // for (let i = 0; i < 300; i++) GwxCfg.prototype["$gwx" + i] = GwxCfg.prototype.$gwx;

    function cssRebuild(data) { //need to bind this as {cssFile:__name__} before call
        let cssFile;

        function statistic(data) {
            function addStat(id) {
                if (!importCnt[id]) importCnt[id] = 1, statistic(pureData[id]);
                else ++importCnt[id];
            }

            if (typeof data === "number") return addStat(data);
            for (let content of data)
                if (typeof content === "object" && content[0] == 2) addStat(content[1]);
        }

        function makeup(data) {
            var isPure = typeof data === "number";
            if (onlyTest) {
                statistic(data);
                if (!isPure) {
                    if (data.length == 1 && data[0][0] == 2) data = data[0][1];
                    else return "";
                }
                if (!actualPure[data] && !blockCss.includes(changeExt(toDir(cssFile, frameName), ""))) {
                    console.log("Regard " + cssFile + " as pure import file.");
                    actualPure[data] = cssFile;
                }
                return "";
            }
            let res = [],
                attach = "";
            if (isPure && actualPure[data] != cssFile) {
                if (actualPure[data]) return '@import "' + changeExt(toDir(actualPure[data], cssFile), ".wxss") + '";\n';
                else {
                    res.push("/*! Import by _C[" + data + "], whose real path we cannot found. */");
                    attach = "/*! Import end */";
                }
            }
            let exactData = isPure ? pureData[data] : data;
            for (let content of exactData)
                if (typeof content === "object") {
                    switch (content[0]) {
                        case 0: //rpx
                            res.push(content[1] + "rpx");
                            break;
                        case 1: //add suffix, ignore it for restoring correct!
                            break;
                        case 2: //import
                            res.push(makeup(content[1]));
                            break;
                    }
                } else res.push(content);
            return res.join("") + attach;
        }

        return () => {
            cssFile = this.cssFile;
            if (!result[cssFile]) result[cssFile] = "";
            result[cssFile] += makeup(data);
        };
    }

    function runVM(name, code) {
        let wxAppCode = {},
            handle = { cssFile: name };
        let vm = new VM({
            sandbox: Object.assign(new GwxCfg(), {
                __wxAppCode__: wxAppCode,
                setCssToHead: cssRebuild.bind(handle),
                [wxmart]:function(path, global){

                },
                $gwx(path, global) {

                }
            })
        });

        // console.log('do css runVm: ' + name);
        vm.run(code);
        for (let name in wxAppCode) {
            handle.cssFile = path.resolve(saveDir, name);
            if (name.endsWith(".wxss")) {
                wxAppCode[name]();
            }
        }
    }

    function transformCss(style) {
        let ast = csstree.parse(style);
        csstree.walk(ast, function(node) {
            if (node.type == "Comment") { //Change the comment because the limit of css-tree
                node.type = "Raw";
                node.value = "\n/*" + node.value + "*/\n";
            }
            if (node.type == "TypeSelector") {
                if (node.name.startsWith("wx-")) node.name = node.name.slice(3);
                else if (node.name == "body") node.name = "page";
            }
            if (node.children) {
                const removeType = ["webkit", "moz", "ms", "o"];
                let list = {};
                node.children.each((son, item) => {
                    if (son.type == "Declaration") {
                        if (list[son.property]) {
                            let a = item,
                                b = list[son.property],
                                x = son,
                                y = b.data,
                                ans = null;
                            if (x.value.type == 'Raw' && x.value.value.startsWith("progid:DXImageTransform")) {
                                node.children.remove(a);
                                ans = b;
                            } else if (y.value.type == 'Raw' && y.value.value.startsWith("progid:DXImageTransform")) {
                                node.children.remove(b);
                                ans = a;
                            } else {
                                let xValue = x.value.children && x.value.children.head && x.value.children.head.data.name,
                                    yValue = y.value.children && y.value.children.head && y.value.children.head.data.name;
                                if (xValue && yValue)
                                    for (let type of removeType)
                                        if (xValue == `-${type}-${yValue}`) {
                                            node.children.remove(a);
                                            ans = b;
                                            break;
                                        } else if (yValue == `-${type}-${xValue}`) {
                                    node.children.remove(b);
                                    ans = a;
                                    break;
                                } else {
                                    let mValue = `-${type}-`;
                                    if (xValue.startsWith(mValue)) xValue = xValue.slice(mValue.length);
                                    if (yValue.startsWith(mValue)) yValue = yValue.slice(mValue.length);
                                }
                                if (ans === null) ans = b;
                            }
                            list[son.property] = ans;
                        } else list[son.property] = item;
                    }
                });
                for (let name in list)
                    if (!name.startsWith('-'))
                        for (let type of removeType) {
                            let fullName = `-${type}-${name}`;
                            if (list[fullName]) {
                                node.children.remove(list[fullName]);
                                delete list[fullName];
                            }
                        }
            }
        });
        return cssbeautify(csstree.generate(ast), { indent: '    ', autosemicolon: true });
    }

}


function jsBeautify(code) {
    return UglifyJS.minify(code, { mangle: false, compress: false, output: { beautify: true, comments: true } }).code;
}

function toDir(to, from) { //get relative path without posix/win32 problem
    if (from[0] == ".") from = from.slice(1);
    if (to[0] == ".") to = to.slice(1);
    from = from.replace(/\\/g, '/');
    to = to.replace(/\\/g, '/');
    let a = Math.min(to.length, from.length);
    for (let i = 1, m = Math.min(to.length, from.length); i <= m; i++)
        if (!to.startsWith(from.slice(0, i))) {
            a = i - 1;
            break;
        }
    let pub = from.slice(0, a);
    let len = pub.lastIndexOf("/") + 1;
    let k = from.slice(len);
    let ret = "";
    for (let i = 0; i < k.length; i++)
        if (k[i] == '/') ret += '../';
    return ret + to.slice(len);
}

function commonDir(pathA, pathB) {
    if (pathA[0] == ".") pathA = pathA.slice(1);
    if (pathB[0] == ".") pathB = pathB.slice(1);
    pathA = pathA.replace(/\\/g, '/');
    pathB = pathB.replace(/\\/g, '/');
    let a = Math.min(pathA.length, pathB.length);
    for (let i = 1, m = Math.min(pathA.length, pathB.length); i <= m; i++)
        if (!pathA.startsWith(pathB.slice(0, i))) {
            a = i - 1;
            break;
        }
    let pub = pathB.slice(0, a);
    let len = pub.lastIndexOf("/") + 1;
    return pathA.slice(0, len);
}

function getWorkerPath(name) {
    let code = fs.readFileSync(name, { encoding: 'utf8' });
    let commPath = false;
    let vm = new VM({
        sandbox: {
            require() {},
            define(name) {
                name = path.dirname(name) + '/';
                if (commPath === false) commPath = name;
                commPath = commonDir(commPath, name);
            }
        }
    });
    vm.run(code.slice(code.indexOf("define(")));
    if (commPath.length > 0) commPath = commPath.slice(0, -1);
    console.log("Worker path: \"" + commPath + "\"");
    return commPath;
}

//改变扩展名
function changeExt(name, ext = "") {
    return name.slice(0, name.lastIndexOf(".")) + ext;
}

function doWxs(code, name) {
    name = name || '';
    name = name.substring(0, name.lastIndexOf('/') + 1);
    const before = 'nv_module={nv_exports:{}};';
    return js_beautify(code.slice(code.indexOf(before) + before.length, code.lastIndexOf('return nv_module.nv_exports;}')).replace(eval('/' + ('p_' + name).replace(/\//g, '\\/') + '/g'), '').replace(/nv\_/g, '').replace(/(require\(.*?\))\(\)/g, '$1'));
}

function tryWxml(srcDir, destDir, name, code, z, xPool, rDs, ...args) {
    // console.log("Decompile " + name + "...");
    let state = [null];
    try {
        doWxml(state, srcDir, destDir, name, code, z, xPool, rDs, ...args);
        log(chalk.bold.green(name + "保存成功"));
        // console.log("Decompile success!");
    } catch (e) {
        console.log("error on " + name + "(" + (state[0] === null ? "Main" : "Template-" + state[0]) + ")\nerr: ", e);
        if (state[0] === null) Tool.saveFile(path.resolve(destDir, name + ".ori.js"), code);
        else Tool.saveFile(path.resolve(destDir, name + ".tem-" + state[0] + ".ori.js"), rDs[state[0]].toString());
    }
}

function doWxml(state, srcDir, destDir, name, code, z, xPool, rDs, wxsList, moreInfo) {
    let rname = code.slice(code.lastIndexOf("return") + 6).replace(/[\;\}]/g, "").trim();
    // console.log(666,code,666)
    code = code.slice(code.indexOf("var z"), code.lastIndexOf("return")).trim();

    let r = { son: [] };
    analyze(esprima.parseScript(code).body, z, {
        [rname]: r
    }, xPool, {
        [rname]: r
    });
    let ans = [];
    for (let elem of r.son) ans.push(elemToString(elem, 0, moreInfo));
    let result = [];

    for (let v in rDs) {
        state[0] = v;
        let oriCode = rDs[v].toString();
        let rname = oriCode.slice(oriCode.lastIndexOf("return") + 6).replace(/[\;\}]/g, "").trim();
        let tryPtr = oriCode.indexOf("\ntry{");
        let zPtr = oriCode.indexOf("var z=");
        let code = oriCode.slice(tryPtr + 5, oriCode.lastIndexOf("\n}catch(")).trim();
        if (zPtr != -1 && tryPtr > zPtr) {
            let attach = oriCode.slice(zPtr);
            attach = attach.slice(0, attach.indexOf("()")) + "()\n";
            code = attach + code;
        }
        let r = { tag: "template", v: { name: v }, son: [] };
        analyze(esprima.parseScript(code).body, z, {
            [rname]: r
        }, xPool, {
            [rname]: r
        });

        result.push(elemToString(r, 0, moreInfo));
    }
    result.push(ans.join(""))

    name = path.resolve(destDir, name);
    if (wxsList[name]) result.push(wxsList[name]);
    Tool.saveFile(name, result.join(""));
}

function analyze(core, z, namePool, xPool, fakePool = {}, zMulName = "0") {
    function anaRecursion(core, fakePool = {}) {
        return analyze(core, z, namePool, xPool, fakePool, zMulName);
    }

    function push(name, elem) {
        namePool[name] = elem;
    }

    function pushSon(pname, son) {
        if (fakePool[pname]) fakePool[pname].son.push(son);
        else namePool[pname].son.push(son);
    }

    for (let ei = 0; ei < core.length; ei++) {
        let e = core[ei];
        switch (e.type) {
            case "ExpressionStatement":
                {
                    let f = e.expression;
                    if (f.callee) {
                        if (f.callee.type == "Identifier") {
                            switch (f.callee.name) {
                                case "_r":
                                    namePool[f.arguments[0].name].v[f.arguments[1].value] = z[f.arguments[2].value];
                                    break;
                                case "_rz":
                                    namePool[f.arguments[1].name].v[f.arguments[2].value] = z.mul[zMulName][f.arguments[3].value];
                                    break;
                                case "_":
                                    pushSon(f.arguments[0].name, namePool[f.arguments[1].name]);
                                    break;
                                case "_2":
                                    {
                                        let item = f.arguments[6].value; //def:item
                                        let index = f.arguments[7].value; //def:index
                                        let data = z[f.arguments[0].value];
                                        let key = escodegen.generate(f.arguments[8]).slice(1, -1); //f.arguments[8].value;//def:""
                                        let obj = namePool[f.arguments[5].name];
                                        let gen = namePool[f.arguments[1].name];
                                        if (gen.tag == "gen") {
                                            let ret = gen.func.body.body.pop().argument.name;
                                            anaRecursion(gen.func.body.body, {
                                                [ret]: obj
                                            });
                                        }
                                        obj.v["wx:for"] = data;
                                        if (index != "index") obj.v["wx:for-index"] = index;
                                        if (item != "item") obj.v["wx:for-item"] = item;
                                        if (key != "") obj.v["wx:key"] = key;
                                    }
                                    break;
                                case "_2z":
                                    {
                                        let item = f.arguments[7].value; //def:item
                                        let index = f.arguments[8].value; //def:index
                                        let data = z.mul[zMulName][f.arguments[1].value];
                                        let key = escodegen.generate(f.arguments[9]).slice(1, -1); //f.arguments[9].value;//def:""
                                        let obj = namePool[f.arguments[6].name];
                                        let gen = namePool[f.arguments[2].name];
                                        if (gen.tag == "gen") {
                                            let ret = gen.func.body.body.pop().argument.name;
                                            anaRecursion(gen.func.body.body, {
                                                [ret]: obj
                                            });
                                        }
                                        obj.v["wx:for"] = data;
                                        if (index != "index") obj.v["wx:for-index"] = index;
                                        if (item != "item") obj.v["wx:for-item"] = item;
                                        if (key != "") obj.v["wx:key"] = key;
                                    }
                                    break;
                                case "_ic":
                                    pushSon(f.arguments[5].name, {
                                        tag: "include",
                                        son: [],
                                        v: { src: xPool[f.arguments[0].property.value] }
                                    });
                                    break;
                                case "_ai":
                                    { //template import
                                        let to = Object.keys(fakePool)[0];
                                        if (to) pushSon(to, {
                                            tag: "import",
                                            son: [],
                                            v: { src: xPool[f.arguments[1].property.value] }
                                        });
                                        else throw Error("Unexpected fake pool");
                                    }
                                    break;
                                case "_af":
                                    //ignore _af
                                    break;
                                default:
                                    throw Error("Unknown expression callee name " + f.callee.name);
                            }
                        } else if (f.callee.type == "MemberExpression") {
                            if (f.callee.object.name == "cs" || f.callee.property.name == "pop") break;
                            throw Error("Unknown member expression");
                        } else throw Error("Unknown callee type " + f.callee.type);
                    } else if (f.type == "AssignmentExpression" && f.operator == "=") {
                        //no special use
                    } else throw Error("Unknown expression statement.");
                    break;
                }
            case "VariableDeclaration":
                for (let dec of e.declarations) {
                    if (dec.init.type == "CallExpression") {
                        switch (dec.init.callee.name) {
                            case "_n":
                                push(dec.id.name, { tag: dec.init.arguments[0].value, son: [], v: {} });
                                break;
                            case "_v":
                                push(dec.id.name, { tag: "block", son: [], v: {} });
                                break;
                            case "_o":
                                push(dec.id.name, {
                                    tag: "__textNode__",
                                    textNode: true,
                                    content: z[dec.init.arguments[0].value]
                                });
                                break;
                            case "_oz":
                                push(dec.id.name, {
                                    tag: "__textNode__",
                                    textNode: true,
                                    content: z.mul[zMulName][dec.init.arguments[1].value]
                                });
                                break;
                            case "_m":
                                {
                                    if (dec.init.arguments[2].elements.length > 0)
                                        throw Error("Noticable generics content: " + dec.init.arguments[2].toString());
                                    let mv = {};
                                    let name = null,
                                        base = 0;
                                    for (let x of dec.init.arguments[1].elements) {
                                        let v = x.value;
                                        if (!v && typeof v != "number") {
                                            if (x.type == "UnaryExpression" && x.operator == "-") v = -x.argument.value;
                                            else throw Error("Unknown type of object in _m attrs array: " + x.type);
                                        }
                                        if (name === null) {
                                            name = v;
                                        } else {
                                            if (base + v < 0) mv[name] = null;
                                            else {
                                                mv[name] = z[base + v];
                                                if (base == 0) base = v;
                                            }
                                            name = null;
                                        }
                                    }
                                    push(dec.id.name, { tag: dec.init.arguments[0].value, son: [], v: mv });
                                }
                                break;
                            case "_mz":
                                {
                                    if (dec.init.arguments[3].elements.length > 0)
                                        throw Error("Noticable generics content: " + dec.init.arguments[3].toString());
                                    let mv = {};
                                    let name = null,
                                        base = 0;
                                    for (let x of dec.init.arguments[2].elements) {
                                        let v = x.value;
                                        if (!v && typeof v != "number") {
                                            if (x.type == "UnaryExpression" && x.operator == "-") v = -x.argument.value;
                                            else throw Error("Unknown type of object in _mz attrs array: " + x.type);
                                        }
                                        if (name === null) {
                                            name = v;
                                        } else {
                                            if (base + v < 0) mv[name] = null;
                                            else {
                                                mv[name] = z.mul[zMulName][base + v];
                                                if (base == 0) base = v;
                                            }
                                            name = null;
                                        }
                                    }
                                    push(dec.id.name, { tag: dec.init.arguments[1].value, son: [], v: mv });
                                }
                                break;
                            case "_gd": //template use/is
                                {
                                    let is = namePool[dec.init.arguments[1].name].content;
                                    let data = null,
                                        obj = null;
                                    ei++;
                                    for (let e of core[ei].consequent.body) {
                                        if (e.type == "VariableDeclaration") {
                                            for (let f of e.declarations) {
                                                if (f.init.type == "LogicalExpression" && f.init.left.type == "CallExpression") {
                                                    if (f.init.left.callee.name == "_1") data = z[f.init.left.arguments[0].value];
                                                    else if (f.init.left.callee.name == "_1z") data = z.mul[zMulName][f.init.left.arguments[1].value];
                                                }
                                            }
                                        } else if (e.type == "ExpressionStatement") {
                                            let f = e.expression;
                                            if (f.type == "AssignmentExpression" && f.operator == "=" && f.left.property && f.left.property.name == "wxXCkey") {
                                                obj = f.left.object.name;
                                            }
                                        }
                                    }
                                    namePool[obj].tag = "template";
                                    Object.assign(namePool[obj].v, { is: is, data: data });
                                }
                                break;
                            default:
                                {
                                    let funName = dec.init.callee.name;
                                    
                                    zMulName = funName;
                                    // console.log(789456465456465,z.mul[zMulName])
                                    // if (funName.startsWith("gz$gwx")) {
                                    //     zMulName = funName.slice(6);

                                    // } else throw Error("Unknown init callee " + funName);
                                }
                        }
                    } else if (dec.init.type == "FunctionExpression") {
                        push(dec.id.name, { tag: "gen", func: dec.init });
                    } else if (dec.init.type == "MemberExpression") {
                        if (dec.init.object.type == "MemberExpression" && dec.init.object.object.name == "e_" && dec.init.object.property.type == "MemberExpression" && dec.init.object.property.object.name == "x") {
                            if (dec.init.property.name == "j") { //include
                                //do nothing
                            } else if (dec.init.property.name == "i") { //import
                                //do nothing
                            } else throw Error("Unknown member expression declaration.");
                        } else throw Error("Unknown member expression declaration.");
                    } else throw Error("Unknown declaration init type " + dec.init.type);
                }
                break;
            case "IfStatement":
                if (e.test.callee.name.startsWith("_o")) {
                    function parse_OFun(e) {
                        if (e.test.callee.name == "_o") return z[e.test.arguments[0].value];
                        else if (e.test.callee.name == "_oz") return z.mul[zMulName][e.test.arguments[1].value];
                        else throw Error("Unknown if statement test callee name:" + e.test.callee.name);
                    }

                    let vname = e.consequent.body[0].expression.left.object.name;
                    let nif = { tag: "block", v: { "wx:if": parse_OFun(e) }, son: [] };
                    anaRecursion(e.consequent.body, {
                        [vname]: nif
                    });
                    pushSon(vname, nif);
                    if (e.alternate) {
                        while (e.alternate && e.alternate.type == "IfStatement") {
                            e = e.alternate;
                            nif = { tag: "block", v: { "wx:elif": parse_OFun(e) }, son: [] };
                            anaRecursion(e.consequent.body, {
                                [vname]: nif
                            });
                            pushSon(vname, nif);
                        }
                        if (e.alternate && e.alternate.type == "BlockStatement") {
                            e = e.alternate;
                            nif = { tag: "block", v: { "wx:else": null }, son: [] };
                            anaRecursion(e.body, {
                                [vname]: nif
                            });
                            pushSon(vname, nif);
                        }
                    }
                } else throw Error("Unknown if statement.");
                break;
            default:
                throw Error("Unknown type " + e.type);
        }
    }
}

function wxmlify(str, isText) {
    if (typeof str == "undefined" || str === null) return "Empty"; //throw Error("Empty str in "+(isText?"text":"prop"));
    if (isText) return str; //may have some bugs in some specific case(undocumented by tx)
    else return str.replace(/"/g, '\\"');
}

function elemToString(elem, dep, moreInfo = false) {
    
    const longerList = []; //put tag name which can't be <x /> style.
    const indent = ' '.repeat(4);

    function isTextTag(elem) {
        return elem.tag == "__textNode__" && elem.textNode;
    }

    function elemRecursion(elem, dep) {
        return elemToString(elem, dep, moreInfo);
    }

    function trimMerge(rets) {
        let needTrimLeft = false,
            ans = "";
        for (let ret of rets) {
            if (ret.textNode == 1) {
                if (!needTrimLeft) {
                    needTrimLeft = true;
                    ans = ans.trimRight();
                }
            } else if (needTrimLeft) {
                needTrimLeft = false;
                ret = ret.trimLeft();
            }
            ans += ret;
        }
        return ans;
    }

    if (isTextTag(elem)) {
        //In comment, you can use typify text node, which beautify its code, but may destroy ui.
        //So, we use a "hack" way to solve this problem by letting typify program stop when face textNode
        let str = new String(wxmlify(elem.content, true));
        str.textNode = 1;
        return wxmlify(str, true); //indent.repeat(dep)+wxmlify(elem.content.trim(),true)+"\n";
    }
    if (elem.tag == "block" && !moreInfo) {
        if (elem.son.length == 1 && !isTextTag(elem.son[0])) {
            let ok = true,
                s = elem.son[0];
            for (let x in elem.v)
                if (x in s.v) {
                    ok = false;
                    break;
                }
            if (ok && !(("wx:for" in s.v || "wx:if" in s.v) && ("wx:if" in elem.v || "wx:else" in elem.v || "wx:elif" in elem.v))) { //if for and if in one tag, the default result is an if in for. And we should block if nested in elif/else been combined.
                Object.assign(s.v, elem.v);
                return elemRecursion(s, dep);
            }
        } else if (Object.keys(elem.v).length == 0) {
            let ret = [];
            for (let s of elem.son) ret.push(elemRecursion(s, dep));
            return trimMerge(ret);
        }
    }
    let ret = indent.repeat(dep) + "<" + elem.tag;
    for (let v in elem.v) ret += " " + v + (elem.v[v] !== null ? "=\"" + wxmlify(elem.v[v]) + "\"" : "");
    if (elem.son.length == 0) {
        if (longerList.includes(elem.tag)) return ret + " />\n";
        else return ret + "></" + elem.tag + ">\n";
    }
    ret += ">\n";
    let rets = [ret];
    for (let s of elem.son) rets.push(elemRecursion(s, dep + 1));
    rets.push(indent.repeat(dep) + "</" + elem.tag + ">\n");
    return trimMerge(rets);
}


function colorlog(...name) {
    console.log(chalk.bold.green(...name))
}




module.exports = {
    restore
};
