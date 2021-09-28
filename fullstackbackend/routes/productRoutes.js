import express from 'express' 
import {getTourById, getTours} from '..controlers/productControllers.js'

const router = express.Router()

// ===== FETCHING ITEMS FROM DATABASE USING EXPRESS
// import express and Product models
// instead of placing try catch for every route, use npm i express-async-handler and import
// wrap the router.get inside from  starting from async
// const tour will find the product by ID on the database through params.id
// to check if data is being fetch, use else if statement. 


// @route    GET/api/products
// @access   Public


router.route('/').get(getTours)
router.route('/:id').get(getTourById)


export default router
