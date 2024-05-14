import { combineReducers } from 'redux';
import cartReducer from './cart/cart.slice';

const rootReducer = combineReducers({
  // Add reducers here
  cart: cartReducer,
});

export default rootReducer;
