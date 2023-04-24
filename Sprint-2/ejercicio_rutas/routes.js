function checkURl(URL) {
  if (URL === "/") {
    return "home";
  } else if (URL === "/productos") {
    return "Productos";
  } else if (URL === "/contacto") {
    return "Contacto";
  }
}

module.exports = checkURl;
