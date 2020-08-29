const categoryRouter = require('express').Router();
const validator = require('express-joi-validation').createValidator({});
const multer = require('multer');
const { CategoryController } = require('../../controllers');
const { isAuth, findUser } = require('../../helpers');
const {
  categoryFilterSchema,
  addCategorySchema,
  deleteCategorySchema,
  updateCategorySchema,
} = require('../../validations');

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storageConfig });

categoryRouter.get('/categories', isAuth, findUser, validator.query(categoryFilterSchema), CategoryController.getAll);

categoryRouter.post('/categories', isAuth, findUser, validator.body(addCategorySchema), CategoryController.add);

categoryRouter.delete('/categories', isAuth, findUser, validator.body(deleteCategorySchema), CategoryController.delete);

categoryRouter.put('/categories', isAuth, findUser, validator.body(updateCategorySchema), CategoryController.update);

categoryRouter.post('/categories/upload', isAuth, findUser, upload.single('file'), CategoryController.upload);

module.exports = categoryRouter;
