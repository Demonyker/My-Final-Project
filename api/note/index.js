const { NoteController } = require('../../controllers')
const noteRouter = require('express').Router();
const { isAuth, findUser } = require('../../helpers')

noteRouter.get('/notes', isAuth, findUser, NoteController.getNoteByCategory)

noteRouter.post('/notes', isAuth, findUser, NoteController.add);

noteRouter.delete('/notes', isAuth, findUser, NoteController.delete);

noteRouter.put('/notes', isAuth, findUser, NoteController.update);

module.exports = noteRouter;
