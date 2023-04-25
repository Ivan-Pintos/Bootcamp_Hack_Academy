const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/html/home.html`);
});
app.get("/productos", (req, res) => {
  res.sendFile(`${__dirname}/html/productos.html`);
});
app.get("/about-us", (req, res) => {
  res.sendFile(`${__dirname}/html/about_us.html`);
});
app.get("/contacto", (req, res) => {
  res.sendFile(`${__dirname}/html/contacto.html`);
});

app.listen(3000, () =>
  console.log("Se ha levantado el servidor en el puerto 3000")
);
