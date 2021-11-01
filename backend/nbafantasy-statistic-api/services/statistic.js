let {fantasyClient,SEASON_MAP,CATEGORY_MAP}=require("../pkg/yahoo-fantasy")
const {statisticDao, playerDao} = require("../persistence/repositories");
const {Statistic} = require("../persistence/models");
const playerService=require('./player')
const objectMapper = require("object-mapper");

async function getStatisticOfPlayer({season,week,playerId}) {
    let player=await playerService.getPlayer(playerId)
    if (!player){
        throw new Error("player not found")
    }
    let statistic=await statisticDao.findByID({playerId,season,week})
    let statDto=objectMapper(statistic,mapOfStatistic)
    statDto={...statDto,...player}
    return statDto
}

async function updateStatsOfPlayer({season,week,playerId}) {
    let playerInfo=await playerService.getStatsOfPlayer({season,playerId})
    const stats=playerInfo.stats.stats
    let statistic=await statisticDao.findByID({playerId,season,week})
    if (!statistic){
        statistic=newStatisticFromYahoo({playerId,season,week},stats)
    }else {
        updateStatisticFromYahoo(statistic,stats)
    }
    await statistic.save()
    return
}

async function getStatisticOfPlayerFromYahoo({season,playerId}) {
    let player=await playerService.getPlayer(playerId)
    if (!player){
        throw new Error("player not found")
    }
    const gameKey=SEASON_MAP.get(season)
    const playerInfo = await fantasyClient.player.stats(
        `${gameKey}.p.${player.fantasyId}`
    )
    const stats=playerInfo? (playerInfo.stats? getStatsFromYahoo(playerInfo.stats.stats):null) :null
    return stats
}

module.exports={
    getStatisticOfPlayer,
    updateStatsOfPlayer:updateStatsOfPlayer,
    getStatisticOfPlayerFromYahoo:getStatisticOfPlayerFromYahoo,
}

function getStatsFromYahoo(yahooStats){
    let stat={}
    for (let yahooStat of yahooStats){
        let id=yahooStat.stat_id
        let name=CATEGORY_MAP.get(id)
        let value=Number(yahooStat.value)
        if (isNaN(value)){
            value=0
        }
        stat={...stat,...{[name]:value}}
    }
    return stat
}

function newStatisticFromYahoo({playerId,season,week},yahooStats){
    let doc={
        _id: {
            playerId:playerId,
            season: season,
            week: week,
        },
    }
    for (let yahooStat of yahooStats){
        let id=yahooStat.stat_id
        let name=CATEGORY_MAP.get(id)
        let value=Number(yahooStat.value)
        if (isNaN(value)){
            value=0
        }
        doc={...doc,...{[name]:value}}
    }
    const stat=new Statistic(doc)
    return stat
}

function updateStatisticFromYahoo(statistic,yahooStats){
    for (let yahooStat of yahooStats){
        let id=yahooStat.stat_id
        let name=CATEGORY_MAP.get(id)
        let value=Number(yahooStat.value)
        if (isNaN(value)){
            value=0
        }
        statistic[name]=value
    }
    return
}

const mapOfStatistic = {
    "_id.playerId": {
        "key":"playerId",
        "transform":function (value){
            return value.toString()
        },
        "default":"",
    },
    "_id.season":"season",
    "_id.week":"week",
    "fieldGoalPercentage":"fieldGoalPercentage",
    "freeThrowPercentage":"freeThrowPercentage",
    "threePointShotsMade":"threePointShotsMade",
    "threePointPercentage":"threePointPercentage",
    "pointsScored":"pointsScored",
    "offensiveRebounds":"offensiveRebounds",
    "totalRebounds":"totalRebounds",
    "assists":"assists",
    "blockedShots":"blockedShots",
    "steals":"steals",
    "turnovers":"turnovers",
    "assistTurnoverRatio":"assistTurnoverRatio",
    "doubleDoubles":"doubleDoubles",
};
