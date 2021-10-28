const game=require("./game")
const player=require("./player")
const statistic=require("./statistic")
const yahoo=require("./yahoo")
const oauth=require("./oauth")

module.exports={
    gameService:game,
    playerService:player,
    statisticService:statistic,
    yahooService:yahoo,
    oauthService:oauth,
}
