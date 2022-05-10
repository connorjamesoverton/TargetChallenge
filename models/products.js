var mongoose = require('mongoose');
//Get the int-32 type for the id (tcin)
const Int32 = require("mongoose-int32").loadType(mongoose);
var Schema = mongoose.Schema;

const ProductSchema = new Schema({
        id: {type: Int32, required: true },
        current_price: {
            value: {type: Schema.Types.Decimal128, required: false},
            currency_code: {type: String, required: false}
        }
    });

//Virtual for product url
ProductSchema
.virtual('url')
.get(function () {
    return '/index/products/' + this.id;
});

//Export model
module.exports = mongoose.model('Products', ProductSchema);

