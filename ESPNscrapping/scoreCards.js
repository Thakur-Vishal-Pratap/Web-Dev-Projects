const request = require("request");
const cheerio = require("cheerio");
const { connected } = require("process");

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
    let desc = selecTool('div[class="ds-text-tight-m ds-font-regular ds-text-ui-typo-mid"]');
    // console.log(desc.text());
    let descArr = desc.text().split(",");
    // console.log(descArr);
    let dateOfMAtch = descArr[2];
    let VenueOfMAtch = descArr[1];

    let matchResEle = selecTool('p[class="ds-text-tight-m ds-font-regular ds-truncate ds-text-typo-title"]');        
    let matchResult = matchResEle.text();

    
}

module.exports = {
    gifs:getInfoFromScorecard,
};