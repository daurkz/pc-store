const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

async function connectDB(MONGO_URI) {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected MongoDB!')
    } catch(error) {
        console.error('Error to connect', error)
    }
}


module.exports = connectDB;



