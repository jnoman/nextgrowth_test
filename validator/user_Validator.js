const Joi = require("joi");

const validator = (schema) => (payload) =>
schema.validate(payload, { abortEarly: false });

const signupSchema = Joi.object({
  firstName: Joi.string().min(4).max(30).required(),
  lastName: Joi.string().min(4).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(30).required()
});

const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(30).required()
  });

exports.validateSignup = validator(signupSchema);
exports.validateSignin = validator(signinSchema);