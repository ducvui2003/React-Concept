import { CartType } from "../types/cartType";
import Product from "../../types/product.type";
import { createAction } from "@reduxjs/toolkit";

export const loadProduct = createAction<Product[]>(CartType.LOAD_PRODUCT);
export const addCart = createAction<Product>(CartType.ADD_CART);
export const deleteCart = createAction<Product>(CartType.DELETE_CART);
