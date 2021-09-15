import React from 'react'
import tours from '../tours'
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'


const HomeScreen = () => {
    return (
        <div>
            <h1>List of Tours</h1>
            <Row>
                {tours.map(tours =>(
                    <Col key={tours._id} sm={12} md={6} lg={4} xl={3}>
                        <Product tours ={tours} />
                    
                    </Col>

                ))}


            </Row>
        </div>
    )
}

export default HomeScreen
