import axios from "axios";
import {
  RECIPE_GET_REQUEST_FAILURE,
  RECIPE_GET_REQUEST_PENDING,
  RECIPE_GET_REQUEST_SUCCESS,
} from "./actionType";

export const url = `http://localhost:8000`; //backened url change it according to the backend server
export const apiKey = process.env.REACT_APP_spoonacular_API_KEY;


export const fetchAllRecipe =
  ( page = 1, params = {}) =>
  (dispatch) => {
    dispatch({ type: RECIPE_GET_REQUEST_PENDING }); // Dispatch a user request pending action

    // Calculate the offset based on the page and number of items per page
    const offset = (page - 1) * 10;

    // Construct the query string with filters, pagination, and additional params
    const queryString = new URLSearchParams({
      number: 10,
      offset: offset,
      apiKey: apiKey,
      addRecipeInformation: true,
      ...params,
    }).toString();

    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?${queryString}`)
      .then((res) => dispatch({ type: RECIPE_GET_REQUEST_SUCCESS, payload: res.data.results }))
      .catch((err) => dispatch({ type: RECIPE_GET_REQUEST_FAILURE }));
  };
