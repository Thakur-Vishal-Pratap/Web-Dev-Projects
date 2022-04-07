const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url){
    // console.log("from allMatch.js" , url);
    request (url , cb);
}

function cb(err , res, body){
    if(err){
        console.log(err);
    }else{
        getMatchDetails(body);
    }
}

function getMatchDetails(html){
    let selecTool = cheerio.load(html);

    let desc = selecTool(".match-header-info.match-info-MATCH");
    
}

module.export = {
    gifs : getInfoFromScorecard,
};