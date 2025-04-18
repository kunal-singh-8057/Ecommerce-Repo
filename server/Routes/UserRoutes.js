const express = require("express");
const router = express.Router();
const UserControllers = require("../Controllers/UserControllers");
const auth = require("../Middlewares/auth");

router.route("/register").post(UserControllers.register);
router.route("/login").post(UserControllers.login);
router.route("/viewusers").get(UserControllers.viewusers);
router.route("/verify").get(auth,UserControllers.verify);

module.exports = router;