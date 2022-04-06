let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/";

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
    let anchorElement = selecTool('a[data-hover="View All Results"]');
    // console.log(anchorElement.html());
    let relLink = anchorElement.attr("href");
    console.log(relLink);
    let fullLink = "https://www.espncricinfo.com" + relLink;
    console.log(fullLink);
    allMatchObj.getAllMatch(fullLink)
}