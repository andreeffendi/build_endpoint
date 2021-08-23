const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// Create -> Post : localhost:4000/v1/customer/product
router.post('/product'. productsController.createProduct);

// Read -> Get : localhost:4000/v1/customer/products
router.get('/product'. productsController.getAllProduct);

module.exports = router;