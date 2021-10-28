const {statisticService}=require("../services")
const {responseWithData, responseWithoutData} = require("./responses");
const {CustomError} = require("../utils/error");

/**
 * GET /statistic/updateStatsOfPlayer
 * @tags statistic
 * @param {number} season.query - season
 * @param {number} week.query - week
 * @param {string} playerId.query - playerId
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
updateStatsOfPlayer=async function (req,res){
    try{
        const {season,week,playerId}=req.query

        const stats =await statisticService.updateStatsOfPlayer({season:Number(season),week:Number(week),playerId})
        responseWithoutData(res,200,"OK")
        return
    }catch (e){
        if (e instanceof CustomError) {
            responseWithoutData(res,e.code,e.message)
        } else {
            responseWithoutData(res,500,e.message)
        }
        return
    }
}

/**
 * GET /statistic/getStatisticOfPlayerFromYahoo
 * @tags statistic
 * @param {number} season.query - season
 * @param {number} week.query - week
 * @param {string} playerId.query - playerId
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getStatisticOfPlayerFromYahoo=async function (req,res){
    try{
        const {season,week,playerId}=req.query

        const stats =await statisticService.getStatisticOfPlayerFromYahoo({season:Number(season),week:Number(week),playerId})
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


module.exports={
    updateStatsOfPlayer:updateStatsOfPlayer,
    getStatisticOfPlayerFromYahoo:getStatisticOfPlayerFromYahoo,
}
