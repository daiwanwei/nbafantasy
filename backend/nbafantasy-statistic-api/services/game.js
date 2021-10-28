let {fantasyClient}=require("../pkg/yahoo-fantasy")

async function getMetaOfGame({gameKey}) {
    const meta = await fantasyClient.game.game_weeks(gameKey)
    return meta
}

async function getWeeksOfGame({gameKey}) {
    const weeks = await fantasyClient.game.game_weeks(gameKey)
    return weeks
}

async function getCategoriesOfStats({gameKey}) {
    const game = await fantasyClient.game.stat_categories(gameKey)
    let names=[]
    game.stat_categories.forEach(c=>{
        names.push(`${c.name}:String`)
    })
    console.log(names)
    return game
}

module.exports={
    getMetaOfGame:getMetaOfGame,
    getWeeksOfGame:getWeeksOfGame,
    getCategoriesOfStats:getCategoriesOfStats,
}
