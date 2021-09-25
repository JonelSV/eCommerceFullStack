import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

// ? to get quantity=1 on browser, use location .search
// does not give number format.
// split sets = as an array in 0 index and 1 in 1 index

const CartScreen = ({match, location, history}) => {
    const productId = match.params.id 
 
    const quantity = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    // console.log(cartItems)

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])
    // console.log(quantity) 
    return (
      
            <Row>
                <Col md={8}>
                    <h2> Shopping Cart </h2>
                    {cartItems.length === 0 ? <Message> Cart is Empty <Link to='/'> Go Back </Link>
                    </Message> : (
                        <ListGroup variant='flush'>

                        </ListGroup>                               
                    )}
                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>

                </Col>

            </Row>


    )
}

export default CartScreen
