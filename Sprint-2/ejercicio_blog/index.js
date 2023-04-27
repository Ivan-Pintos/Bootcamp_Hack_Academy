const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

app.set("viex engine", "ejs");
app.use(router);
app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Se ha levanado el servidor en el puerto: ${port}`)
);
