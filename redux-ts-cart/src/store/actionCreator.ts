import {ActionTypes} from "./actionTypes";
import {IProduct} from "../../type";

interface ActionCreator {
    type: ActionTypes,
    payload: any
}

export const loadProduct = (product: IProduct): ActionCreator => {
    return {
        type: ActionTypes.LOAD_PRODUCT,
        payload: data
    }
}
export const addCart = (product: any): ActionCreator => {
    return {
        type: ActionTypes.ADD_CART,
        payload: product
    }
}
export const delCart = (product: any): ActionCreator => {
    return {
        type: ActionTypes.DELETE_CART,
        payload: product
    }
}