const fs = require("fs");
const path = require("path");
const { parse } = require("./parse.js");
const { restore } = require("./restore.js");
const Tool = require("./tool.js");
const src = getSrc();
const chalk = require('chalk');
const readline = require('readline');
var log = require('single-line-log').stdout;
const sourseDir = path.resolve("build");


console.log(chalk.bold.green("\n******************************************************************************************"))
console.log(chalk.bold.green(`\n1.请在根目录下创建build目录后放入需要解析的小程序
2.如果是微信小程序单包直接放入即可
3.如果是微信小程序分包，在build目录下创建一个目录放入所有主包和分包即可
4.如果是qq小程序，放入小程序包目录即可\n`))
console.log(chalk.bold.green("******************************************************************************************\n"))

let files;
if (fs.existsSync(sourseDir)) {
    files = getFiles(sourseDir);
    if (!files.length) {
        console.log(chalk.red("build目录没有可解析的包"))
        throw ""
    }
} else {
    console.log(chalk.red("请在根目录下创建build目录后放入需要解析的小程序"))
    throw ""
}

files.forEach((item, index) => {
    console.log(chalk.bold.yellow(` ${index}. ${item.name}`) + (item.isParse ? chalk.bold.green(" (已存在解包)"):""))
})

console.log("\n请输入序号选出您要解析的包,多个请用空格隔开")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    line = line.trim().split(" ");
    let b = line.every(item => {
        console.log(item)
        return item && !isNaN(+item) && files[item]
    })

    if (b) {
        rl.close()
        let lines = line.map(item => +item);
        lines.forEach(item => {
            let src = path.resolve(sourseDir, files[item].name)
            start(src);
            // console.log()
        })

    } else {
        console.log("请输入正确的序号!")
    }
    // switch (line.trim()) {
    //   case 'hello':
    //     console.log('world!');
    //     break;
    //   default:
    //     console.log(`你输入的是：'${line.trim()}'`);
    //     break;
    // }
    // rl.prompt();
    // rl.close()
})

// rl.prompt();

// rl.on('line', (line) => {
//   switch (line.trim()) {
//     case 'hello':
//       console.log('world!');
//       break;
//     default:
//       console.log(`你输入的是：'${line.trim()}'`);
//       break;
//   }
//   // rl.prompt();
//   rl.close()
// }).on('close', () => {
//   console.log('再见!');
//   process.exit(0);
// });

function getFiles(dir) {
    let files = fs.readdirSync(dir);
    return files.filter((file, index, arr) => {
        if (file.endsWith(".wxapkg")) return true;
        if (file.endsWith("_build")) return false;
        let name = path.resolve(dir, file);
        let stats = fs.statSync(name);
        if (stats.isDirectory()) {
            if (files.indexOf(file + ".wxapkg") > -1) return false
            return fs.readdirSync(name).some(item => {
                return item === "app-config.json" || item.endsWith(".wxapkg")
            })
        }
        return false;
    }).map(file=>{
        return {
            name:file,
            isParse: file.endsWith(".wxapkg") ? files.indexOf(file.split(".wxapkg")[0]) > -1 : files.indexOf(file + "_build") > -1
        }
    });
}


function start(src) {
    if (!fs.existsSync(src)) {
        throw "路径不存在,请使用 node index src=./build/111.wxapkg 或者 node index src=./build/111"
    }
console.log(chalk.bold.green("\n************************************开始解包***************************************"))
    if (Tool.isDir(src)) { //如果是目录
        let wxapkgs = Tool.scanDirByExt(src, ".wxapkg"); //扫描是否有wxapkg
        if (wxapkgs.length) { //表示有分包的解包, 解析成和qq小程序一样目录
            wxapkgs.forEach(item => {
                parse(item, src);
            })
        }else{
            console.log(chalk.bold.green("qq包名：" + src)) 
        }
        restore(src, src + "_build");
        console.log(chalk.bold.green("\n\n保存目录" + src + "_build")) 
    } else { //无分包的解包
        let srcDir = src.split(".wxapkg")[0];
        let destDir = srcDir + "_build";
        parse(src, srcDir);
        restore(srcDir, destDir);
      console.log(chalk.bold.green("\n\n保存目录" + destDir))  
    }
    console.log(chalk.bold.green("\n************************************解包结束**************************************"))
}

setTimeout(()=>{},100000000)

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

