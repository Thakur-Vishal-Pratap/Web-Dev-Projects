const request = require("request");
const cheerio = require("cheerio");
const getScorecardObj = require("./scoreCards");
const { log } = require("console");
// const { url } = require("inspector");

function getAllMatch(url){
    // console.log("from allMatch.js" , url);
    request (url , cb);
}

function cb(err , res , body){
    if(err){
        console.error("error" , err);
    }else{
        extractAllMatchLink(body);
    }
}

function extractAllMatchLink(html){
    let selecTool = cheerio.load(html);
    let scoreCardElemArr = selecTool('a[class="ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block"][href*="full-scorecard"] ');
    // console.log(scoreCardElemArr.length);
    for(let i=0 ; i<scoreCardElemArr.length; i++){
        let scorecardLink = selecTool(scoreCardElemArr[i]).attr("href");
        // console.log(scorecardLink);
        let fullLink = "https://www.espncricinfo.com" + scorecardLink;
        console.log(fullLink);
        getScorecardObj.gifs(fullLink);
    }
}

module.exports = {
    getAllMatch : getAllMatch,
};