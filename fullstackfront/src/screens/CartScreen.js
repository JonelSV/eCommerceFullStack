import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
    return (
        <div>
           <h3>
               This is my cart
            </h3> 
        </div>
    )
}

export default CartScreen
