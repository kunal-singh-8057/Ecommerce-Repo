const express = require("express");
const router = express.Router();
const AdmineRoutes = require("../Controllers/AdmineControllers");


router.route("/addAdmine").post(AdmineRoutes.addAdmine);
router.route("/loginAdmine").post(AdmineRoutes.loginAdmine);

module.exports = router;