import Product from "../../types/product.type";
import { createReducer } from "@reduxjs/toolkit";
import { addCart, deleteCart, loadProduct } from "../actions/cartAction";

const loadCart = () => {
  const cart = localStorage.getItem("cart");
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

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadProduct, (state, action) => {
    // const cart = state.cart;
    const products: Product[] = action.payload;
    state.products.push(...products);
    // lop1: for (const p of products) {
    //   for (const c of cart) {
    //     if (p.id === c.id) {
    //       products[products.indexOf(p)].isBuying = true;
    //       continue lop1;
    //     }
    //   }
    // }
  });
  builder.addCase(addCart, (state, action) => {
    const product: Product = action.payload;
    state.cart.push(product);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  });
  builder.addCase(deleteCart, (state, action) => {
    const product: Product = action.payload;
    const cart = state.cart.filter((p: Product) => p.id !== product.id);
    state.cart = cart;
    localStorage.setItem("cart", JSON.stringify(state.cart));
  });
});
export default cartReducer;
// export const cartReducer = (state = initialState, action: CartAction) => {
//   switch (action.type) {
//     case CartType.LOAD_PRODUCT: {
//       const cart = loadCart();
//       const products = action.payload;
//       const out = [];
//       //
//       lop1: for (const p of products) {
//         for (const c of cart) {
//           if (p.id === c.id) {
//             out.push({ ...p, isBuying: true });
//             continue lop1;
//           }
//         }
//         out.push({ ...p, isBuying: false });
//       }
//       return {
//         ...state,
//         products: out,
//       };
//     }
//     case CartType.ADD_CART: {
//       const cart = [...state.cart, action.payload];
//       localStorage.setItem('cart', JSON.stringify(cart));

//       return {
//         ...state,
//         cart: [...cart],
//       };
//     }
//     case CartType.DELETE_CART: {
//       const cart = state.cart.filter(
//         (p: ProductType) => p.id !== action.payload.id,
//       );
//       localStorage.setItem('cart', JSON.stringify(cart));
//       return {
//         ...state,
//         cart: [...cart],
//       };
//     }
//     default:
//       return state;
//   }
// };
