const { AuthenticationService } = require('../../services')
const authenticationController = require('express').Router();

authenticationController.post('/signUp', (req, res) => {
  const user = AuthenticationService.signUp(req.body)

  user.then(v => {
		res.send(v);
	})
})

authenticationController.post('/signIn', (req, res) => {
  const user = AuthenticationService.signIn(req.body)

  user.then(v => {
		res.send(v);
	})
})

module.exports = authenticationController;