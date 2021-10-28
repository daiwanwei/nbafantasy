const express = require('express');
const router = express.Router();

const {gameController}=require('../controllers');
router.get('/getMetaOfGame',gameController.getMetaOfGame);
router.get('/getWeeksOfGame',gameController.getWeeksOfGame);
router.get('/getCategoriesOfStats',gameController.getCategoriesOfStats);
module.exports = router;
