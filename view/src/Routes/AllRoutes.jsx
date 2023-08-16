import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import SingleRecipePage from "../Pages/SingleRecipePage";
import AllRecipe from "../Pages/AllRecipe";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Route for the homepage */}
        
        <Route path="/" element={<Homepage />} />
    <Route path='/login' element={<LoginPage/>}  />
    <Route path='/register' element={<RegisterPage /> } />
    <Route path='/all-recipe' element={<AllRecipe /> } />
    <Route path ='/single-recipe' element={<SingleRecipePage />}  />
      </Routes>
    </div>
  );
};

export default AllRoutes;