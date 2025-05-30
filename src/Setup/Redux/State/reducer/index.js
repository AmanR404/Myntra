//  Reducer for Storing Products Data
export const productsData = (state=[],action) => {
    if(action.type == 'Store'){
        return action.payload
    }
    return state;
}

// Reducer for Changing Category
export const category = (state=0,action) => {
    if(action.type == 'Category'){
        return action.payload
    }
    return state;
}

// Reducer for Adding/Removing Products to Cart
export const productToCart = (state=[],action) => {
    if(action.type == 'ProductID'){
        state.push(action.payload)
        return state
    }
    else if(action.type == 'ProductIdToBeRemoved'){
         const newState = state.filter(id => id !== action.payload)
         return newState
    }
    return state;
}

// Reducer for Incrementing/Decrementing Product Count for Cart Logo
export const noOfProductsInCart = (state=0,action) => {
    if(action.type == 'Increment'){
        return state+action.payload
    }
    else if(action.type == 'Decrement'){
        return state-action.payload
    }
    return state
} 

// Reducer for Searching Products by Input Field
export const searchByInput = (state="",action) => {
    if(action.type == 'SearchText'){
        return action.payload
    }
    return state
}