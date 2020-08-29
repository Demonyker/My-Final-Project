const Joi = require('joi');

const categoryFilterSchema = Joi.object({
  searchString: Joi.string().min(2).max(225),
  creatorId: Joi.number().min(1),
});

const addCategorySchema = Joi.object({
  title: Joi.string().required().min(2).max(50),
});

const deleteCategorySchema = Joi.object({
  id: Joi.number().required(),
});

const updateCategorySchema = Joi.object({
  id: Joi.number().required(),
  newTitle: Joi.string().required().min(2).max(50),
});

module.exports = {
  categoryFilterSchema,
  addCategorySchema,
  deleteCategorySchema,
  updateCategorySchema,
};
