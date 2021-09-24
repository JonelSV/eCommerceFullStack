import { createStore, combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

// import devtools
// create MAIN reducer - combine reducer {}, initialState - object
// productList and productListDetails are the ones you pass into the Product and Home Screens
// Redux C


const reducer = combineReducers({
        productList: productListReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer,
})
const initialState = {}
const middleware = [thunk]



const store = createStore(
        reducer,
        initialState, 
        composeWithDevTools(applyMiddleware(...middleware)))


export default store