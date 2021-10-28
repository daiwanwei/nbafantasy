const {mongodb} = require("../../pkg/mongo");
const mongoose = require('mongoose');
const Schema=mongoose.Schema
const ObjectId = Schema.ObjectId;

const schema = new mongoose.Schema({
    _id: ObjectId,
    name: String,
    fantasyId:String,
});

Player = mongodb.model('player', schema,'player');


module.exports=Player
