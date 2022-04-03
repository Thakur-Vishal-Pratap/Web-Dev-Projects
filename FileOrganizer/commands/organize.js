const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp4" , "mkv", "mp3"],
    archives: ["zip" , "7z" , "rar" , "tar" , "gz" , "ar" , "iso" , "xz"],
    documents: ["docx", "pdf" , "doc" , "xlsx" , "xls" , "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex" ],
    app: ["exe" , "dmg" , "pkg" , "deb"],
    images: ["png" , "jpg" , "jpeg"]
}

function organize(srcPath){
    if(srcPath==undefined){
        srcPath=process.cwd();
        //console.log(srcPath);
    }
    let organizedFiles = path.join(srcPath, "organized_files");
    
    console.log("organized files folder path is " , organizedFiles);
    if(fs.existsSync(organizedFiles)==false){
        fs.mkdirSync(organizedFiles);
    }else console.log("Folder Exists");

    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);

    for(let i=0 ; i<allFiles.length ; i++){
        // let fileName = allFiles[i].split(".")[1];
        // check if it is file or a folder
        let fullPathOfFile = path.join(srcPath , allFiles[i])
        // 1.1 get extn name
        let isFile = fs.lstatSync(fullPathOfFile).isFile();
        if(isFile){
            let ext = path.extname(allFiles[i]).split(".")[1];
            let folderName  = getFolderName(ext);
                    // 1.2 get folder name from extension
                   // 1.3 copy from source(srcPath) and paste in destination
            copyFileToDest(srcPath , fullPathOfFile , folderName);
        }

    }
}

function getFolderName(ext){
    
    for(let key in types){
        for(let i=0 ; i<types[key].length ; i++){
            if(types[key][i]==ext){
                return key;
            }
        }
    }
    return "micellaneuos";
}

function copyFileToDest(srcPath , fullPathOfFile , folderName){
    let destFolderPath = path.join(srcPath, "organized_files" , folderName);
    if(!fs.existsSync(destFolderPath)){
        fs.mkdirSync(destFolderPath);
    }
    let fileName = path.basename(fullPathOfFile);
    let destFileName=path.join(destFolderPath , fileName);
    fs.copyFileSync(fullPathOfFile , destFileName);
}

// let srcPath = "C:/Users/Asus/Desktop/Web Dev/Node/FileOrganizer/downloads";
// organize(srcPath); 

module.exports={
    organize:organize
}
