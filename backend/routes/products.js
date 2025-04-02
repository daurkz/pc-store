const express = require('express');
const Product = require('../models/Products')
const router = express.Router();


router.get('/products', (req, res) => {
    res.send('ok')
});


module.exports = router;

