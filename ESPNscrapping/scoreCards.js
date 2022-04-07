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

    // get date of the Match
    let dateOfMAtch = descArr[2];

    //get Venue of the Match
    let VenueOfMAtch = descArr[1];

    //get result of the match
    let matchResEle = selecTool('p[class="ds-text-tight-m ds-font-regular ds-truncate ds-text-typo-title"]');        
    let matchResult = matchResEle.text();


    //get both team names
    let teamNames = selecTool('a[class="ds-text-ui-typo hover:ds-text-ui-typo-primary ds-block"]');        
    let Team1 = selecTool(teamNames[0]).text();
    let Team2 = selecTool(teamNames[1]).text();
    //console.log(Team1);
    //console.log(Team2);

    //get innings
    let allBatsManTable = selecTool('table[class="ds-w-full ds-table ds-table-xs ds-table-fixed ci-scorecard-table"] tbody');
    // console.log(allBatsManRows.text());
    let htmlString = "";
    for(let i=0; i<allBatsManTable.length ; i++){
        htmlString += selecTool(allBatsManTable[i]).html();

        let allRows = selecTool(allBatsManTable[i]).find("tr");

        for(let i=0 ; i<allRows.length ; i++){
            let row = selecTool(allRows[i]);
            if(selecTool(row).hasClass("ds-text-tight-s")){
                let firstColofRow = row.find("td")[0];
                if(selecTool(firstColofRow).hasClass("ds-min-w-max")){
                    let playerName = selecTool(row.find("td")[0]).text();
                    let runs = selecTool(row.find("td")[2]).text();
                    let balls = selecTool(row.find("td")[3]).text();
                    let numOf4 = selecTool(row.find("td")[5]).text();
                    let numOf6 = selecTool(row.find("td")[6]).text();
                    let runRate = selecTool(row.find("td")[7]).text();

                    console.log(
                        `${playerName} | ${runs} | ${balls} | ${numOf4} | ${numOf6} | ${runRate}`
                    );
                }
            }
        }
    }

}

module.exports = {
    gifs:getInfoFromScorecard,
};