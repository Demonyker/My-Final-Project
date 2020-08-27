const { NoteController } = require('../../controllers')
const noteRouter = require('express').Router();
const { isAuth, findUser } = require('../../helpers')
const validator = require('express-joi-validation').createValidator({})
const { 
  noteFilterSchema,
  addNoteSchema,
  deleteNoteSchema,
  updateNoteSchema,
} = require('../../validations');

noteRouter.get('/notes', isAuth, findUser, validator.query(noteFilterSchema), NoteController.getNoteByCategory)

noteRouter.post('/notes', isAuth, findUser, validator.body(addNoteSchema), NoteController.add);

noteRouter.delete('/notes', isAuth, findUser, validator.body(deleteNoteSchema), NoteController.delete);

noteRouter.put('/notes', isAuth, findUser, validator.body(updateNoteSchema), NoteController.update);

module.exports = noteRouter;
