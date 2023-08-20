import {
  RECIPE_GET_REQUEST_FAILURE,
  RECIPE_GET_REQUEST_PENDING,
  RECIPE_GET_REQUEST_SUCCESS,
  SINGLE_RECIPE_GET_REQUEST_SUCCESS,
} from "../actionType";

const initial = {
  loading: false,
  error: "",
  singleRecipe: {},
  allRecipes: [],
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case RECIPE_GET_REQUEST_PENDING:
      // Set loading to true when a user request is pending
      return {
        ...state,
        loading: true,
      };

    case RECIPE_GET_REQUEST_SUCCESS:
      // Update user details and token on successful user login request
      return {
        ...state,
        loading: false,
        allRecipes: payload, error:""
      };

    case RECIPE_GET_REQUEST_FAILURE:
      // Update bookmarked data on successful user data request
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case SINGLE_RECIPE_GET_REQUEST_SUCCESS:
      // Update single stock data on searching a single stock
      return {
        ...state,
        loading: false,
        singleRecipe: payload, error:""
      };

    default:
      return state;
  }
};
