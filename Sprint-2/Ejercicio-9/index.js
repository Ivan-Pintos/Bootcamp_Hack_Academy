const express = require("express");
const app = express();

app.use(express.static("js"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/html/index.html`);
});
app.post("/multiplicar", (req, res) => {
  res.send(
    `El resultado de la multiplicacion de los numeros ${req.body.num1} y ${
      req.body.num2
    } es: ${req.body.num1 * req.body.num2} `
  );
});
app.listen(3000, () =>
  console.log("Se ha levantado el servidor en el puerto 3000")
);
