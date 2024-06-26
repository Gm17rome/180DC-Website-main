const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();
const { verifyAdmin } =require( "../middlewares/auth.middleware.js");
const {
  loginAdmin,
  registerAdmin,
  logoutAdmin,
  mail_set
} =require( "../controllers/admin.controller.js");


// /api/v1/admin
router.route("/register").post(registerAdmin);
router.route("/login").post(loginAdmin);
router.route("/logout").post(verifyAdmin, logoutAdmin);
router.route("/send-newsletter").post(verifyAdmin, mail_set);
module.exports = router;
