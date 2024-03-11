const mongoose = require("mongoose");
// Schema use all properties (thuộc tính , định nghĩa tập hợp các thuộc tính)
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
});
const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
