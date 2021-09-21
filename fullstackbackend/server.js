import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


// common JS
// npm i express to install
// app.get - THIS IS A ROUTE.  when a http get request is made to the home url ('/'), a function that takes a request and response object
// and that response object sends a response ('API is running')
// importing tours from ./data folder and converting array into json
// run tours.find() to cycle throgh the array same as before, this time, instead of {{match}} , just match the request with the params id - url /:id
// call and run connectDB - npm run server to check


dotenv.config()

connectDB()

const app = express()

app.get('/', (request, response) => {
    response.send('API is working')
})

// const __dirname = path.resolve()
// app.use('uploads', express.static(path.join(__dirname,'uploads')))

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/fullstackfront/build')))

//     app.get('*')
// }

app.use('/api/tours', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on ${PORT}`))

