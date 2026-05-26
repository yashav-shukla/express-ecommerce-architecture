const path = require("path");

const {
  addProductService,
} = require("../services/productService");

// GET Controller
const getProductsPage = (req, res) => {

  res.sendFile(
    path.join(__dirname, "../VIEW/products.html")
  );

};

// POST Controller
const addProduct = (req, res) => {

  const { productName } = req.body;

  console.log(productName);

  const result =
    addProductService(productName);

  res.send(result);

};

module.exports = {
  getProductsPage,
  addProduct,
};