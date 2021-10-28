const express = require('express');
const router = express.Router();

const {playerController}=require('../controllers');
router.get('/getPlayer',playerController.getPlayer);
router.get('/getStatsOfPlayer',playerController.getStatsOfPlayer);
router.get('/getMetaOfPlayer',playerController.getMetaOfPlayer);
router.get('/getOwnershipRatioOfPlayer',playerController.getOwnershipRatioOfPlayer);
router.get('/getDraftAnalysisOfPlayer',playerController.getDraftAnalysisOfPlayer);
module.exports = router;
