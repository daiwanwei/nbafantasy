const {fantasyClient} = require("../../pkg/yahoo-fantasy");
const {Player} = require("../../persistence/models");
const mongoose = require("mongoose");
const {playerDao} = require("../../persistence/repositories");
const playerId = require("express");


async function getPlayers({token,playerKey}) {
    fantasyClient.setUserToken(token)
    const players = await fantasyClient.players.fetch(playerKey)
    return players
}

async function getPlayersByLeague({token,leagueKey},{size,page}) {
    fantasyClient.setUserToken(token)
    const filter={
        count: size,
        start:size*page,
    }
    const leagues = await fantasyClient.players.leagues(leagueKey,filter)
    console.log(leagues[0].players.length)
    return leagues[0]
}

async function getPlayersByTeam({token,teamKey}) {
    fantasyClient.setUserToken(token)
    const teams = await fantasyClient.players.teams(teamKey)
    let playerIds=[]
    teams[0].players.forEach(p=>{
        playerIds.push(p.player_id)
    })
    console.log(playerIds)
    return teams[0]
}

async function updatePlayerInfoByLeague({token,leagueKey},{size,page}) {
    const league=await getPlayersByLeague({token,leagueKey},{size,page})
    for (let p of league.players){
        let isExisted=await playerDao.existByFantasyID(p.player_id)
        if (!isExisted){
            let player = new Player({
                _id: new mongoose.Types.ObjectId(),
                name: p.name.full,
                fantasy_id: p.player_id,
            })
            player.save()
        }
    }
    return  league.players
}

module.exports={
    getPlayers:getPlayers,
    getPlayersByLeague:getPlayersByLeague,
    getPlayersByTeam:getPlayersByTeam,
    updatePlayerInfoByLeague:updatePlayerInfoByLeague,
}
