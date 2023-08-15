import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Dishes from "../Components/Dishes";
import { useDispatch } from "react-redux";
import { fetchAllRecipe } from "../Redux/action";
const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipe());
  },[]);

  return (
    <div>
      <Navbar />

      <main>
        <article>
          <HeroSection />
        </article>
        <Dishes />
      </main>

     
    </div>
  );
};

export default Homepage;
