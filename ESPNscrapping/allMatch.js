const request = require("request");
const cheerio = require("cheerio");
const getScorecardObj = require("./scoreCards");
const { url } = require("inspector");

function getAllMatch(url){
    // console.log("from allMatch.js" , url);
    request (url , cb);
}

function cb(err , res , body){
    if(err){
        console.error("error" , err);
    }else{
        handleHtml(body);
    }
}

function handleHtml(html){
    let selecTool = cheerio.load(html);
    let scoreCardElemArr = selecTool('a[data-hover="Scorecard"]');
    for(let i=0 ; i<scoreCardElemArr.length; i++){
        let scorecardLink = selecTool(scoreCardElemArr[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + scorecardLink;
        getScorecardObj.gifs(fullLink);
    }
}

module.export = {
    getAllMatch : getAllMatch,
};