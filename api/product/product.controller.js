const productService = require("./product.service");
const variantService = require("./../variante/variant.service");
const { validateAddProduct, validateUpdateProduct } = require("./../../validator/product_validator");
const mongoose = require("mongoose");
const { createVariant} = require("./../variante/variant.controller");

module.exports = {
    createProduct:(req, res)=>{
        const body = req.body;

        const { error, value } = validateAddProduct(body);
        if (error) {
            return res.status(401).json({
                message:error.details
            });
        }
        var variants = body.variants;
        body.variants =[];
        productService.createProduct(body).then(result=>{
            if(result){
                
                variants.forEach(function(variant) {
                    productService.getProductById(result._id).then(result1=>{
                        console.log(createVariant(variant, result._id, result1));
                    });
                });
                productService.getProductById(result._id).then(result1=>{
                    res.status(200).json({
                        message:"Product inserted successfully",
                        data:result1
                    })
                });
                
            } else {
                res.status(409).json({
                    message:"Failed to insert product",
                    data:result
                })
            }
        });
    },
    getAllProducts:(req, res)=>{
        productService.listProducts().then(result=>{
            if(result){
                res.status(200).json({
                    message:"Product list",
                    data:result
                })
            } else {
                res.status(409).json({
                    message:"eroooor",
                    data:result
                })
            }
        });
    },
    getProductById:(req, res)=>{
        if( !mongoose.Types.ObjectId.isValid(req.params.id) ){
            res.status(401).json({
                message:"Invalid Id"
            });
        } else{
            productService.getProductById(req.params.id).then(result=>{
                if(result){
                    res.status(200).json({
                        message:"Product",
                        data:result
                    })
                } else {
                    res.status(404).json({
                        message:"No product with this id"
                    })
                }
            });
        }
        
    },
    deleteProductById:(req, res)=>{
        if( !mongoose.Types.ObjectId.isValid(req.params.id) ){
            res.status(401).json({
                message:"Invalid Id"
            });
        } else{
            productService.deleteProduct(req.params.id).then(result=>{
                if(!result.deletedCount==0){
                    res.status(200).json({
                        message:"Product deleted",
                        data: result
                    })
                } else {
                    res.status(404).json({
                        message:"No product with this id",
                        data: result
                    })
                }
            });
        }
        
    },
    updateProduct:(req, res)=>{
        if( !mongoose.Types.ObjectId.isValid(req.params.id) ){
            res.status(401).json({
                message:"Invalid Id"
            });
        } else{
            const body = req.body;
            const { error, value } = validateUpdateProduct(body);
            if (error) {
                return res.status(401).json({
                    message:error.details
                });
            }
            productService.updateProduct(req.params.id, body).then(result=>{
                if(result){
                    res.status(200).json({
                        message:"Product updated",
                        data:result
                    })
                } else {
                    res.status(404).json({
                        message:"No product with this id"
                    })
                }
            });
        }
        
    },
    getVariantsByIdProduct:(req, res)=>{
        if( !mongoose.Types.ObjectId.isValid(req.params.id) ){
            res.status(401).json({
                message:"Invalid Id"
            });
        } else{
            productService.getVariantsByIdProduct(req.params.id).then(result=>{
                if(result){
                    res.status(200).json({
                        message:"variants list",
                        data:result.variants
                    })
                } else {
                    res.status(404).json({
                        message:"No product with this id"
                    })
                }
            });
        }
        
    },
    getVariantByIdProductAndIdVariants:(req, res)=>{
        if( !mongoose.Types.ObjectId.isValid(req.params.idP) ){
            res.status(401).json({
                message:"Invalid product Id"
            });
        }
        else if( !mongoose.Types.ObjectId.isValid(req.params.idV) ){
            res.status(401).json({
                message:"Invalid variant Id"
            });
        } else{
            productService.getProductById(req.params.idP).then(result1=>{
                if(result1){
                    variantService.getVariantByIdProductAndIdVariants(req.params.idP,req.params.idV).then(result=>{
                        if(result){
                            res.status(200).json({
                                message:"variants list",
                                data:result
                            })
                        } else {
                            res.status(404).json({
                                message:"No variant with this id"
                            })
                        }
                    });
                } else {
                    res.status(404).json({
                        message:"No product with this id"
                    })
                }
            });
            
        }
        
    }
}