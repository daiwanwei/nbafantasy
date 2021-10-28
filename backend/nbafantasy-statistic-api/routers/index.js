const game=require("./game")
const player=require("./player")
const statistic=require("./statistic")
const yahoo=require("./yahoo")
const oauth=require("./oauth")


module.exports={
  gameRouter:game,
  playerRouter:player,
  statisticRouter:statistic,
  yahooRouter:yahoo,
  oauthRouter:oauth,
}
