import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import tours from '../tours'

const Product = ({tours}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${tours.id}`}>
                <Card.Img src={tours.image} varaint='top' />
            </a>
                <Card.Body>
                    <a href={`/product/${tours.id}`}>
                    <Card.Title as='div'><strong>{tours.name}</strong> </Card.Title>
                    </a>

                    <Card.Text as='div'>
                        <Rating value={tours.rating} text={`${tours.numReviews} reviews`} color={'#f8e825'} />
                    </Card.Text>
                    <Card.Text as='h4'> ${tours.price} </Card.Text>

                    
                </Card.Body>
        </Card>
    )
}

export default Product
