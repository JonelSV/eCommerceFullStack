import mongoose from "mongoose"; 

// MAKE SURE TO IMPORT this in the server.js as a db.js file
// process.exit(1) = means exit with failure notification
// useNewUrlParser, useUnifiedTopology, useCreateIndex are no longer supported in Mongoose 6 - gives error nodemon crash


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB