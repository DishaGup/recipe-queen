const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt"); //for hashing of password
const jwt = require("jsonwebtoken"); //for authorization the realtime user
const { UserModel } = require("../Models/user.model");
//model of userData

//Route for creating the new account  --->   /users/api/register  --->

userRouter.post("/register", async (req, res) => {
    
  try {
    const { name, email, password } = req.body;

    // checking if user with this email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .json({ message: "Email already exists, Please Login" });
    }

    bcrypt.hash(password, 2, async (err, hash) => {
      // create a new user
      if (err)
        res
          .status(401)
          .send("Error while hashing the password using bcrypt module.");
      const user = new UserModel({
        name,
        email,
        password: hash, //giving hash value to user's password
      });
      await user.save();

      // return success message
      res.status(201).json({ message: "Account created successfully" });
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//Route for login into account  --->   /users/api/login  --->

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, name: user.name }, // passing userId and userName using jwt
            "recipe"
          );

          res.status(200).json({
            message: "Login Successful",
            token,
           
          });
        } else {
          res.status(401).send({ message: "Invalid password" ,"error" :err.message });
        }
      });
    } else {
      res.status(401).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ "error": error.message });
  }
});

//get the list of all users   --- url/users

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ "error": error.messsage });
  }
});

// exports  --->

module.exports = userRouter;
