const express = require('express');
const router = express.Router();

const {yahooController}=require('../controllers');

router.get('/auth/login',yahooController.auth.login);
router.get('/auth/callbackForLogin',yahooController.auth.callbackForLogin);

router.get('/game/getGames',yahooController.game.getGames);

router.get('/league/getLeaguesByGame',yahooController.league.getLeaguesByGame);

router.get('/team/getTeamsByGame',yahooController.team.getTeamsByGame);
router.get('/team/getTeams',yahooController.team.getTeams);

router.get('/player/getPlayers',yahooController.player.getPlayers);
router.get('/player/getPlayersByLeague',yahooController.player.getPlayersByLeague);
router.get('/player/getPlayersByTeam',yahooController.player.getPlayersByTeam);
router.get('/player/updatePlayerInfoByLeague',yahooController.player.updatePlayerInfoByLeague);

module.exports = router;
