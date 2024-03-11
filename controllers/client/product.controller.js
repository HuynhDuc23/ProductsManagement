const Product = require("../../models/product.model");
module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  });
  const newProducts = products.map((item) => {
    // Create new one key in object
    item.priceNew = (
      (item.price * (100 - item.discountPercentage)) /
      100
    ).toFixed(0);
    return item;
  });
  res.render("client/pages/products/index", {
    pageTitle: "List Products",
    newProducts: newProducts,
  });
  console.log(newProducts);
};
