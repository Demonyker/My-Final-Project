const { Category } = require('../models');
const { sequelize } = require('../config');

class CategoryService {

	static async getAll(dto) {
    try {
      const { filters } = dto;
      const { title: searchString } = filters;

      if (searchString) {
        const [results] = await sequelize.query(`SELECT * FROM category WHERE title ILIKE '%${searchString}%';`)
        return results;
      }
      const categories = await Category.findAll();

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

  static async delete(dto) {
    const { 
      id: categoryId,
      user: { 
        dataValues: { 
          id: userId,
        }, 
      },
    } = dto;

    const currentCategory = await Category.findByPk(categoryId);

    try {
      if (currentCategory.creatorId !== userId) {
        throw new Error('You cant delete this category')
      }

      await Category.destroy({ where: { id: categoryId }})

      const results = await this.getAll({
        filters: {}
      });

      return results;
    } catch (e) {
      return e.message;
    }
  }

  static async update(dto) {
    const {
      id,
      newTitle,
      user: { 
        dataValues: { 
          id: userId,
        }, 
      },
    } = dto;

    const currentCategory = await Category.findByPk(id);
    try {
      if (currentCategory.creatorId !== userId) {
        throw new Error('You cant update this category')
      }

      await Category.update({ title: newTitle }, {
        where: {
          id
        }
      })

      const newCategory = await Category.findByPk(id)
      return newCategory;
    } catch(e) {
      return e.message;
    }
  }
}

module.exports = {
	CategoryService,
}