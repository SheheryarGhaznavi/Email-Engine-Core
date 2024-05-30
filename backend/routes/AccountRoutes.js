const express = require('express');
const router = express.Router();
const { callFunction } = require('../controllers/AccountController');

router.get('/create', callFunction('create'));
router.get('/callback', callFunction('callback'));

module.exports = router;