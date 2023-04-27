const express = require("express");
const controller = require("./controllers/MainController");
const router = express.Router();

router.get("/frutas", controller.frutas);

router.post("/frutas", controller.frutas_post);

module.exports = router;
