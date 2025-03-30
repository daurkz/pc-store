const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');



const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(cors());


connectDB(MONGO_URI );

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(PORT, () => {
    console.log(`Server started! http://localhost:${PORT}`)
})