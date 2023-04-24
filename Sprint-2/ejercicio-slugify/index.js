const slugify = require("slugify");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Alguien accedió al servidor");
  res.end("Respuesta en Navegador");
});

server.listen(8080);

console.log(
  slugify("¡Quiero viajar a Bélgica & España! 󰎐󰎼", {
    lower: true,
    strict: true,
  })
);

/*
  if (req.url === "/favicon.ico") {
    res.writeHead(204, { "Content-Type": "image/x-icon" });
    res.end();
    console.log("Ignorando solicitud de favicon.ico");
  } else {
    console.log("Alguien accedió al servidor");
    res.end("Respuesta");
  } 
*/
