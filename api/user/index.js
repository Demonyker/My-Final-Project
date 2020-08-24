const { UserService } = require('../../services')
const userController = require('express').Router();

userController.post('/user', (req, res) => {
	const user = UserService.create(req.body)
	user.then(v => {
		res.send(v);
	})
})

module.exports = userController;
