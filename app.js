
const express = require('express');
const app = express();
const bodyParser =require('body-parser');


app.use('/', (req, res, next)=> {
    console.log('This is always runs !')
    next();
});

// parsing incoming requestst

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next)=> {
    console.log('In another midddleware!')
    res.send('<form action="/product" method="POST"><input type="text" name ="title"><button type ="submit"> Add Product</button></form>');
});
app.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next)=> {
    console.log('In another midddleware!')
    res.send('<h1> Hello from Express!</h1>');
});


app.listen(3000);
