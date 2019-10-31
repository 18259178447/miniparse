const fs = require("fs");
const path = require("path");

module.exports = {
    saveFile(name, content) {
        let dir = path.dirname(name);
        let isExist = fs.existsSync(dir);
        if (!isExist) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(name, content);
    },
    scanDirByExt(dir, ext=""){
    	let result = [];
    	function loop(dir){
    		let files = fs.readdirSync(dir);
    		files.forEach(file=>{
    			let name = path.resolve(dir, file);
    			let stats = fs.statSync(name);
    			if (stats.isDirectory()) return loop(name);
    			if (stats.isFile() && name.endsWith(ext)) result.push(name);
    		})
    	}
    	loop(dir);
    	return result;
    },
    isDir(path){
    	return fs.existsSync(path) && fs.statSync(path).isDirectory();
    }
};
