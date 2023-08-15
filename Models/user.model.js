const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

// Create the User model using the user schema
const UserModel = model("users", userSchema);

module.exports = { UserModel };
