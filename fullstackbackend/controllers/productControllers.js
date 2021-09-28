import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel";

const getTours = asyncHandler(async (request, response) => {
    const tours = await Product.find({})

    response.json(tours)
})