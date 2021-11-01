const {fantasyClient} = require("../../pkg/yahoo-fantasy");
const {responseWithData} = require("../responses");

/**
 * GET /api/yahoo/auth/callbackForLogin
 * @tags yahoo
 * @param {string} code.query - code
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
callbackForLogin=async function (req,res){
    fantasyClient.authCallback(req, (err) => {
        if (err) {
            console.log(err)
            responseWithData(res,500,err.message,null)
        }
        responseWithData(res,500,"err is null",null)
    });
}

/**
 * GET /api/yahoo/auth/login
 * @tags yahoo
 * @summary This is the summary of the endpoint
 * @return {DataResponse} 200 - success response
 */
login=async function (req,res){
    fantasyClient.auth(res);
}

module.exports={
    callbackForLogin:callbackForLogin,
    login:login,
}
