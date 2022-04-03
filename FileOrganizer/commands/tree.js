const fs = require("fs");
const path = require ("path");

function tree(srcPath){
    if(srcPath==undefined){
        console.log("Please Enter a Valid Path");
        return;
    }
    let doesExist = fs.existsSync(srcPath);
    if(doesExist){
        printAllFileName(srcPath , " ");
    }
}

function printAllFileName(fileNow , indent){
    let isFile = fs.lstatSync(fileNow).isFile();
    // console.log();

    if(isFile){
        let fileName = path.basename(fileNow);
        console.log(indent + "|---" + fileName);
        return;
    }
    
    let dirName = path.basename(fileNow);
    console.log(indent + "'---" + dirName);
    let allFiles = fs.readdirSync(fileNow);
    for(let i=0 ; i<allFiles.length ; i++){
        let newFile = path.join(fileNow , allFiles[i])
        printAllFileName(newFile , indent+"\t");
    }
    
}

// let srcPath = "C:/Users/Asus/Desktop/Web_Dev/Node/FileOrganizer/downloads";
// tree(srcPath);

module.exports={
    tree:tree
}