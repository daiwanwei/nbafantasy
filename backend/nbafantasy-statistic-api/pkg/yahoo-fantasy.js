

const YahooFantasy = require('yahoo-fantasy');

const config=require('./config').yahooFantasy

console.log(`mongo host :${config.applicationKey}`)
console.log(`mongo name :${config.applicationSecret}`)

let accessToken=""
let refreshToken=""

function tokenCallback ({ access_token, refresh_token }) {
    accessToken=access_token
    console.log(access_token)
    refreshToken=refresh_token
    console.log(refresh_token)
};

const client = new YahooFantasy(
    config.applicationKey,
    config.applicationSecret,
    tokenCallback,
    "https://127.0.0.1:3000/auth/yahoo/callback"
);
client.setUserToken()

const SEASON_MAP=new Map([
    [2020,"402"],
    [2021,"410"]
])

const CATEGORY_MAP=new Map([
    ["0","gamesPlayed"],
    ["1","gamesStarted"],
    ["2","minutesPlayed"],
    ["3","fieldGoalsAttempted"],
    ["4","fieldGoalsMade"],
    ["5","fieldGoalPercentage"],
    ["6","freeThrowsAttempted"],
    ["7","freeThrowsMade"],
    ["8","freeThrowPercentage"],
    ["9","threePointShotsAttempted"],
    ["10","freeThrowsMade"],
    ["11","threePointPercentage"],
    ["12","pointsScored"],
    ["13","offensiveRebounds"],
    ["14","defensiveRebounds"],
    ["15","totalRebounds"],
    ["16","assists"],
    ["17","steals"],
    ["18","blockedShots"],
    ["19","turnovers"],
    ["20","assistTurnoverRatio"],
    ["21","personalFouls"],
    ["22","timesFouledOut"],
    ["23","technicalFouls"],
    ["24","ejections"],
    ["25","flagrantFouls"],
    ["26","minutesPerGame"],
    ["27","doubleDoubles"],
    ["28","tripleDoubles"]
]);

module.exports={
    fantasyClient:client,
    SEASON_MAP,
    CATEGORY_MAP,
}
