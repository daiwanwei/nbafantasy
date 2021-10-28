const {fantasyClient} = require("../../pkg/yahoo-fantasy");


async function getLeaguesByGame({token,gameKeys}) {
    fantasyClient.setUserToken(token)
    const leagues = await fantasyClient.user.game_leagues(gameKeys)
    return leagues
}

module.exports={
    getLeaguesByGame:getLeaguesByGame,
}
