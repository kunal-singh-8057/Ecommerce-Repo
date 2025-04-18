const express = require("express");
const router = express.Router();
const ContactControllers = require("../Controllers/ContactControllers");


router.route("/addcontact").post(ContactControllers.addcontact)
router.route("/viewcontact").get(ContactControllers.viewcontact);

module.exports = router;
