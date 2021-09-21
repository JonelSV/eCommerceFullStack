
import dotenv from 'dotenv'
import users from './data/users.js'
import tours from './data/tours.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'



// database seeders allows us to easily import sample data ( users and products)
// seeder scripts are separate and have to import other dependencies above
// import dotenv for access to the MONGO_URI
// import files from data and models folder
// import connectDB and call it along with dotenv
// create importData and destroyData = both async since dealing with database - everything returnds a promise, so add await
// CLEAR FIRST do a try catch and clear the models with .deleteMany() from mongoose
// then do await User.insertMany(users) passing in the users from the data/users.js
// the createdUsers is a variable that takes in the created users
// then take the admin user from the createdUsers by passing [0] in the array since it is the first element in users.js (admin)
// create a const for sampleProducts. map through tours and return in a spread operator the items and passing in the user:admin at the same time.
// admin has control on sample products
// Do the same like the created users. To populate the model, use await Product.insertMany() then pass in the sampleProducts created along with the admin privilage
// call process.exit() on the try section
// call process.exit(1) on catch section = 1 is failure
// create same try catch but for destroyData. Delete the rest leaving only the await for Models.deleteMany() and console logs and error log

// to call import  ------ npm fullstackbackend/seeder
// to call destroy  ------ npm fullstackbackend/seeder -d
// to get value for -d ===== add process.argv[2]   and 2 in the array is whatever is passed after foldersection(eg. fullstackbackend/seeder)
// check with if else statement for -d
// argv is a NodeJS process taking three command line arguements. 0 = execPath eg. npm , 1 = path to JS file being executed, 2 = additional args.

// another way of doing import and destroy is to create a script in root JSON
// "data:import": "node fullstackbackend/seeder",
// "data:destroy": "node fullstackbackend/seeder -d"
// npm run data:import       on root folder

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = tours.map(tours => {
            return {...tours, user:adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }

}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }

}

if (process.argv[2] === '-d') {
    destroyData()
}else {
    importData()
}



