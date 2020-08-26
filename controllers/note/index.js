const { NoteService } = require('../../services')

class NoteController {

	static async getNoteByCategory(req, res) {
	  const notes = await NoteService.getNotesByCategory({filters: { ...req.query }, user: { ...req.user }})
    res.send(notes);
  }
  
  static async add(req, res) {
    const note = await NoteService.add({...req.body, user: { ...req.user }})
    res.send(note);
  }

  static async delete(req, res) {
	  const notes = await NoteService.delete({...req.body, user: { ...req.user }})

    res.send(notes);
  }

  static async update(req, res) {
	  const note = await NoteService.update({...req.body, user: { ...req.user }});
    
    res.send(note);
  }
}

module.exports = NoteController;