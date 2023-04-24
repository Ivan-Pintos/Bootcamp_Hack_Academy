const http = require("http");
const routes = require("./routes");
const server = http.createServer((req, res) => {
  res.end(routes(req.url));
});
server.listen(8000);
