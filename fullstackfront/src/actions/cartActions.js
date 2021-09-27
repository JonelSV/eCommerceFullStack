import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";


// Redux D
// do the same thing as productActions, create a function addToCart
// takes in id and quantity, then do async dispatch

export const addToCart = (id, quantity) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/tours/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInstock: data.countInstock,
            quantity,
        }
    })

    localStorage.setItem('carItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }