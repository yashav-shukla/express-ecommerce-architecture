const express = require("express");

const app = express();

app.use(express.json());

// Import Routes
const productRoutes = require("./routes/productRoutes");

// Routes
app.use("/api/products", productRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce API");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});