const express = require("express");
const router = require("./routes");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

//Importante que esto este antes del router sino no lo detecta
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => `El servidor se levanto en el puerto ${port}`);
