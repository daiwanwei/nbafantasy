const {yahooService} = require("../../services");
const {responseWithData} = require("../responses");
const {CustomError} = require("../../utils/error");
/**
 * GET /api/yahoo/league/getLeaguesByGame
 * @tags yahoo
 * @param {string} token.query - token
 * @param {string} gameKey.query - gameKey
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getLeaguesByGame=async function (req,res){
    try{
        const {token,gameKey}=req.query
        const games =await yahooService.league.getLeaguesByGame({token,gameKey})
        responseWithData(res,200,"OK",games)
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
    getLeaguesByGame:getLeaguesByGame,
}
