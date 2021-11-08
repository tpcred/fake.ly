const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const linkController = require('../controller/link')

router.post('/link', urlencodedParser, linkController.createLink);

module.exports = router;