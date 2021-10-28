const {Statistic}=require("../models")
const mongoose = require("mongoose");

exist=async function({playerId,season,week},options){
    const id={
        playerId:mongoose.Types.ObjectId(playerId),
        season:season,
        week:week,
    }
    let isExisted=await Statistic.exists({_id:id})
    return isExisted
}

findByID=async function({playerId,season,week},options){
    const id={
        playerId:mongoose.Types.ObjectId(playerId),
        season:season,
        week:week,
    }
    let statistic=await (options && options.session?
            Statistic.findOne({_id:id}).session(options.session):
            Statistic.findOne({_id:id}).exec()
    )
    return statistic
}

findAll=async function(options){
    let statistics=await (options && options.session?
            Statistic.find({}).session(options.session):
            Statistic.find({}).exec()
    )
    return statistics
}

module.exports={
    findAll,
    findByID,
    exist,
}
