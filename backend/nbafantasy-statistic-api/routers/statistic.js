const express = require('express');
const router = express.Router();

const {statisticController}=require('../controllers');
router.get('/getStatisticOfPlayer',statisticController.getStatisticOfPlayer);
router.get('/updateStatsOfPlayer',statisticController.updateStatsOfPlayer);
router.get('/getStatisticOfPlayerFromYahoo',statisticController.getStatisticOfPlayerFromYahoo);
module.exports = router;
