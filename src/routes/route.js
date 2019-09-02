const express = require("express");

const product = require("./product-route");
const category = require("./category-route");

const router = express.Router();

router.use("/", product);
router.use("/", category);

module.exports = router;
