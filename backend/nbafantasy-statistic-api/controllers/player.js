const {playerService}=require("../services")
const {responseWithData, responseWithoutData} = require("./responses");
const {CustomError} = require("../utils/error");

/**
 * GET /players/getPlayer
 * @tags players
 * @param {string} playerId.query - playerId
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getPlayer=async function (req,res){
    try{
        const {playerId}=req.query
        const player =await playerService.getPlayer(playerId)
        responseWithData(res,200,"OK",player)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

/**
 * GET /players/getPlayers
 * @tags players
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getPlayers=async function (req,res){
    try{
        const player =await playerService.getPlayers()
        responseWithData(res,200,"OK",player)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}


/**
 * GET /api/players/getStatsOfPlayer
 * @tags players
 * @param {number} season.query - season
 * @param {string} playerId.query - playerId
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getStatsOfPlayer=async function (req,res){
    try{
        const {season,playerId}=req.query
        const stats =await playerService.getStatsOfPlayer({season:Number(season),playerId})
        responseWithData(res,200,"OK",stats)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

/**
 * GET /api/players/getMetaOfPlayer
 * @tags players
 * @param {number} season.query - season
 * @param {string} playerId.query - playerId
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getMetaOfPlayer=async function (req,res){
    try{
        const {season,playerId}=req.query
        const meta =await playerService.getMetaOfPlayer({season:Number(season),playerId})
        responseWithData(res,200,"OK",meta)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

/**
 * GET /api/players/getOwnershipRatioOfPlayer
 * @tags players
 * @param {number} season.query - season
 * @param {string} playerId.query - playerId
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getOwnershipRatioOfPlayer=async function (req,res){
    try{
        const {season,playerId}=req.query
        const meta =await playerService.getOwnershipRatioOfPlayer({season:Number(season),playerId})
        responseWithData(res,200,"OK",meta)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

/**
 * GET /api/players/getDraftAnalysisOfPlayer
 * @tags players
 * @param {number} season.query - season
 * @param {string} playerId.query - playerId
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getDraftAnalysisOfPlayer=async function (req,res){
    try{
        const {season,playerId}=req.query
        const meta =await playerService.getDraftAnalysisOfPlayer({season:Number(season),playerId})
        responseWithData(res,200,"OK",meta)
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

module.exports={
    getPlayer:getPlayer,
    getPlayers,
    getStatsOfPlayer:getStatsOfPlayer,
    getMetaOfPlayer:getMetaOfPlayer,
    getOwnershipRatioOfPlayer:getOwnershipRatioOfPlayer,
    getDraftAnalysisOfPlayer:getDraftAnalysisOfPlayer,
}
