const { Sequelize } = require('sequelize');
const { Note } = require('../models');
const { BadRequest } = require('../helpers');
const { ERRORS_MESSAGES } = require('../enums');

const { CANT_DELETE_NOTE, CANT_UPDATE_NOTE } = ERRORS_MESSAGES;

class NoteService {
  static async getNotesByCategory(dto) {
    const { searchString, categoryId } = dto;

    if (searchString) {
      const notes = await Note.findAll({
        where: {
          categoryId,
          [Sequelize.Op.or]: [
            {
              title: {
                [Sequelize.Op.iLike]: `%${searchString}%`,
              },
            },
            {
              description: {
                [Sequelize.Op.iLike]: `%${searchString}%`,
              },
            },
          ],
        },
      });

      return notes;
    }
    const notes = await Note.findAll({ where: { categoryId } });

    return notes;
  }

  static async add(dto) {
    const {
      title,
      description,
      categoryId,
      user: {
        dataValues: {
          id: creatorId,
        },
      },
    } = dto;

    try {
      const note = await Note.create({
        title,
        creatorId,
        description,
        categoryId,
      });

      return note;
    } catch (e) {
      return e;
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

    try {
      const currentNote = await Note.findByPk(noteId);

      if (currentNote.creatorId !== userId) {
        throw new BadRequest(CANT_DELETE_NOTE);
      }

      await Note.destroy({ where: { id: noteId } });

      const results = await this.getNotesByCategory({
        categoryId,
      });

      return results;
    } catch (e) {
      return e;
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

    try {
      const currentNote = await Note.findByPk(id);

      if (currentNote.creatorId !== userId) {
        throw new BadRequest(CANT_UPDATE_NOTE);
      }

      await Note.update({ title: newTitle, description: newDescription }, {
        where: {
          id,
        },
      });

      const newNote = await Note.findByPk(id);
      return newNote;
    } catch (e) {
      return e;
    }
  }
}

module.exports = {
  NoteService,
};
