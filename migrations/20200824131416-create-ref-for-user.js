const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn('category', 'creatorId', {
      type: DataTypes.INTEGER,
      field: 'creatorId',
      onDelete: 'CASCADE',
      references: {
        model: 'user',
        key: 'id',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeConstraint('category', 'category_creator_id');
  },
};
