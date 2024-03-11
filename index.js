require("dotenv").config();
const express = require("express");

const app = express();
// variable env
const port = process.env.PORT;
// add routes
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

// set template engine
app.set("views", "./views");
app.set("view engine", "pug");

// App locals variables
const systemConfig = require("./config/system");
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// set file static user use access
app.use(express.static("public"));

// database
const database = require("./config/database");
database.connect();

// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log("Sucess!");
});

// index day la file chung de chay chuong trinh
