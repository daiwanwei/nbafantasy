const {fantasyClient} = require("../../pkg/yahoo-fantasy");

async function getGames({token}) {
    fantasyClient.setUserToken(token)
    const games = await fantasyClient.user.games()
    return games
}

module.exports={
    getGames:getGames,
}
