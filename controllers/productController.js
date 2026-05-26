const path = require("path");

const {
  getAllProductsService,
} = require("../services/productService");

const getAllProducts = (req, res) => {

  console.log(getAllProductsService());

  res.sendFile(
    path.join(__dirname, "../VIEW/products.html")
  );

};

module.exports = {
  getAllProducts,
};