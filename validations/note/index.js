const Joi = require('joi');

const noteFilterSchema = Joi.object({
  searchString: Joi.string().min(2).max(225),
  categoryId: Joi.number().required(),
});

const addNoteSchema = Joi.object({
  title: Joi.string().required().min(2).max(50),
  description: Joi.string().required().min(2).max(255),
  categoryId: Joi.number().required(),
});

const deleteNoteSchema = Joi.object({
  id: Joi.number().required(),
  categoryId: Joi.number().required(),
});

const updateNoteSchema = Joi.object({
  id: Joi.number().required(),
  newTitle: Joi.string().required().min(2).max(50),
  newDescription: Joi.string().required().min(2).max(255),
});

module.exports = {
  noteFilterSchema,
  addNoteSchema,
  deleteNoteSchema,
  updateNoteSchema,
};
