const {yahooService} = require("../../services");
const {responseWithData} = require("../responses");
const {CustomError} = require("../../utils/error");

/**
 * GET /api/yahoo/team/getTeamsByGame
 * @tags yahoo
 * @param {string} token.query - token
 * @param {string} gameList.query - gameList
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getTeamsByGame=async function (req,res){
    try{
        const {token,gameList}=req.query
        const gameKeys=gameList.split(",")
        const games =await yahooService.team.getTeamsByGame({token,gameKeys})
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

/**
 * GET /api/yahoo/team/getTeams
 * @tags yahoo
 * @param {string} token.query - token
 * @param {string} teamList.query - teamList
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getTeams=async function (req,res){
    try{
        const {token,teamList}=req.query
        const teamKeys=teamList.split(",")
        const games =await yahooService.team.getTeams({token,teamKeys})
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
    getTeamsByGame:getTeamsByGame,
    getTeams:getTeams,
}
