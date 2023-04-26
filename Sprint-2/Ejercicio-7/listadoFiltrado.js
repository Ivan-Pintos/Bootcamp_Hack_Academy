const fs = require("fs");
const path = require("path");

const ruta = process.argv[2];
const extension = process.argv[3];

fs.readdir(ruta, (error, archivos) => {
  if (error) {
    console.error(error);
    return;
  }

  const archivosFiltrados = archivos.filter((archivo) => {
    return path.extname(archivo) === "." + extension;
  });

  console.log("Archivos encontrados:");
  for (const archivo of archivosFiltrados) {
    console.log("  " + archivo);
  }
});
