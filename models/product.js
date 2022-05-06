var mongoose = require('mongoose');
//Get the int-32 type for tcin
var Int32 = require('mongoose-int32');
var Schema = mongoose.Schema;

var ProductSchema = new Schema(
    {
        tcin: {type: Int32, required: true },
        price: {
            value: {type: Decimal128, required: false},
            currency_code: {type: String, required: false}
        }
    }
);

//Virtual's would go here

//Export model
module.exports = mongoose.model('Product', ProductSchema);