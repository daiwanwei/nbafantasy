const {fantasyClient} = require("../../pkg/yahoo-fantasy");


async function getTeamsByGame({token,gameKeys}) {
    fantasyClient.setUserToken(token)
    const teams = await fantasyClient.user.game_teams(gameKeys)
    return teams
}

async function getTeams({token,teamKeys}) {
    fantasyClient.setUserToken(token)
    const teams = await fantasyClient.teams.fetch(teamKeys)
    return teams
}

module.exports={
    getTeamsByGame:getTeamsByGame,
    getTeams:getTeams,
}
