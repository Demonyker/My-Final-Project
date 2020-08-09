const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const Note = sequelize.define('Note', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userIdLike: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}, {
    freezeTableName: true
  // Other model options go here
});

Note.sync();
module.exports = {
    Note,
}