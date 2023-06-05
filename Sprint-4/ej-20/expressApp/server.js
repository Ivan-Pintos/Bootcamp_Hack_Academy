require("dotenv").config();
const userController = require("./controllers/userController");
const express = require("express");
const app = express();
const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/register", userController.store);
app.post("/login", userController.token);

app.get("/users/:id", userController.show);

app.listen(APP_PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${APP_PORT}`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
