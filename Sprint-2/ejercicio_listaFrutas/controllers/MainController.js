const express = require("express");
const frutas_array = ["Manzana", "Pera", "Frutilla"];

module.exports = {
  frutas: function frutas(req, res) {
    res.render("frutas", { frutas: frutas_array });
  },
  frutas_post: function frutas_post(req, res) {
    frutas_array.push(req.body.fruta);
    res.render("frutas", { frutas: frutas_array });
  },
};
