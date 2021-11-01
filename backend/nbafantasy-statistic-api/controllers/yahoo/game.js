const {yahooService} = require("../../services");
const {responseWithData} = require("../responses");
const {CustomError} = require("../../utils/error");
/**
 * GET /api/yahoo/game/getGames
 * @tags yahoo
 * @param {string} token.query - token
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getGames=async function (req,res){
    try{
        const {token}=req.query
        const games =await yahooService.game.getGames({token})
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
    getGames:getGames,
}
