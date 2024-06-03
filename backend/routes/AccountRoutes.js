const express = require('express');

const { callFunction } = require('../controllers/AccountController');

const router = express.Router();

router.get('/create', callFunction('create'));
router.get('/callback', callFunction('callback'));

module.exports = router;