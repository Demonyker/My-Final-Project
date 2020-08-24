const { UserService } = require('../../services')
const authenticationController = require('express').Router();

authenticationController.post('/signUp', (req, res) => {
  const user = UserService.create(req.body)

  user.then(v => {
		res.send(v);
	})
})

module.exports = authenticationController;