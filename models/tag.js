const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const Tag = sequelize.define('Tag', {
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
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  noteId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  }
}, {
    freezeTableName: true
  // Other model options go here
});

Tag.sync();
module.exports = {
    Tag,
}