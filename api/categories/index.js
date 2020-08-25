const { CategoryService } = require('../../services')
const categoryController = require('express').Router();
const { isAuth, findUser } = require('../../helpers')

categoryController.get('/categories', isAuth, findUser, (req, res) => {
	const categories = CategoryService.getAll({filters: { ...req.query }, user: { ...req.user }})
	categories.then(v => {
		res.send(v);
	})
})

categoryController.post('/categories', isAuth, findUser, (req, res) => {
	const category = CategoryService.add({...req.body, user: { ...req.user }})

	category.then(v => {
		res.send(v);
	});
});

categoryController.delete('/categories', isAuth, findUser, (req, res) => {
	const categories = CategoryService.delete({...req.body, user: { ...req.user }})

	categories.then(v => {
		res.send(v);
	});
})

module.exports = categoryController;
