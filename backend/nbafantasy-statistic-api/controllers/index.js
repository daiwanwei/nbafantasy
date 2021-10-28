const game=require("./game")
const yahoo=require("./yahoo")
const player=require("./player")
const statistic=require("./statistic")
const oauth=require("./oauth")

module.exports={
    gameController:game,
    playerController:player,
    statisticController:statistic,
    yahooController:yahoo,
    oauthController:oauth,
}
