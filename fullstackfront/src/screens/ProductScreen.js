import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import tours from '../tours'


// productscreen  displays the images when a specific tour is selected
// tours.find() iterates through the array and outputs the value of the item of the element if it is boolean true.
// match is an object property (props.match) that I have deconstructed to {{ match }} that matches the params id with the url.
// so with match, if tour number 3 is selected, then tour with _id 3 will be displayed along with /3 on url
// Link bootstrap btn maps to homepage that takes you back there when clicked
// 'flush' takes out borders
// fluid makes sure that image does not spill out from the container.
// btn-block makes it a block level element. makes the button stretch accross.
const ProductScreen = ({match}) => {

    const tour = tours.find((t) => t._id === match.params.id)
    
   
    return (
        <>
        
         <Link className='btn btn-light my-3' to='/'>Back</Link>
        <Row>
            <Col md={6}>
                <Image src={tour.image} alt={tour.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h4>{tour.name}</h4>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={tour.rating} text={`${tour.numReviews} reviews`} color={'#f8e825'} />
                    </ListGroup.Item>
                    <ListGroupItem>
                        Price: ${tour.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        <b>Description:</b> {tour.description}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    {tour.price}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {tour.countInStock > 0 ? 'Seats available' : 'No more Seats available'}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block' type='button' disabled={tour.countInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>


        </>
    )
}

export default ProductScreen
