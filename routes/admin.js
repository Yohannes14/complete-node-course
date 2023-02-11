const path = require('path');
const express = require('express');
const productsCont = require('../controllers/products');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',productsCont.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsCont.postAddProduct);

module.exports =router;
