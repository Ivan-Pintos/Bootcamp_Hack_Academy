const bcrypt = require("bcrypt");

const { mongoose, Schema } = require("../db");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

userSchema.methods.comparePassword = async function comparePassword(password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
