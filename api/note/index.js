const { NoteService } = require('../../services')
const noteController = require('express').Router();
const { isAuth, findUser } = require('../../helpers')

noteController.get('/notes', isAuth, findUser, (req, res) => {
	const notes = NoteService.getNotesByCategory({filters: { ...req.query }, user: { ...req.user }})
	notes.then(v => {
		res.send(v);
	})
})

noteController.post('/notes', isAuth, findUser, (req, res) => {
	const note = NoteService.add({...req.body, user: { ...req.user }})

	note.then(v => {
		res.send(v);
	});
});

noteController.delete('/notes', isAuth, findUser, (req, res) => {
	const notes = NoteService.delete({...req.body, user: { ...req.user }})

	notes.then(v => {
		res.send(v);
	});
})

noteController.put('/notes', isAuth, findUser, (req, res) => {
	const note = NoteService.update({...req.body, user: { ...req.user }});

	note.then(v => {
		res.send(v);
	});
})

module.exports = noteController;
