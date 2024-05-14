import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";

const rootReducer = combineReducers({
  // Add reducers here
  cart: cartReducer,
});

export default rootReducer;
