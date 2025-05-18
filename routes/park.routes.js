const express = require("express");
const router = express.Router();
const controller = require("../controllers/park.controller");

router.post("/create", controller.createPark);

router.get("/park/:id", controller.getParkById);
module.exports = router;
