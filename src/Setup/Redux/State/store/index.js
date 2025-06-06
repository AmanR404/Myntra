import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { productsData } from "../reducer";
import { category } from "../reducer";
import { productToCart } from "../reducer";
import { noOfProductsInCart } from "../reducer";
import { searchByInput } from "../reducer";
import { productToWishlist } from "../reducer";
import { noOfProductsInWishlist } from "../reducer";

export const store = createStore(combineReducers({
    productsData,
    category,
    productToCart,
    noOfProductsInCart,
    searchByInput,
    productToWishlist,
    noOfProductsInWishlist,
}), applyMiddleware(thunk))