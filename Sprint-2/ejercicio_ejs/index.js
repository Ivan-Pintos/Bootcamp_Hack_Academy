const express = require("express");
const router = require("./routes");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(router);
app.listen(port, () => console.log(`https//localhost:${port}`));
