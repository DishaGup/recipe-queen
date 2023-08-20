import axios from "axios";
import {
  RECIPE_GET_REQUEST_FAILURE,
  RECIPE_GET_REQUEST_PENDING,
  RECIPE_GET_REQUEST_SUCCESS,
  SINGLE_RECIPE_GET_REQUEST_SUCCESS,
  USER_ADD_RECIPE_TO_BOOKMARKED,
  USER_GET_REQUEST_FAILURE,
  USER_GET_REQUEST_PENDING,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_REGISTER_REQUEST_SUCCESS,
} from "./actionType";

export const url = `http://localhost:8000`; //backened url change it according to the backend server
export const apiKey = process.env.REACT_APP_spoonacular_API_KEY;

export const fetchAllRecipe =
  (page = 1, params = {}) =>
  (dispatch) => {
    dispatch({ type: RECIPE_GET_REQUEST_PENDING }); // Dispatch a user request pending action

    // Calculate the offset based on the page and number of items per page
    const offset = (page - 1) * 10;

    // Construct the query string with filters, pagination, and additional params
    const queryString = new URLSearchParams({
      offset: offset,
      apiKey: apiKey,
      addRecipeInformation: true,
      ...params,
    }).toString();

    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?number=10&${queryString}`
      )
      .then((res) => {
        dispatch({
          type: RECIPE_GET_REQUEST_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((err) => {
        dispatch({ type: RECIPE_GET_REQUEST_FAILURE });
      });
  };

// Login user
export const loginUserRequest = (data) => (dispatch) => {
  dispatch({ type: USER_GET_REQUEST_PENDING }); // Dispatch a user request pending action

  // Make a POST request to the login endpoint
  return axios
    .post(`${url}/api/users/login`, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: USER_LOGIN_REQUEST_SUCCESS, payload: res.data }); // Dispatch a user login request success action
      return res; // Return the response data
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: USER_GET_REQUEST_FAILURE, payload: err }); // Dispatch a user request failure action
      return err; // Handle any errors
    });
};

// Register a new user
export const registerUserRequest = (data) => (dispatch) => {
  dispatch({ type: USER_GET_REQUEST_PENDING }); // Dispatch a user request pending action

  // Make a POST request to the register endpoint
  return axios
    .post(`${url}/api/users/register`, data)
    .then((res) => dispatch({ type: USER_REGISTER_REQUEST_SUCCESS })) // Return the response data
    .catch((err) => dispatch({ type: USER_GET_REQUEST_FAILURE })); // Handle any errors
};

export const recipeAddToBookmarked = (data, token) => (dispatch) => {
  dispatch({ type: USER_GET_REQUEST_PENDING }); // Dispatch a user request pending action
  const { userId, recipeId } = data;
  // Make a POST request to the add bookmark endpoint
  return axios
    .post(`${url}/api/recipe/bookmark/${userId}/${recipeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch(recipeBookMarkedDataFetch(userId, token));
    })
    .catch((err) => dispatch({ type: USER_GET_REQUEST_FAILURE, payload: err }));
};

export const recipeRemoveFromBookmarked = (data, token) => (dispatch) => {
  dispatch({ type: USER_GET_REQUEST_PENDING }); // Dispatch a user request pending action
  const { userId, recipeId } = data;
  //console.log(userId,recipeId)
  // Make a POST request to the add bookmark endpoint
  return axios
    .delete(`${url}/api/recipe/unbookmark/${userId}/${recipeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch(recipeBookMarkedDataFetch(userId, token));
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: USER_GET_REQUEST_FAILURE, payload: err });
    });
};

export const recipeBookMarkedDataFetch = (userId, token) => (dispatch) => {
  dispatch({ type: USER_GET_REQUEST_PENDING }); // Dispatch a user request pending action
  //console.log(userId)
  // Make a GET request to fetch bookmarked data
  axios
    .get(`${url}/api/recipe/bookmarked/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: USER_ADD_RECIPE_TO_BOOKMARKED,
        payload: res.data.bookmarkedRecipeDetails,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: USER_GET_REQUEST_FAILURE, payload: err });
    });
};

export const singleRecipeDetailsFetch = (id) => (dispatch) => {
  dispatch({ type: RECIPE_GET_REQUEST_SUCCESS }); // Dispatch a user request pending action

  // Make a GET request to fetch bookmarked data
  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
    )
    .then((res) =>
      dispatch({ type: SINGLE_RECIPE_GET_REQUEST_SUCCESS, payload: res.data })
    )
    .catch((err) => {
      console.log(err);
      dispatch({ type: USER_GET_REQUEST_FAILURE, payload: err });
    });
};
