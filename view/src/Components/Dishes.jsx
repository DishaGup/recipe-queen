import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {FaLeaf} from 'react-icons/fa'
import {GiFlame} from 'react-icons/gi'
const Dishes = () => {

const [dishes, setDishes] =useState([])

const {allRecipes} = useSelector((store)=>store.recipeReducer)
//console.log(allRecipes)
  return (
    <section className="dishes" id="menu">

    <h2 className="section-title">Most popular dishes</h2>

    <p className="section-text">
      Consectetur numquam poro nemo veniam
      eligendi rem adipisci quo modi.
    </p>

    <div className="dishess-grid">

 { allRecipes && allRecipes.map((el,index) =>  <a href="#">

<div className="dishes-card">

  <div className="img-box">
    <img src={el.image} alt="dishes image" className="dishes-img" width="200" loading="lazy"/>
    {
  el.aggregateLikes > 300 && el.veryPopular && el.vegan ? (
    <div class="card-badge red" >
     <FaLeaf />
     <GiFlame style={{ left: '28px' }} />
      <p>Hot</p>
    </div>
  ) : el.vegan ? (
    <div class="card-badge green">
      <FaLeaf />
      <p>Vegan</p>
    </div>
  ) : (
    el.aggregateLikes > 300 && el.veryPopular ? (
      <div class="card-badge red" >
       <GiFlame />
        <p>Hot</p>
      </div>
    ) : null
  )
}

  </div>

  <div className="dishes-content">

    <div className="wrapper">
      <h3 className="dishes-name">{el.title}</h3>

      <p className="dishes-price">
        <span className="small">💛</span>{el.healthScore}
      </p>
    </div>

    <p className="dishes-text">
      Diets: {el.diets}
    </p>

    <div className="dishes-rating">
      {/* <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon> */}
    </div>

  </div>

</div>

</a>
)     
 
}


    </div>

    <button className="btn btn-primary btn-icon">
      <img src="./assets/images/menu.svg" alt="menu icon" />
      Full menu
    </button>

  </section>





  )
}

export default Dishes