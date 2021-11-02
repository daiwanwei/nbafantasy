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
    if (!statistic){
        return null
    }
    let statDto=objectMapper(statistic,mapOfStatistic)
    statDto={...statDto,...player}
    return statDto
}

async function updateStats({season,week}) {
    let players=await playerService.getPlayers()
    for (let player of players){
        updateStatsOfPlayer({season, week, playerId: player.playerId})
            .then(() => console.log(`${player.name} update successfully`))
            .catch((e)=>{
                console.log(e)
            })
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return
}

async function updateStatsOfPlayer({season,week,playerId}) {
    let statistic=await statisticDao.findByID({playerId,season,week})
    if (statistic){
        return
    }
    const stats=await getStatisticOfPlayerFromYahoo({season,playerId})
    statistic=newStatisticFromYahoo({playerId,season,week},stats)
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
    console.log(`${playerId}:in api end`)
    const stats=playerInfo? (playerInfo.stats? getStatsFromYahoo(playerInfo.stats.stats):null) :null
    return stats
}

module.exports={
    getStatisticOfPlayer,
    updateStats,
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

function newStatisticFromYahoo({playerId,season,week},stats){
    let doc={
        _id: {
            playerId:playerId,
            season: season,
            week: week,
        },
    }
    doc={...doc,...stats}
    const stat=new Statistic(doc)
    return stat
}

function updateStatisticFromYahoo(statistic,yahooStats){
    statistic.gamesPlayed=yahooStats.gamesPlayed
    statistic.gamesStarted=yahooStats.gamesStarted
    statistic.minutesPlayed=yahooStats.minutesPlayed
    statistic.fieldGoalsAttempted=yahooStats.fieldGoalsAttempted
    statistic.fieldGoalsMade=yahooStats.fieldGoalsMade
    statistic.fieldGoalPercentage=yahooStats.fieldGoalPercentage
    statistic.freeThrowsAttempted=yahooStats.freeThrowsAttempted
    statistic.freeThrowsMade=yahooStats.freeThrowsMade
    statistic.freeThrowPercentage=yahooStats.freeThrowPercentage
    statistic.threePointShotsAttempted=yahooStats.threePointShotsAttempted
    statistic.threePointShotsMade=yahooStats.threePointShotsMade
    statistic.threePointPercentage=yahooStats.threePointPercentage
    statistic.pointsScored=yahooStats.pointsScored
    statistic.offensiveRebounds=yahooStats.offensiveRebounds
    statistic.defensiveRebounds=yahooStats.defensiveRebounds
    statistic.totalRebounds=yahooStats.totalRebounds
    statistic.assists=yahooStats.assists
    statistic.steals=yahooStats.steals
    statistic.blockedShots=yahooStats.blockedShots
    statistic.turnovers=yahooStats.turnovers
    statistic.assistTurnoverRatio=yahooStats.assistTurnoverRatio
    statistic.personalFouls=yahooStats.personalFouls
    statistic.timesFouledOut=yahooStats.timesFouledOut
    statistic.technicalFouls=yahooStats.technicalFouls
    statistic.ejections=yahooStats.ejections
    statistic.flagrantFouls=yahooStats.flagrantFouls
    statistic.minutesPerGame=yahooStats.minutesPerGame
    statistic.doubleDoubles=yahooStats.doubleDoubles
    statistic.tripleDoubles=yahooStats.tripleDoubles
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
