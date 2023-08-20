const express = require("express");
const recipeRouter = express.Router();
const bcrypt = require("bcrypt"); //for hashing of password
const jwt = require("jsonwebtoken"); //for authorization the realtime user
const { UserModel } = require("../Models/user.model");
const axios = require("axios");

recipeRouter.post("/bookmark/:userId/:recipeId", async (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.bookmarkedRecipes.includes(recipeId)) {
      user.bookmarkedRecipes.push(recipeId);
      await user.save();
    }

    res.json({ message: "Recipe bookmarked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

recipeRouter.get("/bookmarked/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const bookmarkedRecipes = user.bookmarkedRecipes;

    // Fetch recipe details from the third-party API using the IDs
    const bookmarkedRecipeDetails = await Promise.all(
      bookmarkedRecipes.map(async (recipeId) => {
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.spoonacular_API_KEY}`
          );
          return response.data;
        } catch (error) {
          // Handle error fetching recipe data
          console.error(`Error fetching recipe ${recipeId}: ${error.message}`);
          return null;
        }
      })
    );

    res.json({ bookmarkedRecipeDetails });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

recipeRouter.delete("/unbookmark/:userId/:recipeId", async (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const recipeIndex = user.bookmarkedRecipes.indexOf(recipeId);
    if (recipeIndex === -1) {
      return res.status(404).json({ message: "Recipe not found in bookmarks" });
    }

    user.bookmarkedRecipes.splice(recipeIndex, 1);
    await user.save();

    res.json({ message: "Recipe removed from bookmarks successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = recipeRouter;
