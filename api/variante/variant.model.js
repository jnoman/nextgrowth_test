const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VariantSchema = new Schema({
    sku: {
        type: String,
        require: true 
    },
    specification: {
        type: String,
        require: true 
    },
    price: {
        type: Number,
        require: true 
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "product"
    }
});

module.exports = mongoose.model("variant", VariantSchema);