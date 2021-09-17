import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

} from '../constants/productConstants'

// reducer takes in two things, 1 initial state, 2 actions
// state can be set into an empty object
// actions has type and payload
// SWITCH case is to evaluate the type in the action object
// three product list types. REQUEST, SUCCESS, FAIL


export const productListReducer = (state = { tours: []}, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, tours: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload}
        default: 
        return state
    }
}

export const productDetailsReducer = (state = { tour: { reviews: []}}, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, tour: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload}
        default: 
        return state
    }
}