let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/";
const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const allMatchObj = require("./allMatch");

request (url , cb);

function cb(err , res , body){
    if(err){
        console.error("error" , err);
    }else{
        handleHtml(body);
    }
}

function handleHtml(html){
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool('a[class="ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block"]');
    // console.log(anchorElem);
    let relLink = anchorElem.attr("href");
    // console.log(relLink);
    let fullLink = "https://www.espncricinfo.com" + relLink;
    // console.log(fullLink);
    allMatchObj.getAllMatch(fullLink);
}