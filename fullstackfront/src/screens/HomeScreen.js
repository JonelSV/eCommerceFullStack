import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

// once data is available, it can now then be passed as an array to the useState
// do this by invoking setTours and passing on the data
// have to call fetchTours outside in order to work
// useEffect takes in a second arguement, pass in array of dependencies (any variable). Anything that needs to fire off use effect when anything changes.
// to avoid getting 404 error because of axios.get going to localhost 3000, setup a proxy on frontend JSON "proxy": "http://127.0.0.1:5000",
// MAKE SURE TO RUN npm start on fullstackbackend directory for the server and frontend for the axiox.get request.


const HomeScreen = () => {

    const [tours, setTours] = useState([])

        useEffect(()=> {
            const fetchTours = async () => {
                // const response = await axios.get('/api/tours') - can be de-structured since output is response.data
                const { data } = await axios.get('/api/tours')   
                setTours(data)
            }       
            fetchTours()
        },[])
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
