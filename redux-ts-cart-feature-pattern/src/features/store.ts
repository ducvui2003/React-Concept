import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cart.slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Lấy RootState và AppDispatch từ Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
