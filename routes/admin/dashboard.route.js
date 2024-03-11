const express = require("express");
// Create GET POST PATCH DELETE PUT use Roter
const router = express.Router();
const controller = require("../../controllers/admin/dashboard.controller");

router.get("/", controller.dashboard);
module.exports = router;
