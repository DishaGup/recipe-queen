import React, { useEffect } from "react";

import HeroSection from "../Components/HeroSection";
import Dishes from "../Components/Dishes";
import { useDispatch } from "react-redux";
import { fetchAllRecipe } from "../Redux/action";
import NewsLetter from "../Components/NewsLetter";

const Homepage = () => {
  const dispatch = useDispatch();


  return (
  
      <main style={{overflow:'hidden'}}>
        <article>
          <HeroSection />
        </article>
        <Dishes />
        <NewsLetter />
      </main>

  );
};

export default Homepage;
