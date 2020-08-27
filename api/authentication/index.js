const { AuthenticationController } = require('../../controllers')
const authenticationRoter = require('express').Router();
const { signUpSchema, signInSchema } = require('../../validations');
const validator = require('express-joi-validation').createValidator({})

authenticationRoter.post('/signUp', validator.body(signUpSchema), AuthenticationController.signUp);

authenticationRoter.post('/signIn', validator.body(signInSchema), AuthenticationController.signIn);

module.exports = authenticationRoter;