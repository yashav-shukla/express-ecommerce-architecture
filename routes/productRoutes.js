const express = require("express");

const router = express.Router();

const {
  getProductsPage,
  addProduct,
} = require("../controllers/productController");

// GET Route
router.get("/", getProductsPage);

// POST Route
router.post("/", addProduct);

module.exports = router;