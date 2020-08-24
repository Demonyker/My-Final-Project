const { sequelize } = require('../config');
const isAuth = require('./isAuth');
const { findUser } = require('./findUser');

sequelize.query('CREATE TRIGGER count_tags AFTER INSERT ON Tag BEGIN UPDATE Note SET tags_count = (SELECT COUNT(id) FROM Tag WHERE noteId = NEW.noteId) WHERE id = NEW.noteId; END')
sequelize.query('CREATE TRIGGER count_notes AFTER INSERT ON Note BEGIN UPDATE User SET notes_count = (SELECT COUNT(id) FROM Note WHERE userIdLike = NEW.userIdLike) WHERE id = NEW.userIdLike; END')

module.exports = {
  isAuth,
  findUser,
}