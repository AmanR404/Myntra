                                        // Action Creator's
// Storing Products Data
export const storeProducts = (products) => {
    return{
        type: "Store",
        payload : products
    }
}

// Changing Category
export const categorySelector = (category) => {
    return{
        type: "Category",
        payload: category
    }
}

// Adding Products to Cart
export const addToCartProducts = (productId) => {
    return{
        type: 'ProductID',
        payload: productId
    }
}

// Removing Products from Cart
export const removeCartProduct = (productId) => {
    return{
        type: 'ProductIdToBeRemoved',
        payload: productId
    }
}

// Incrementing Product Count for Cart Logo
export const productCountInCart = () => {
    return{
        type: 'Increment',
        payload: 1
    }
}

// Decrementing Product Count from Cart logo
export const removeProductCountFromCart = () => {
    return{
        type: 'Decrement',
        payload: 1
    }
}

// Searching Products by Input Field
export const searchByInputText = (searchText) => {
    return{
        type: 'SearchText',
        payload: searchText
    }
}