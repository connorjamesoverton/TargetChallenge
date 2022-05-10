var express = require('express');
var router = express.Router();

//Require controller modules
var product_controller = require('../controllers/productController');

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// PUT request to update product price
//router.put('/product/:id', product_controller.product_price_put);

// GET request for product data
router.get('/products/:id', product_controller.product_detail_get);


module.exports = router;
