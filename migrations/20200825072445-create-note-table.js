'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('note', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('note');
  }
};
