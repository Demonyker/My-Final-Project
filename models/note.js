const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const Note = sequelize.define('note', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'categoryId',
    onDelete: 'CASCADE',
    references: {
      model: 'category',
      key: 'id',
    }
  },
  creatorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'creatorId',
    onDelete: 'CASCADE',
    references: {
      model: 'user',
      key: 'id',
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
    freezeTableName: true
});

module.exports = {
  Note
}