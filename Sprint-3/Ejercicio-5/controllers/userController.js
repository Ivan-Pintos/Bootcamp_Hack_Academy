const { User } = require("../models/User");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.find();
  return res.render("users/showAll", { users });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  return res.render("users/create");
}

// Store a newly created resource in storage.
async function store(req, res) {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  });
  user.save();
  return res.redirect("/");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const user = await User.findById(req.params.id);
  return res.render("users/edit", { user });
}

// Update the specified resource in storage.
async function update(req, res) {
  console.log(req.params.id);
  await User.findByIdAndUpdate(req.params.id, {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  });
  return res.redirect("/usuarios");
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.redirect("/usuarios");
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
