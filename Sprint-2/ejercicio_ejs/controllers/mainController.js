const express = require("express");
const { isWeekend, parseISO } = require("date-fns");

module.exports = {
  home: function home(req, res) {
    const today = Date();
    res.render("home", {
      isWeekend: isWeekend(parseISO(today)),
    });
  },
  products: function products(req, res) {
    res.render("products", {
      products: ["Notebook", "Impresora", "Monitor", "Mause"],
    });
  },
  about: function about(req, res) {
    res.render("about");
  },
  contact: function contact(req, res) {
    res.render("contact");
  },
};
