import React from "react";

import { FaLeaf, FaStar } from "react-icons/fa";
import { GiFlame } from "react-icons/gi";
import { Link } from "react-router-dom";
import { results } from "../db";
import { Heading } from "@chakra-ui/react";
const Dishes = () => {
  return (
    <section className="dishes" id="menu">
      <Heading my="8px" fontSize={"25px"}>
        Most Popular Dishes
      </Heading>

      <p className="section-text">
        Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
      </p>

      <div className="dishess-grid">
        {results &&
          results.map((el, index) => (
            <Link to={`/single-recipe/${el.id}`} key={index}>
              <div className="dishes-card">
                <div className="img-box">
                  <img
                    src={el.image}
                    alt="dishes image"
                    className="dishes-img"
                    width="200"
                    loading="lazy"
                  />
                  {el.aggregateLikes > 300 && el.veryPopular && el.vegan ? (
                    <div className="card-badge red">
                      <FaLeaf className="green" />
                      <GiFlame left="28px" />
                      <p>Hot</p>
                    </div>
                  ) : el.vegan ? (
                    <div className="card-badge green">
                      <FaLeaf />
                      <p>Vegan</p>
                    </div>
                  ) : el.aggregateLikes > 300 && el.veryPopular ? (
                    <div className="card-badge red">
                      <GiFlame />
                      <p>Hot</p>
                    </div>
                  ) : null}
                </div>

                <div className="dishes-content">
                  <div className="wrapper">
                    <h3 className="dishes-name">{el.title}</h3>

                    <p className="dishes-price">
                      <span className="small">💛</span>
                      {el.healthScore}
                    </p>
                  </div>

                  <p className="dishes-text">
                    <b>Diets: </b>
                    {el.diets}
                  </p>

                  <div className="dishes-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Link to="/all-recipe">
        <button className="btn btn-primary has-after">See more recipes.</button>
      </Link>
    </section>
  );
};

export default Dishes;
