const express = require("express");
const controller = require("./controllers/mainController");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.get("/usuarios", controller.users);
router.get("/usuarios/crear", controller.registerUser);
// corregir que pasa si entra con una id que no existe en la base de datos
router.get("/usuarios/editar/:id", controller.editUser);
router.get("/usuarios/eliminar/:id", controller.deleteUser);
router.post("/usuarios", controller.usersPost);
router.post("/usuarios/editar/:id", controller.editUserPost);
module.exports = router;
