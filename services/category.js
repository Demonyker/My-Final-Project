const { Sequelize } = require('sequelize');
const { Category } = require('../models');
const { BadRequest } = require('../helpers');
const { ERRORS_MESSAGES } = require('../enums');

const { CANT_DELETE_CATEGORY, CANT_UPDATE_CATEGORY } = ERRORS_MESSAGES;

class CategoryService {
  static async findCategories({ searchString, creatorId }) {
    if (searchString && creatorId) {
      const categories = await Category.findAll({
        where: {
          title: {
            [Sequelize.Op.iLike]: `%${searchString}%`,
          },
          creatorId,
        },
      });

      return categories;
    }

    if (searchString) {
      const categories = await Category.findAll({
        where: {
          title: {
            [Sequelize.Op.iLike]: `%${searchString}%`,
          },
        },
      });

      return categories;
    }

    if (creatorId) {
      const categories = await Category.findAll({
        where: {
          creatorId,
        },
      });

      return categories;
    }

    return Category.findAll();
  }

  static async getAll(dto) {
    const categories = this.findCategories(dto);

    return categories;
  }

  static async add(dto) {
    const {
      title,
      user: {
        dataValues: {
          id: creatorId,
        },
      },
    } = dto;

    try {
      const category = await Category.create({
        title,
        creatorId,
      });

      return category;
    } catch (e) {
      return e;
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

    try {
      const currentCategory = await Category.findByPk(categoryId);

      if (currentCategory.creatorId !== userId) {
        throw new BadRequest(CANT_DELETE_CATEGORY);
      }

      await Category.destroy({ where: { id: categoryId } });

      const results = await this.getAll({});

      return results;
    } catch (e) {
      return e;
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
        throw new BadRequest(CANT_UPDATE_CATEGORY);
      }

      await Category.update({ title: newTitle }, {
        where: {
          id,
        },
      });

      const newCategory = await Category.findByPk(id);
      return newCategory;
    } catch (e) {
      return e;
    }
  }
}

module.exports = {
  CategoryService,
};
