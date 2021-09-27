import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"; 


// state takes items in the cart and store it as an array.
// will have to create variables for action.payload and if the item exists
// itemId of the tour from the payload should match the id cart. If so, the item exists. 
// else staetment if tour does not exist = return the state (spread operator)
//  and for cartItem just return the state.cartItems, and add new item
// if tour is available, return state as well, and map through current cartItems
// if current iteration of map matches the exist item, then return the item, else x, so it just stays the same. - ternary operator.
// MAKE SURE TO PASS THIS REDUCER TO STORE.JS 
// Redux B

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find((itemId) => itemId.tour === item.tour)

            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.tour === existItem.tour ? item : x),
                }    
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) =>  x.tour !== action.payload),
            }
            default:
                return state
    }
}