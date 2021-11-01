const {oauthService}=require("../services")
const {responseWithData} = require("./responses");
const {CustomError} = require("../utils/error");

/**
 * GET /api/oauth/loginByProvider
 * @tags oauth
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
loginByProvider=async function (req,res){
    try{
        const uri =oauthService.getAuthorizationURIByProvider()
        res.redirect(uri)
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
 * GET /api/oauth/yahoo/callback
 * @tags oauth
 * @param {string} code.query - code
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
callbackByYahoo=async function (req,res){
    try{
        const {code}=req.query
        const token =await oauthService.getTokenByProvider({code})
        responseWithData(res,200,"OK",token)
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
 * GET /api/oauth/refreshToken
 * @tags oauth
 * @param {string} accessToken.query - accessToken
 * @param {string} refreshToken.query - refreshToken
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
refreshToken=async function (req,res){
    try{
        const {accessToken,refreshToken}=req.query
        const token =await oauthService.refreshToken({accessToken,refreshToken})
        responseWithData(res,200,"OK",token)
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

module.exports= {
    loginByProvider: loginByProvider,
    callbackByYahoo: callbackByYahoo,
    refreshToken: refreshToken,
}
