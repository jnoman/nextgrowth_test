const Joi = require("joi");

const validator = (schema) => (payload) =>
schema.validate(payload, { abortEarly: false });

const addProductSchema = Joi.object({
    reference: Joi.string().min(4).max(30).required(),
    name: Joi.string().min(4).max(30).required(),
    description: Joi.string().min(10).max(500).required(),
    image: Joi.string().min(4).max(300).required(),
    variants: Joi.array().items(Joi.object().keys({ 
        sku: Joi.string().required(), 
        specification: Joi.string().required(), 
        price: Joi.number().min(1).max(50000).required()
      })) 
});

const updateProductSchema = Joi.object({
    reference: Joi.string().min(4).max(30),
    name: Joi.string().min(4).max(30),
    description: Joi.string().min(10).max(500),
    image: Joi.string().min(4).max(300)
});

exports.validateAddProduct = validator(addProductSchema);
exports.validateUpdateProduct = validator(updateProductSchema);