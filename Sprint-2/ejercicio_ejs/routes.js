const express = require("express");
const controller = require("./controllers/mainController");
const router = express.Router();

router.get("/", controller.home);
router.get("/productos", controller.products);
router.get("/sobre-nosotros", controller.about);
router.get("/contacto", controller.contact);

module.exports = router;
