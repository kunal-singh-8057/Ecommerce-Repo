const express = require("express");
const router = express.Router();
const productControllers = require("../Controllers/ProductControllers");


router.route("/addproducts").post(productControllers.addproducts);
router.route("/viewproducts").get(productControllers.viewproducts);
router.route("/viewproductsbycat").get(productControllers.viewcategoryproducts);
router.route("/viewproductsbyid/:id").get(productControllers.viewproductsbyid);

module.exports = router