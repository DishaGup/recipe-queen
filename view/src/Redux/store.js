import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./Reducer/Auth.reducer";
import { reducer as recipeReducer } from "./Reducer/Recipe.reducer";
// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  authReducer,
  recipeReducer,
});

// Create the Redux store with the rootReducer and apply middleware
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
