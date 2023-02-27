// const Product = require('../models/product');

exports.getLogin = (req, res, next) => {
   console.log(req.get('Cookie'));
      res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
      });
};
exports.postLogin = (req, res, next) => {
    //seeting cookie
    res.setHeader('Set-Cookie', 'loggedIn =true');
   res.redirect('/');
};