const productRoutes =  require("./product.route.js");
const homeRoutes = require("./home.route.js");
module.exports = (app)=>{
    app.use("/",homeRoutes);
    app.use("/products",productRoutes);
}

// index : nơi chứa tát cả router , mặc định
// product : trong đó có nhiều router nên tác nhỏ