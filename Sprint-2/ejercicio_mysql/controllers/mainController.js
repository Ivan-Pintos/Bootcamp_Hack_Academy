const express = require("express"); // Unnecesary
const querys = require("../db/query");

module.exports = {
  users: async function users(req, res) {
    const users = await querys.SelectAllUsers();
    res.render("users.ejs", { users });
  },
  registerUser: function registerUser(req, res) {
    res.render("registerUser.ejs");
  },
  usersPost: async function usersPost(req, res) {
    await querys.InsertUser(req.body);
    res.redirect("/usuarios");
  },
  editUser: async function editUser(req, res) {
    const id = req.params.id;
    const user = await querys.SelectUser(id);
    res.render("editUser.ejs", { user, id });
  },
  editUserPost: async function editUserPost(req, res) {
    await querys.Edituser(req.params.id, req.body);
    res.redirect("/usuarios");
  },
  deleteUser: async function deleteUser(req, res) {
    await querys.DeleteUser(req.params.id);
    res.redirect("/usuarios");
  },
};
