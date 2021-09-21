import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

} from '../constants/productConstants'

// the product constants are the actions dispatched back to the reducers
// listProducts is the action creator (functions)
// redux thunk allows us to put a function inside a function
//  == dispatch using the action
// == if successful, the output will be the data inside payload. and the type of action will be a success
// == if it fails , there is error  in catch, the dispatch type will be a fail and payload will be the error response



export const listProducts = () => async (dispatch) => {
    try {
        dispatch({type:PRODUCT_LIST_REQUEST})
        

        const { data } = await axios.get('/api/tours')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response || error.message
        
        })

    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST})


        const { data } = await axios.get(`/api/tours/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response || error.message
        
        })

    }
}