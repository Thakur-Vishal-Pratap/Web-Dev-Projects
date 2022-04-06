const request = require("request");
const cheerio = require("cheerio");



function getInfoFromScorecard(url){
    // console.log("from allMatch.js" , url);
    request (url , cb);
}

module.export = {
    gifs : getInfoFromScorecard,
};