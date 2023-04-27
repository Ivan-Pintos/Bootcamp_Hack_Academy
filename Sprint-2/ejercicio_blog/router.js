const express = require("express");
const controller = require("./controllers/MainController");
const router = express.Router();

router.get("/", controller.HomeProducts);
//buscar lo del prefix despues del / para esta parte
router.get("/productos/:id", controller.PageProduct);
router.get("/productos", controller.HomeProducts);
module.exports = router;
