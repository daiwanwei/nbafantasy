const {yahooService} = require("../../services");
const {responseWithData} = require("../responses");
const {CustomError} = require("../../utils/error");


/**
 * GET /api/yahoo/player/getPlayers
 * @tags yahoo
 * @param {string} token.query - token
 * @param {string} playerList.query - playerList
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getPlayers=async function (req,res){
    try{
        const {token,playerList}=req.query
        const playerKeys=playerList.split(",")
        const players =await yahooService.player.getPlayers({token,playerKeys})
        responseWithData(res,200,"OK",players)
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
 * GET /api/yahoo/player/getPlayersByLeague
 * @tags yahoo
 * @param {string} token.query - token
 * @param {string} leagueKey.query - leagueKey
 * @param {number} size.query - size
 * @param {number} page.query - page
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getPlayersByLeague=async function (req, res){
    try{
        const {token,leagueKey,size,page}=req.query
        const players =await yahooService.player.getPlayersByLeague(
            {token,leagueKey},{size,page},
        )
        responseWithData(res,200,"OK",players)
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
 * GET /api/yahoo/player/getPlayersByTeam
 * @tags yahoo
 * @param {string} token.query - token
 * @param {string} teamKey.query - teamKey
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getPlayersByTeam=async function (req,res){
    try{
        const {token,teamKey}=req.query
        const players =await yahooService.player.getPlayersByTeam({token,teamKey})
        responseWithData(res,200,"OK",players)
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
 * GET /api/yahoo/player/updatePlayerInfoByLeague
 * @tags yahoo
 * @param {string} token.query - token
 * @param {string} leagueKey.query - leagueKey
 * @param {number} size.query - size
 * @param {number} page.query - page
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
updatePlayerInfoByLeague=async function (req, res){
    try{
        const {token,leagueKey,size,page}=req.query
        const players =await yahooService.player.updatePlayerInfoByLeague(
            {token,leagueKey},{size,page},
            )
        responseWithData(res,200,"OK",players)
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
    getPlayers:getPlayers,
    getPlayersByLeague:getPlayersByLeague,
    getPlayersByTeam:getPlayersByTeam,
    updatePlayerInfoByLeague:updatePlayerInfoByLeague,
}
