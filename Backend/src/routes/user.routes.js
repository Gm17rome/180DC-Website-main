const express = require('express');
const router = express.Router();
const { addEmail } = require('../controllers/subscribe.controller.js');
const { registerUser, loginUser,} =require("../controllers/user.controller.js");
    
// /api/v1/users
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.post('/subscribe', addEmail);
module.exports =  router;