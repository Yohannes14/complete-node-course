const path = require('path');

const express = require('express');

const productCont =require('../controllers/products')

const router = express.Router();

router.get('/',productCont.getProducts );

module.exports = router;
