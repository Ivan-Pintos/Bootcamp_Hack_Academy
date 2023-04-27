const express = require("express"); // Unnecesary
const axios = require("axios");
let products;
axios
  .get(
    "https://gist.githubusercontent.com/SuecoMarcus/440d8206cbf0e3e9491d0c431c0e19b6/raw/ea9e085015ae662949ec502389aee17b554a3868/posts.json"
  )
  .then(function (response) {
    products = response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = {
  HomeProducts: function HomeProducts(req, res) {
    res.render("home.ejs", { products });
  },
  PageProduct: function PageProduct(req, res) {
    for (product of products) {
      if (Number(req.params.id) === product.id) {
        res.render("product.ejs", { product });
        return;
      }
    }
    res.send("No existe ningun producto que coincida con el id ingrsado");
  },
};
