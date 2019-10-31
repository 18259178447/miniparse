const fs = require("fs");
const path = require("path");
const { parse } = require("./parse.js");
const { restore } = require("./restore.js");
const Tool = require("./tool.js");
const src = getSrc();

if (!fs.existsSync(src)) {
    throw "路径不存在,请使用 node index src=./build/111.wxapkg 或者 node index src=./build/111"
}

if (Tool.isDir(src)) { //如果是目录
    let wxapkgs = Tool.scanDirByExt(src, ".wxapkg"); //扫描是否有wxapkg
    if (wxapkgs.length) { //表示有分包的解包, 解析成和qq小程序一样目录
    	wxapkgs.forEach(item=>{
    		parse(item,src);
    	})
    	console.log(wxapkgs)
    }
    restore(src, src + "_build");
} else {//无分包的解包
	let srcDir = src.split(".wxapkg")[0];
	let destDir = srcDir  + "_build";
	parse(src,srcDir);
    restore(srcDir, destDir);
}


function getSrc() {
    let src = "";
    let dest = "";
    let iter = process.argv[Symbol.iterator]();
    let nxt = iter.next();
    while (!nxt.done && !src) {
        if (nxt.value.startsWith("src=")) {
            src = nxt.value.split("=")[1];
        }
        nxt = iter.next();
    }
    return src
}
