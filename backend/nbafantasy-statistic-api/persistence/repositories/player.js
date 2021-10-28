const {Player}=require("../models")

exist=async function(id,options){
    let isExisted=await Player.exists({_id:id})
    return isExisted
}

existByFantasyID=async function(fantasyId,options){
    let isExisted=await Player.exists({fantasy_id:fantasyId})
    return isExisted
}

findByID=async function(id,options){
    let player=await (options && options.session?
            Player.findOne({_id:id}).session(options.session):
            Player.findOne({_id:id}).exec()
    )
    return player
}

findAll=async function(options){
    let players=await (options && options.session?
        Player.find({}).session(options.session):
            Player.find({}).exec()
    )
    return players
}

module.exports={
    findAll,
    findByID,
    exist,
    existByFantasyID,
}
