const {gameService}=require("../services")
const {responseWithData} = require("./responses");
const {CustomError} = require("../utils/error");


/**
 * GET /api/games/getMetaOfGame
 * @tags games
 * @param {string} gameKey.query - gameKey
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getMetaOfGame=async function(req,res){
    try{
        const {gameKey}=req.query
        const meta =await gameService.getMetaOfGame({gameKey})
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
 * GET /api/games/getWeeksOfGame
 * @tags games
 * @param {string} gameKey.query - gameKey
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getWeeksOfGame=async function (req,res){
    try{
        const {gameKey}=req.query
        const weeks =await gameService.getWeeksOfGame({gameKey})
        responseWithData(res,200,"OK",weeks)
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
 * GET /api/games/getCategoriesOfStats
 * @tags games
 * @param {string} gameKey.query - gameKey
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
getCategoriesOfStats=async function(req,res){
    try{
        const {gameKey}=req.query
        const categories =await gameService.getCategoriesOfStats({gameKey})
        responseWithData(res,200,"OK",categories)
        return
    }catch (e){
        console.log(e)
        if (e instanceof CustomError) {
            responseWithData(res,e.code,e.message,null)
        } else {
            responseWithData(res,500,e.message,null)
        }
        return
    }
}

module.exports={
    getMetaOfGame:getMetaOfGame,
    getWeeksOfGame:getWeeksOfGame,
    getCategoriesOfStats:getCategoriesOfStats,
}
