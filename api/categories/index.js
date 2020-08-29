const categoryRouter = require('express').Router();
const validator = require('express-joi-validation').createValidator({});
const { CategoryController } = require('../../controllers');
const { isAuth, findUser } = require('../../helpers');
const {
  categoryFilterSchema,
  addCategorySchema,
  deleteCategorySchema,
  updateCategorySchema,
} = require('../../validations');

categoryRouter.get('/categories', isAuth, findUser, validator.query(categoryFilterSchema), CategoryController.getAll);

categoryRouter.post('/categories', isAuth, findUser, validator.body(addCategorySchema), CategoryController.add);

categoryRouter.delete('/categories', isAuth, findUser, validator.body(deleteCategorySchema), CategoryController.delete);

categoryRouter.put('/categories', isAuth, findUser, validator.body(updateCategorySchema), CategoryController.update);

module.exports = categoryRouter;
