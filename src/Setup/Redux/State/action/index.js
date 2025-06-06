// Action Creator's

// Storing Products Data
export const storeProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://myntra-backend-zeta.vercel.app/products')
            const products = await response.json()

            dispatch({
                type: 'Store',
                payload: products
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
// Fetching Products by Search Value
export const fetchProductsBySearch = (searchText) => {
    return async (dispatch) => {
        try{
             let response = await fetch(`https://myntra-backend-zeta.vercel.app/search?search=${searchText}`)
             let products = await response.json()

               dispatch({
                type: 'Store',
                payload: products
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

// Changing Category
export const categorySelector = (category) => {
    return {
        type: "Category",
        payload: category
    }
}

// Adding Products to Cart
export const addToCartProducts = (productId) => {
    return {
        type: 'ProductID',
        payload: productId
    }
}

// Removing Products from Cart
export const removeCartProduct = (productId) => {
    return {
        type: 'ProductIdToBeRemoved',
        payload: productId
    }
}

// Adding Products to Wishlist
export const addToWishlistProduct = (productId) => {
    return {
        type: 'wishlistProductID',
        payload: productId
    }
}

// Removing Products from Wishlist
export const removeWishlistProduct = (productId) => {
    return {
        type: 'wishlistProductIdToBeRemoved',
        payload: productId
    }
}

// Incrementing Product Count for Cart Logo
export const productCountInCart = () => {
    return {
        type: 'Increment',
        payload: 1
    }
}

// Decrementing Product Count from Cart logo
export const removeProductCountFromCart = () => {
    return {
        type: 'Decrement',
        payload: 1
    }
}

// Incrementing Product Count for Wishlist Logo
export const productCountInWishlist = () => {
    return {
        type: 'wIncrement',
        payload: 1
    }
}

// Decrementing Product Count from Wishlist logo
export const removeProductCountFromWishlist = () => {
    return {
        type: 'wDecrement',
        payload: 1
    }
}

// Searching Products by Input Field
export const searchByInputText = (searchText) => {
    return {
        type: 'SearchText',
        payload: searchText
    }
}