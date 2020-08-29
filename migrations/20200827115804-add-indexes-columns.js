module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addIndex('category', ['creatorId']);
    await queryInterface.addIndex('note', ['categoryId']);
  },

  down: async (queryInterface) => {
    await queryInterface.removeIndex('category', 'category_creator_id');
    await queryInterface.removeIndex('note', 'note_category_id');
  },
};
