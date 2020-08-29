const Joi = require('joi');
const { regExp } = require('../../enums');

const { passwordPattern } = regExp;

const signUpSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  birthDate: Joi.string().isoDate(),
  email: Joi.string().required().email().max(129),
  password: Joi.string().required().regex(passwordPattern).min(8)
    .max(20),
});

const signInSchema = Joi.object({
  email: Joi.string().required().email().max(129),
  password: Joi.string().required().regex(passwordPattern).min(8)
    .max(20),
});

module.exports = {
  signUpSchema,
  signInSchema,
};
