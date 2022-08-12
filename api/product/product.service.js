const productModel = require("./product.model");

module.exports = {
    createProduct:(data)=>{
        return productModel.create(data);
    },
    listProducts:()=>{
        return productModel.find();
    },
    getProductById:(id)=>{
        return productModel.findById(id);
    },
    updateProduct:(id, data)=>{
        return productModel.findByIdAndUpdate(id, data);
    },
    deleteProduct:(id, data)=>{
        return productModel.deleteOne({ _id: id });
    },
    getVariantsByIdProduct:(id)=>{
        return productModel.findById(id).populate("variants");
    },
    updateProductVariants:(id, data)=>{
        return productModel.findByIdAndUpdate(id, { $push: { variants: {
            _id:data._id,
            sku: data.sku,
            specification: data.specification,
            price: data.price
        }} },
            { new: true, useFindAndModify: false });
    }
}
