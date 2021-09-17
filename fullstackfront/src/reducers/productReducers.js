import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

} from '../constants/productConstants'

// reducer takes in two things, 1 initial state, 2 actions
// state can be set into an empty object
// actions has type and payload
// SWITCH case is to evaluate the type in the action object
// three product list types. REQUEST, SUCCESS, FAIL


export const productListReducer = (state = { tours: []}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, tours: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload}
        default: 
        return state
    }
}