
// reducer takes in two things, 1 initial state, 2 actions
// state can be set into an empty object


export const productListReducer = (state = { tours: []}, action) => {
    switch(action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return { loading: true }
        case 'PRODUCT_LIST_SUCCESS':
            return { loading: false, tours: action.payload }
        case 'PRODUCT_LIST_FAIL':
            return { loading: false, error: action.payload}
        default: 
        return state
    }
}