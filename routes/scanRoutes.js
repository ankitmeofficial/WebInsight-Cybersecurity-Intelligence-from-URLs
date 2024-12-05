const express = require('express');
const { scanWebsite } = require('../controllers/scanController');
const router = express.Router();

router.post('/', scanWebsite);

module.exports = router;
