const express = require("express");
const router = express.Router();
const orderControllers = require("../Controllers/OrderControllers");

router.route("/addorders").post(orderControllers.addorders);
router.route("/vieworders").get(orderControllers.vieworders);

module.exports = router