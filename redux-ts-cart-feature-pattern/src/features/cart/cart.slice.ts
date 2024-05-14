import Product from '../../types/product.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const loadCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

interface Cart {
  products: Product[];
  cart: Product[];
}

const initialState: Cart = {
  products: [],
  cart: loadCart(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    loadProduct: (state, action: PayloadAction<Product[]>) => {
      const products: Product[] = action.payload;
      state.products.push(...products);
    },
    addCart: (state, action: PayloadAction<Product>) => {
      const product: Product = structuredClone(action.payload);
      product.isBuying = true;
      state.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    deleteCart: (state, action: PayloadAction<Product>) => {
      const product: Product = action.payload;
      const cart = state.cart.filter((p: Product) => p.id !== product.id);
      state.cart = cart;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});
export const { loadProduct, addCart, deleteCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
