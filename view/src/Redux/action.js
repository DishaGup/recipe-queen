import axios from "axios";
import { RECIPE_GET_REQUEST_FAILURE, RECIPE_GET_REQUEST_PENDING, RECIPE_GET_REQUEST_SUCCESS } from "./actionType";

export const url = `http://localhost:8000`; //backened url change it according to the backend server
export const apiKey = process.env.REACT_APP_spoonacular_API_KEY

export const fetchAllRecipe =
  () =>
  (dispatch) => {
    dispatch({ type: RECIPE_GET_REQUEST_PENDING }); // Dispatch a user request pending action
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${apiKey}&addRecipeInformation=true`
      )
      .then((res) => dispatch({type:RECIPE_GET_REQUEST_SUCCESS,payload:res.data.results}) )
      .catch((err) => dispatch({type:RECIPE_GET_REQUEST_FAILURE})); // Handle any errors
  };
