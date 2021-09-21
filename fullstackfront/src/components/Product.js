import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'


const Product = ({tours}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${tours._id}`}>
                <Card.Img src={tours.image} varaint='top' />
            </Link>
                <Card.Body>
                    <Link to={`/product/${tours._id}`}>
                        <Card.Title as='div'><strong>{tours.name}</strong> </Card.Title>
                    </Link>

                    <Card.Text as='div'>
                        <Rating value={tours.rating} text={`${tours.numReviews} reviews`} color={'#f8e825'} />
                    </Card.Text>
                    <Card.Text as='h4'> ${tours.price} </Card.Text>

                    
                </Card.Body>
        </Card>
    )
}

export default Product
