const express = require('express');

const { callFunction } = require('../controllers/SyncController');

const router = express.Router();

router.post('/', callFunction('syncEmail'));

module.exports = router;