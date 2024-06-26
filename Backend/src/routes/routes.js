const express = require('express');
const user = require('./user.routes.js');
const admin = require('./admin.routes.js');
const router = express.Router();

router.use('/admin',admin);
router.use('/users',user);

module.exports = router;