import {
  USER_ADD_RECIPE_TO_BOOKMARKED,
    USER_GET_REQUEST_FAILURE,
  USER_GET_REQUEST_PENDING,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_REQUEST_SUCCESS,
  USER_REMOVE_RECIPE_FROM_BOOKMARKED,
} from "../actionType";

const initial = {
  loading: false,
  error: "",
  bookmarkedData: [],
  token: "",
  userId : ""
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case USER_GET_REQUEST_PENDING:
      // Set loading to true when a user request is pending
      return {
        ...state,
        loading: true,
      };

    case USER_LOGIN_REQUEST_SUCCESS:
      // Update user details and token on successful user login request
      return {
        ...state,
        loading: false,
        token: payload.token,
        userId :payload.userId ,error:""
      };

    case USER_REGISTER_REQUEST_SUCCESS:
      // Update bookmarked data on successful user data request
      return {
        ...state,
        loading: false,
        token: "", error:""
      };

     case USER_ADD_RECIPE_TO_BOOKMARKED:
      return {
        ...state, bookmarkedData :payload ,error:""
      } ;

     case USER_REMOVE_RECIPE_FROM_BOOKMARKED:
        return {
          ...state, bookmarkedData :payload ,error:""
        } 
    case USER_LOGOUT_SUCCESS:
      // Reset user details and token on successful user logout
      return {
        ...state,
        loading: false,
         error:null,
        token: "",
      };

    case USER_GET_REQUEST_FAILURE:
      // Update error message on user request failure
      return {
        ...state,
        loading: false,
        error: payload?.response?.data?.message,
      };

    default:
      return state;
  }
};
