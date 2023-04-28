const express = require("express");
const controller = require("./controllers/MainController");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json()); // Esta linea permite añadir un objeto json que se envie a traves del metodo post

router.get("/teams", controller.teams);
router.get("/teams/:id", controller.teams_id);
router.post("/teams", controller.teams_post);
router.delete("/teams", controller.teams_delete);
router.patch("/teams", controller.teams_patch);

module.exports = router;
