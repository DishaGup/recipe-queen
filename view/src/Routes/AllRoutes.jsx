import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Route for the homepage */}
        
        <Route path="/" element={<Homepage />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;