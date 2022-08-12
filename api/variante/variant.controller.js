const variantService = require("./variant.service");
const { validateAddVariant } = require("./../../validator/variant_validator");
const productService = require("./../product/product.service");


module.exports = {
    createVariant:(body, idProduct, product)=>{
        const { error, value } = validateAddVariant(body);
        if (error) {
            return error.details;
        }
        body.product=idProduct;
        
        variantService.createVariant(body).then(result=>{
            if(result){
                product.variants.push(result._id);
                productService.updateProductVariants(idProduct, result).then(result1=>{
                    return result._id;

                })
            } 
        });
    }
}