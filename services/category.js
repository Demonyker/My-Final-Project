const { Category } = require('../models');

class CategoryService {

	static async getAll(dto) {
    try {
      const categories = await Category.findAll();

      if (!categories.length) {
        throw new Error('No categories')
      }

      return categories;
    } catch (e) {
      return e.message;
    }
  }
}

module.exports = {
	CategoryService,
}