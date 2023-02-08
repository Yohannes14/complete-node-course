const express = require('express');

const router = express.Router();

// for get 
router.get('/add-product', (req, res, next)=> {
    res.send('<form action="/product" method="POST"><input type="text" name ="title"><button type ="submit"> Add Product</button></form>');
});
//for post
router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports =router;