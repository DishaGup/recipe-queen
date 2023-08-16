import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaLeaf, FaStar } from "react-icons/fa";
import { GiFlame } from "react-icons/gi";
import { fetchAllRecipe, recipeAddToBookmarked, recipeBookMarkedDataFetch } from "../Redux/action";
const AllRecipe = () => {

  const {loading,error,token,bookmarkedData,userId} =useSelector((store)=>store.authReducer)
  console.log(loading,error,token,bookmarkedData,userId)


  useEffect(()=>{
    dispatch(recipeBookMarkedDataFetch(userId,token))
    },[])


const handleAddToBookmark =(recipeId)=>{

  if (!token) {
    // toast({
    //   title: "Login to Your Account",
    //   position: "top",
    //   status: "info",
    //   variant: "top-accent",
    //   duration: 3000,
    //   isClosable: true,
    // });

    // setTimeout(() => {
    //   navigate("/login");
    // }, 2000);
    alert('No token')
    return;
  }


  const isAlreadyBookmarked = bookmarkedData.some(
    (item) => item === recipeId
  );

  if (!isAlreadyBookmarked) {
        dispatch(recipeAddToBookmarked({recipeId,userId}, token));
  } else {
    // toast({
    //   title: "Already in WatchList",
    //   position: "top",
    //   status: "info",
    //   variant: "top-accent",
    //   duration: 2000,
    //   isClosable: true,
    // });
    alert("already in wishlist")
  }

}


 const dishess =[
    {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 12,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 309,
        "healthScore": 100,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 134.63,
        "id": 782585,
        "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://foodandspice.blogspot.com/2016/05/cannellini-bean-and-asparagus-salad.html",
        "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
        "imageType": "jpg",
        "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
        "cuisines": [],
        "dishTypes": [
            "side dish",
            "lunch",
            "main course",
            "salad",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ],
        "occasions": [],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                        "ingredients": [
                            {
                                "id": 10716050,
                                "name": "cannellini beans",
                                "localizedName": "cannellini beans",
                                "image": "cooked-cannellini-beans.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 480,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                        "ingredients": [
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                        "ingredients": [
                            {
                                "id": 93604,
                                "name": "curry leaves",
                                "localizedName": "curry leaves",
                                "image": "curry-leaves.jpg"
                            },
                            {
                                "id": 2004,
                                "name": "bay leaves",
                                "localizedName": "bay leaves",
                                "image": "bay-leaves.jpg"
                            },
                            {
                                "id": 0,
                                "name": "beans",
                                "localizedName": "beans",
                                "image": "kidney-beans.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 60,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                        "ingredients": [
                            {
                                "id": 11011,
                                "name": "asparagus",
                                "localizedName": "asparagus",
                                "image": "asparagus.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ],
                        "length": {
                            "number": 6,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                        "ingredients": [
                            {
                                "id": 11260,
                                "name": "mushrooms",
                                "localizedName": "mushrooms",
                                "image": "mushrooms.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                        "ingredients": [
                            {
                                "id": 11260,
                                "name": "mushrooms",
                                "localizedName": "mushrooms",
                                "image": "mushrooms.png"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 7,
                        "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                        "ingredients": [
                            {
                                "id": 9152,
                                "name": "lemon juice",
                                "localizedName": "lemon juice",
                                "image": "lemon-juice.jpg"
                            },
                            {
                                "id": 9156,
                                "name": "lemon zest",
                                "localizedName": "lemon zest",
                                "image": "zest-lemon.jpg"
                            },
                            {
                                "id": 11011,
                                "name": "asparagus",
                                "localizedName": "asparagus",
                                "image": "asparagus.png"
                            },
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 2041,
                                "name": "tarragon",
                                "localizedName": "tarragon",
                                "image": "tarragon.jpg"
                            },
                            {
                                "id": 2046,
                                "name": "mustard",
                                "localizedName": "mustard",
                                "image": "regular-mustard.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404771,
                                "name": "food processor",
                                "localizedName": "food processor",
                                "image": "food-processor.png"
                            },
                            {
                                "id": 404726,
                                "name": "blender",
                                "localizedName": "blender",
                                "image": "blender.png"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 8,
                        "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 9,
                        "step": "Serve at room temperature or chilled.",
                        "ingredients": [],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/cannellini-bean-and-asparagus-salad-with-mushrooms-782585"
    }
 ]
    const { allRecipes } = useSelector((store) => store.recipeReducer);
 const dispatch=useDispatch()
    useEffect(()=>{
 // dispatch(fetchAllRecipe())
    },[])

  return (
    <section className="allrecipe" id="menu">
      <h2 className="section-title">Most popular Recipes</h2>

      <p className="section-text">
        Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
      </p>
      <div className="allrecipes-grid">
 {
    dishess.map((el,index)=>  
         <div className="allrecipe-card">
    <div className="img-box">
      <img
        src={el.image}
        alt="allrecipe image"
        className="allrecipe-img"
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

    <div className="allrecipe-content">
      <div className="wrapper">
        <h3 className="allrecipe-name">{el.title}</h3>

        <p className="allrecipe-price">
          <span className="small">💛</span>
          {el.healthScore}
        </p>
      </div>
      <p className="allrecipe-summary" dangerouslySetInnerHTML={{ __html: `Summary: ${el.summary}` }} />
      
      <p className="allrecipe-text">
        <b>Diets: </b>
        {el.diets}
      </p>

      <div className="allrecipe-rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
    <button onClick={()=>handleAddToBookmark(el.id)} > Bookmark </button>
  </div>
  
  
  )

 }
</div>
      {/* <div className="allrecipes-grid">
        {allRecipes &&
          allRecipes.map((el, index) => (
            <a href="#">
              <div className="allrecipe-card">
                <div className="img-box">
                  <img
                    src={el.image}
                    alt="allrecipe image"
                    className="allrecipe-img"
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

                <div className="allrecipe-content">
                  <div className="wrapper">
                    <h3 className="allrecipe-name">{el.title}</h3>

                    <p className="allrecipe-price">
                      <span className="small">💛</span>
                      {el.healthScore}
                    </p>
                  </div>

                  <p className="allrecipe-text">
                    <b>Diets: </b>
                    {el.diets}
                  </p>

                  <div className="allrecipe-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </a>
          ))}
      </div> */}

    </section>
  );
};

export default AllRecipe;