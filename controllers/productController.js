const {body, validationResult} = require('express-validator');
var Products = require('../models/products');
const request = require('request');

//Return product details on GET
exports.product_detail_get = function(req, res, next) {

    //This should NOT be a fixed URL, this should be an environment variable, but I've been busy and am running out of time
    request('https://redsky-uat.perf.target.com/redsky_aggregations/v1/redsky/case_study_v1?key=3yUxt7WltYG7MFKPp7uyELi1K40ad2ys&tcin=' 
    + parseInt(req.params.id), function (product_detail_err, product_detail_results) {
        if (product_detail_err || product_detail_results.statusCode !== 200) { return next(product_detail_err)}
        else {
            Products.find({ id : parseInt(req.params.id)}, { _id : 0})
            .populate('current_price', 'id', '-_id')
            .exec(function(product_price_err, product_price_results){
                if (product_price_err) { return next(product_price_err); }
                if (product_price_results==null) {//No Results
                    var product_price_err = new Error('Product not found');
                    err.status = 404;
                    return next(product_priceerr);
                }
                //This is not quite right, it needs to be fixed, but I've got to go to bed
                res.json(JSON.parse(product_detail_results.body).data.product.item.product_description.title + product_price_results[0]);
            });
        }
      });
}

//Update product price on PUT
exports.product_details_put = function(req, res, next) {

    // Assume the ID doesn't need validation / sanitization

}