import express from 'express' 
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

// ===== FETCHING ITEMS FROM DATABASE USING EXPRESS
// import express and Product models
// instead of placing try catch for every route, use npm i express-async-handler and import
// wrap the router.get inside from  starting from async
// const tour will find the product by ID on the database through params.id
// to check if data is being fetch, use else if statement. 


// @route    GET/api/products
// @access   Public


router.get('/', asyncHandler(async (request, response) => {
    const tours = await Product.find({})    
    response.json(tours)
}))

// @route    GET/api/product/:id
// @access   Public

router.get('/:id', asyncHandler(async (request, response) => {
   const tour = await Product.findById(request.params.id)

   if(tour){
       response.json(tour)
   } else {
    res.status(404)
    throw new Error('Product not found') 
   }

}))

export default router
