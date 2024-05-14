import {ADD_CART, DEL_CART, LOAD_PRODUCT} from "../type";

const loadCart = () => {
    return JSON.parse(localStorage.getItem('cart')) ?? [];
}
const initialState = {
    products: [],
    cart: loadCart()
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT : {
            let cart = loadCart();
            let products = action.payload;
            let out = [];
            lop1:for (const p of products) {
                for (const c of cart) {
                    if (p.id === c.id) {
                        out.push({...p, isBuying: true});
                        continue lop1;
                    }
                }
                out.push({...p, isBuying: false});
            }
            return {
                ...state,
                products: out
            }
        }
        case ADD_CART: {
            let cart = [...state.cart, action.payload];
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                ...state,
                cart: [...cart]
            }
        }
        case DEL_CART: {
            let cart = state.cart.filter(p => p.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                ...state,
                cart: [...cart]
            }
        }
        default:
            return state;
    }
}
export default cartReducer;