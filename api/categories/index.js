const { CategoryController } = require('../../controllers')
const categoryRouter = require('express').Router();
const { isAuth, findUser } = require('../../helpers')

categoryRouter.get('/categories', isAuth, findUser, CategoryController.getAll)

categoryRouter.post('/categories', isAuth, findUser, CategoryController.add);

categoryRouter.delete('/categories', isAuth, findUser, CategoryController.delete)

categoryRouter.put('/categories', isAuth, findUser, CategoryController.update)

module.exports = categoryRouter;
