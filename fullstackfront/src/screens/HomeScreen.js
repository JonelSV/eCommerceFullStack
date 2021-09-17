import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'


// once data is available, it can now then be passed as an array to the useState
// do this by invoking setTours and passing on the data
// have to call fetchTours outside in order to work
// useEffect takes in a second arguement, pass in array of dependencies (any variable). Anything that needs to fire off use effect when anything changes.
// to avoid getting 404 error because of axios.get going to localhost 3000, setup a proxy on frontend JSON "proxy": "http://127.0.0.1:5000",
// MAKE SURE TO RUN npm start on fullstackbackend directory for the server and frontend for the axiox.get request.
// ========================================================================================

// FOR REDUX  ==== take out axios, useState, but import useDispatch, and useSElector from react-redux
// useDispatch is used to call for the Actions, then useSelector is used to access the state (product list) in the redux store
// * define dispatch for useDispatch
// * use listProducts actions inside the useEffect to fire off and get the list of products
// * place dispatch as a dependency, second arguement in useEffect
// CHECK REDUX DEVTOOLS if redux is working
// * useEffect dispatch to send request to access listProducts, then useSelector to access state

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, tours } = productList
        useEffect(()=> {
            dispatch(listProducts())

        },[dispatch])

    

    return (
        <div>
            <h1>List of Tours</h1>
            {loading ? <h2>Loading....</h2> : error ? <h3>{error}</h3> :
             <Row>
             {tours.map(tours =>(
                 <Col key={tours._id} sm={12} md={6} lg={4} xl={3}>
                     <Product tours ={tours} />
                 </Col>

             ))}
            </Row> }
           
        </div>
    )
}

export default HomeScreen
