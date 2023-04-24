const fileSystem = require("fs");
const http = require("http");
const date = require("./actualDate");
const fecha = new Date();

const server = http.createServer((req, res) => {
  fileSystem.appendFile(
    __dirname + "/access_log.txt",
    date(fecha),
    (res) => {}
  );
});
server.listen(8000);
