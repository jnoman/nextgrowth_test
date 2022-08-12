const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    reference: {
        type: String,
        required: true 
    },
    name: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
    image: {
        type: String,
        required: true 
    },
    variants: [{
        type: Schema.Types.ObjectId,
        ref: "variant"
    }]
});

module.exports = mongoose.model("product", ProductSchema);