let inputArr = process.argv.slice(2);
let helpFunc = require("./commands/help");
let organizeFunc = require("./commands/organize");
let treeFunc = require("./commands/tree")
let command = inputArr[0];
let path = inputArr[1];     
switch (command){
    case "tree":
        //call tree function
        // console.log("This is tree function called and executed");
        treeFunc.tree(path);
        break;
    case "organize":
        organizeFunc.organize(path);
        break; 
    case "help" :
        //call help function
        // console.log("This is help function called and executed");
        helpFunc.help();
        break;
    default:
        console.log("Command Not Found");
        break;
}