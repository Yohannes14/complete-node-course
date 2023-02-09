const path = require('path');
const express = require('express');

/// helper function for navigation
const rootDir = require('../util/path');

const router = express.Router();

// for get 
router.get('/add-product', (req, res, next)=> {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
});
//for post
router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports =router;