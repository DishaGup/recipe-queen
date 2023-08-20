const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bookmarkedRecipes: [{ type: String }], // Store third-party recipe IDs
  },
  {
    versionKey: false,
  }
);

// Create the User model using the user schema
const UserModel = model("User", userSchema);

module.exports = { UserModel };

/**8
 * 
 
 "userId": "64db12f5049ab30eb95e1ce7"
 
 */
