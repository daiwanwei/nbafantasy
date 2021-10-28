const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

const APPLICATION_KEY="dj0yJmk9R3RZR25LVXczNVhVJmQ9WVdrOVQxcGpXbTlXT1drbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTkw"
const APPLICATION_SECRET="e075acf947566dc33b54430342dabd0dcf6a2d68";

const yahooClient = new AuthorizationCode({
    client: {
        id: APPLICATION_KEY,
        secret: APPLICATION_SECRET
    },
    auth: {
        tokenHost: 'https://api.login.yahoo.com',
        tokenPath: '/oauth2/get_token',
        authorizePath: '/oauth2/request_auth',
    }
});


function getAuthorizationURIByProvider(){
    const authorizationUri = yahooClient.authorizeURL({
        redirect_uri: 'https://github.com/google',
        scope: "",
        state:"",
    });
    return authorizationUri
}

async function getTokenByProvider({code}) {
    const accessToken = await yahooClient.getToken({
        code: code,
        redirect_uri:"https://github.com/google",
    });
    const tokenJSONString = JSON.stringify(accessToken);

    // await yahooClient.persistAccessTokenJSON(TokenJSONString);
    console.log(accessToken)
    return accessToken.token
}

async function refreshToken({accessToken,refreshToken}) {
    let token=yahooClient.createToken({
        access_token:accessToken,
        refresh_token:refreshToken,
    });
    let newToken=await token.refresh({scope: ''})
    console.log(newToken)
    return newToken.token
}

module.exports={
    getAuthorizationURIByProvider:getAuthorizationURIByProvider,
    getTokenByProvider:getTokenByProvider,
    refreshToken:refreshToken,
}
