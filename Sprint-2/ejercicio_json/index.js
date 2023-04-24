const http = require("http");
const persona = require("./persona");
const server = http.createServer((req, res) => {
  res
    .setHeader("Content-Type", "application/json")
    .end(JSON.stringify(persona));
});
server.listen(8000);
