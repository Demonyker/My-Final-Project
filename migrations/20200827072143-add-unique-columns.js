const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn('user', 'email', {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    });
    await queryInterface.changeColumn('category', 'title', {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    });
    await queryInterface.changeColumn('note', 'title', {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeConstraint('user', 'user_email_key');
    await queryInterface.removeConstraint('category', 'category_title_key');
    await queryInterface.removeConstraint('note', 'note_title_key');
  },
};
