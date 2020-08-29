const authenticationRoter = require('express').Router();
const validator = require('express-joi-validation').createValidator({});
const { AuthenticationController } = require('../../controllers');
const { signUpSchema, signInSchema } = require('../../validations');

authenticationRoter.post('/signUp', validator.body(signUpSchema), AuthenticationController.signUp);

authenticationRoter.post('/signIn', validator.body(signInSchema), AuthenticationController.signIn);

module.exports = authenticationRoter;
