const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/html/index.html`);
});
app.get("/multiplicar", (req, res) => {
  res.send(`El resultado es: ${req.query.num1 * req.query.num2}`);
});
app.listen(3000, () =>
  console.log("Se ha levantado el servidor en el puerto 3000")
);
