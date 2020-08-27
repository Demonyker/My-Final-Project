const { NoteService } = require('../../services')
const { responseWrapper } = require('../../helpers');

class NoteController {

	static async getNoteByCategory(req, res) {
	  const notes = await NoteService.getNotesByCategory({...req.query, user: { ...req.user }})
    res.send(notes);
  }
  
  static async add(req, res, next) {
    const note = await NoteService.add({...req.body, user: { ...req.user }})
    responseWrapper(note, res, next);
  }

  static async delete(req, res, next) {
	  const notes = await NoteService.delete({...req.body, user: { ...req.user }})
    responseWrapper(notes, res, next);
  }

  static async update(req, res, next) {
	  const note = await NoteService.update({...req.body, user: { ...req.user }});
    responseWrapper(note, res, next);
  }
}

module.exports = NoteController;