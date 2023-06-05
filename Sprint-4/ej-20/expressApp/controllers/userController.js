const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
async function store(req, res) {
  const user = await new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  return res.json("Se ha creado un usuario");
}

async function token(req, res) {
  const user = await User.findOne({ email: req.body.email });
  console.log(user.id);
  if (await user.comparePassword(req.body.password)) {
    const token = await jwt.sign({ id: user.id }, process.env.SESSION_SECRET);
    res.json(token);
  } else {
    res.json("Logueo fallido");
  }
}
async function show(req, res) {
  return res.json("Cómo acceder a la info del usuario que esta logueado");
}

module.exports = {
  store,
  token,
  show,
};
