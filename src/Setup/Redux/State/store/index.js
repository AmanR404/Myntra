import { createStore, combineReducers } from "redux";
import { productsData } from "../reducer";
import { category } from "../reducer";
import { productToCart } from "../reducer";
import { noOfProductsInCart } from "../reducer";
import { searchByInput } from "../reducer";

export const store = createStore(combineReducers({
    productsData,
    category,
    productToCart,
    noOfProductsInCart,
    searchByInput,
}))