//解包
const fs = require("fs");
const path = require("path");
const Tool = require("./tool.js");
var log = require('single-line-log').stdout;
const chalk = require('chalk');

function parse(src, dest) { //src 源目录path  dest保存文件path  
    let resultBuf, headerInfo, fileInfo
    
    console.log(chalk.bold.green("包名：" + src + "\n"))
    try {
        resultBuf = fs.readFileSync(src);
    } catch (e) {
        console.log("读取包数据错误", e)
    }
    headerInfo = header(resultBuf); //获取包头信息
    fileInfo = getFileInfo(resultBuf.slice(14, headerInfo.infoListLength + 14)) //获取文件列表
    saveFiles(dest, fileInfo, resultBuf) //保存包解析的文件

}

function header(buf) {
    colorlog("包头部信息:");
    buf = buf.slice(0, 14); //解析前14个字节得到 文件名信息长度 和 内容数据长度
    let firstMark = buf.readUInt8(0);
    colorlog("  firstMark: 0x%s", firstMark.toString(16));
    let unknownInfo = buf.readUInt32BE(1);
    colorlog("  unknownInfo: ", unknownInfo);
    let infoListLength = buf.readUInt32BE(5);
    colorlog("  infoListLength: ", infoListLength);
    let dataLength = buf.readUInt32BE(9);
    colorlog("  dataLength: ", dataLength);
    let lastMark = buf.readUInt8(13);
    colorlog("  lastMark: 0x%s", lastMark.toString(16));
    // if (firstMark != 0xbe || lastMark != 0xed) throw Error("Magic number is not correct!");
    return { infoListLength, dataLength };
}

function getFileInfo(buf) {
    // console.log("\n解析包文件列表信息:");
    let fileCount = buf.readUInt32BE(0);
    let fileInfo = [],
        off = 4;
    colorlog("  文件数量: ", fileCount);
    for (let i = 0; i < fileCount; i++) {
        let info = {};
        let nameLen = buf.readUInt32BE(off);
        off += 4;
        info.name = buf.toString('utf8', off, off + nameLen);
        off += nameLen;
        info.off = buf.readUInt32BE(off);
        off += 4;
        info.size = buf.readUInt32BE(off);
        off += 4;
        fileInfo.push(info);
    }
    // {
    //   name: '/lshd_yanzhi/pages/share/share.html',
    //   off: 1349174,
    //   size: 17744
    // },
    // {
    //   name: '/lshd_yanzhi/pages/sharepost/sharepost.html',
    //   off: 1366918,
    //   size: 3081
    // },
    // console.log(fileInfo)

    return fileInfo;
}

function saveFiles(dest, fileInfo, buf) {
    colorlog("\n开始保存原始文件");
    // let dir = path.resolve(src, "..", path.basename(src, ".wxapkg"));
    fileInfo.forEach(item => {
        let _name = path.resolve(dest, (item.name.startsWith("/") ? "." : "") + item.name);
        try {
            let content = buf.slice(item.off, item.off + item.size);
            Tool.saveFile(_name, content);
            // let _path = path.dirname(_name);
            // let _content = buf.slice(item.off, item.off + item.size)
            // let isExist = fs.existsSync(_path);
            // if (!isExist) fs.mkdirSync(_path, { recursive: true })
            // fs.writeFileSync(_name, _content);
            log(chalk.bold.green(_name + " 保存成功"))
        } catch (e) {
            console.log(_name + "保存失败:", e)
        }
    })
    log(chalk.bold.green("\n原始文件保存完成\n\n"))
}

function colorlog(...name) {
    console.log(chalk.bold.green(...name))
}


module.exports = {
    parse
};
