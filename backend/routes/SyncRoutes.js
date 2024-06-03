const express = require('express');

const { callFunction } = require('../controllers/AccountController');

const router = express.Router();

router.post('/', callFunction('syncEmail'));

module.exports = router;