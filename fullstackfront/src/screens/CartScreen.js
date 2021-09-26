import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

// ? to get quantity=1 on browser, use location .search
// does not give number format.
// split sets = as an array in 0 index and 1 in 1 index
// in Form Control, allow to be able to change cart quantity in cart Screen
// has to change Onchange => setQuantity to a dispatch (everytime change quantity, it would dispatcht to addto Cart)
// then wrap e target.value in a Number to output a number and change the tour array to item

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

    const removeFromCartHandler = (id) => {
        console.log('remove')
    }

    return (
      <Row>
        <Col md={8}>
          <h2> Shopping Cart </h2>
          {cartItems.length === 0 ? (
            <Message>
              {' '}
              Cart is Empty <Link to='/'> Go Back </Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cartItems.map((item) => (
                <ListGroupItem key={item.tour}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.tour}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}> ${item.price} </Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.quantity}
                        onChange={(e) => dispatch(addToCart(item.tour, Number(e.target.value)))}
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                        <Button type='button' variant='dark' onClick={() => 
                        removeFromCartHandler(item.tour)}>
                            <i className='fas fa-trash'></i>
                        </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={2}></Col>
        <Col md={2}></Col>
      </Row>
    );
}

export default CartScreen
