const {mongodb} = require("../../pkg/mongo");
const mongoose = require('mongoose');
const Schema=mongoose.Schema
const ObjectId = Schema.ObjectId;

const schema = new mongoose.Schema({
    _id: {
        playerId:ObjectId,
        season: Number,
        week :Number,
    },
    gamesPlayed:Number,
    gamesStarted:Number,
    minutesPlayed:Number,
    fieldGoalsAttempted:Number,
    fieldGoalsMade:Number,
    fieldGoalPercentage:Number,
    freeThrowsAttempted:Number,
    freeThrowsMade:Number,
    freeThrowPercentage:Number,
    threePointShotsAttempted:Number,
    threePointShotsMade:Number,
    threePointPercentage:Number,
    pointsScored:Number,
    offensiveRebounds:Number,
    defensiveRebounds:Number,
    totalRebounds:Number,
    assists:Number,
    steals:Number,
    blockedShots:Number,
    turnovers:Number,
    assistTurnoverRatio:Number,
    personalFouls:Number,
    timesFouledOut:Number,
    technicalFouls:Number,
    ejections:Number,
    flagrantFouls:Number,
    minutesPerGame:Number,
    doubleDoubles:Number,
    tripleDoubles:Number
});

Statistic = mongodb.model('season_stat', schema,'season_stat');


module.exports=Statistic
