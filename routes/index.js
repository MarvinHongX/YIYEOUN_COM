//routes
const express = require("express");
var router = express.Router();
const { index, foo, othersProfile } = require('../controllers');
router.get('/', index)
router.post('/api/post', foo)
router.post('/others', othersProfile)
router.get('*', index)
module.exports = router;