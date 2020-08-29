const { signUpSchema, signInSchema } = require('./authentication');
const {
  categoryFilterSchema,
  addCategorySchema,
  deleteCategorySchema,
  updateCategorySchema,
} = require('./category');
const {
  noteFilterSchema,
  addNoteSchema,
  deleteNoteSchema,
  updateNoteSchema,
} = require('./note');

module.exports = {
  signUpSchema,
  signInSchema,
  categoryFilterSchema,
  addCategorySchema,
  deleteCategorySchema,
  updateCategorySchema,
  noteFilterSchema,
  addNoteSchema,
  deleteNoteSchema,
  updateNoteSchema,
};
