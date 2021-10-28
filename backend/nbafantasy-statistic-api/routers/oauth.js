const express = require('express');
const router = express.Router();

const {oauthController}=require('../controllers');
router.get('/loginByProvider',oauthController.loginByProvider);
router.get('/yahoo/callback',oauthController.callbackByYahoo);
router.get('/refreshToken',oauthController.refreshToken);
module.exports = router;
