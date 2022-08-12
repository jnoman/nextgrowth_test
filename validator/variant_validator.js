const Joi = require("joi");

const validator = (schema) => (payload) =>
schema.validate(payload, { abortEarly: false });

const addVariantSchema = Joi.object({
        sku: Joi.string().required(), 
        specification: Joi.string().required(), 
        price: Joi.number().min(1).max(50000).required()
});
exports.validateAddVariant = validator(addVariantSchema);