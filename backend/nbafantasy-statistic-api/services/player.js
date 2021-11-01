let {fantasyClient,SEASON_MAP,CATEGORY_MAP}=require("../pkg/yahoo-fantasy")
const {playerDao, statisticDao} = require("../persistence/repositories");
const {Statistic} = require("../persistence/models");
const objectMapper = require("object-mapper");

async function existPlayer(playerId,options) {
    const isExisted=await playerDao.exist(playerId)
    return isExisted
}

async function getPlayer(playerId,options) {
    const player=await playerDao.findByID(playerId)
    let playerDto=objectMapper(player,mapOfPlayer)
    return playerDto
}

async function getStatsOfPlayer({season,playerId}) {
    const player=await playerDao.findByID(playerId)
    if (!player){
        throw new Error("player not found")
    }
    const gameKey=SEASON_MAP.get(season)
    const stats = await fantasyClient.player.stats(
        `${gameKey}.p.${player.fantasyId}`
    )
    return stats
}

async function getMetaOfPlayer({season,playerId}) {
    const player=await playerDao.findByID(playerId)
    if (!player){
        throw new Error("player not found")
    }
    const gameKey=SEASON_MAP.get(season)
    const meta = await fantasyClient.player.meta(
        `${gameKey}.p.${player.fantasyId}`
    )
    return meta
}

async function getOwnershipRatioOfPlayer({season,playerId}) {
    const player=await playerDao.findByID(playerId)
    if (!player){
        throw new Error("player not found")
    }
    const gameKey=SEASON_MAP.get(season)
    const ratio = await fantasyClient.player.percent_owned(
        `${gameKey}.p.${player.fantasyId}`
    )
    return ratio
}

async function getDraftAnalysisOfPlayer({season,playerId}) {
    const player=await playerDao.findByID(playerId)
    if (!player){
        throw new Error("player not found")
    }
    const gameKey=SEASON_MAP.get(season)
    const analysis = await fantasyClient.player.draft_analysis(
        `${gameKey}.p.${player.fantasyId}`
    )
    return analysis
}

module.exports={
    existPlayer,
    getPlayer:getPlayer,
    getStatsOfPlayer:getStatsOfPlayer,
    getMetaOfPlayer:getMetaOfPlayer,
    getOwnershipRatioOfPlayer:getOwnershipRatioOfPlayer,
    getDraftAnalysisOfPlayer:getDraftAnalysisOfPlayer,
}

const mapOfPlayer={
    "_id": {
        "key":"playerId",
        "transform":function (value){
            return value.toString()
        },
        "default":"",
    },
    "name":"name",
}
