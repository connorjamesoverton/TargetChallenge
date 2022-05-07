const product = require('../models/product');
var Product = require('../models/product');

//Todo: Finish the below

//Return product details on GET
/*
exports.product_detail_get = function(req, res, next) {

    async.parallel({
        product: function(callback) {
            product.find({ tcin: parseInt(req.params.id)}).populate('price').exec(callback);
        }
    });
};


//Update product price on PUT
exports.product_details_put = function(req, res, next) {

    // Assume the ID doesn't need validation / sanitization


}
*/