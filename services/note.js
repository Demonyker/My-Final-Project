const { Note } = require('../models');
const { sequelize } = require('../config');

class NoteService {

	static async getNotesByCategory(dto) {
    try {
      const { filters } = dto;
      const { searchString, categoryId } = filters;

      if (!categoryId) {
        throw new Error('No category id');
      };

      if (searchString) {
        const [results] = await sequelize.query(`
          SELECT * FROM note WHERE categoryId = '${categoryId}' 
          AND title ILIKE '%${searchString}%'
          OR description ILIKE '%${searchString}%';
        `
        );
        return results;
      };
      const notes = await Note.findAll({ where: { categoryId } });

      return notes;
    } catch (e) {
      return e.message;
    }
  }

  static async add(dto) {
    const { 
      title,
      description,
      categoryId,
      user: { 
        dataValues: { 
          id: creatorId,
        } 
      }
    } = dto;

    try {
      const note = await Note.create({
        title,
        creatorId,
        description,
        categoryId,
      })

      return note;
    } catch(e) {
      return e.message;
    }
  }

  static async delete(dto) {
    const { 
      id: noteId,
      categoryId,
      user: { 
        dataValues: { 
          id: userId,
        }, 
      },
    } = dto;

    const currentNote = await Note.findByPk(noteId);

    try {
      if (currentNote.creatorId !== userId) {
        throw new Error('You cant delete this note')
      }

      await Note.destroy({ where: { id: noteId }})

      const results = await this.getNotesByCategory({
        filters: {
          categoryId,
        }
      });

      return results;
    } catch (e) {
      return e.message;
    }
  }

  static async update(dto) {
    const {
      id,
      newTitle,
      newDescription,
      user: { 
        dataValues: { 
          id: userId,
        }, 
      },
    } = dto;

    const currentNote = await Note.findByPk(id);
    try {
      if (currentNote.creatorId !== userId) {
        throw new Error('You cant update this note')
      }

      await Note.update({ title: newTitle, description: newDescription }, {
        where: {
          id
        }
      })

      const newNote = await Note.findByPk(id)
      return newNote;
    } catch(e) {
      return e.message;
    }
  }
}

module.exports = {
	NoteService,
}