import {ADD_CART, DEL_CART, LOAD_PRODUCT} from "../type";

export const loadProduct = (data) => {
    return {
        type: LOAD_PRODUCT,
        payload: data
    }
}
export const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}
export const delCart = (product) => {
    return {
        type: DEL_CART,
        payload: product
    }
}