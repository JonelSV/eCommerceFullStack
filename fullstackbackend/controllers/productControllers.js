import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";

// @desc Fetch all tours
// @route GET/api/tours
// @access Public


const getTours = asyncHandler(async (request, response) => {
    const tours = await Product.find({})

    response.json(tours)
})
const getTourById = asyncHandler(async (request, response) => {
    
   if (tour) {
     response.json(tour);
   } else {
     res.status(404);
     throw new Error('Product not found');
   }
})

export {getTours, getTourById}
    
