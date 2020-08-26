const { AuthenticationController } = require('../../controllers')
const authenticationRoter = require('express').Router();

authenticationRoter.post('/signUp', AuthenticationController.signUp);

authenticationRoter.post('/signIn', AuthenticationController.signIn);

module.exports = authenticationRoter;