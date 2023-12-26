const express = require("express");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");
const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/userController");

router.route("/signup").post(registerController);
router.route("/login").post(loginController);
router.route("/logout").post(logoutController);

module.exports = router;
