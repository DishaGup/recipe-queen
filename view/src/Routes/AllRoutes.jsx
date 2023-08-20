import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import SingleRecipePage from "../Pages/SingleRecipePage";
import AllRecipe from "../Pages/AllRecipe";
import BookmarkRecipeCard from "../Components/BookmarkRecipeCard";
import BookmarkData from "../Pages/BookmarkData";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
       
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-recipe" element={<AllRecipe />} />
        <Route
          path="/single-recipe/:recipe_id"
          element={<SingleRecipePage />}
        />
        <Route path="/bookmarked-data" element={<BookmarkData />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
