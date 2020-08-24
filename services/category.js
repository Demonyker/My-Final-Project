const { Category } = require('../models');

class CategoryService {

	static async getAll() {
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

  static async add(dto) {
    const { 
      title,
      user: { 
        dataValues: { 
          id: creatorId,
        } 
      }
    } = dto;

    try {
      const category = await Category.create({
        title,
        creatorId,
      })

      return category;
    } catch(e) {
      return e.message;
    }
  }
}

module.exports = {
	CategoryService,
}