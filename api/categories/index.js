const { CategoryService } = require('../../services')
const categoryController = require('express').Router();
const { isAuth, findUser } = require('../../helpers')

categoryController.get('/categories', isAuth, findUser, (req, res) => {
	const categories = CategoryService.getAll({...req.body, user: { ...req.user }})
	categories.then(v => {
		res.send(v);
	})
})

module.exports = categoryController;
