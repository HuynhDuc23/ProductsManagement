const express = require("express");
// Create GET POST PATCH DELETE PUT use Roter
const router = express.Router();
const controller = require("../../controllers/admin/product.controller");

router.get("/", controller.index);
module.exports = router;
