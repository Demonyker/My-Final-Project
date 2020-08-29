const { User } = require('../models');
const { sequelize } = require('../config');
const { rebuildCategories } = require('../helpers');

class UserService {
  static async getPersonalInfo(dto) {
    const {
      user: {
        dataValues: {
          id,
        },
      },
    } = dto;

    try {
      const user = await User.findByPk(id);
      const userWithourPassword = Object.entries(user.dataValues).reduce((acc, item) => {
        if (item[0] !== 'password' && item[0] !== 'salt') {
          return {
            ...acc,
            [item[0]]: item[1],
          };
        }

        return acc;
      }, {});

      const [result] = await sequelize.query(`select category.id as categoryId, category.title as categoryTitle, note.id as noteId, note.title as noteTitle, note.description as noteDescription from category left join note ON category.id = note."categoryId" where category."creatorId" = ${id}`);

      const categories = rebuildCategories(result);

      return {
        ...userWithourPassword,
        categories,
      };
    } catch (e) {
      return e;
    }
  }
}

module.exports = {
  UserService,
};
