const { User, Category } = require('../models');
const { sequelize } = require('../config');
const { rebuildCategories } = require('../helpers');

class UserService {

	static async getPersonalInfo(dto) {
		const { 
      user: { 
        dataValues: { 
          id,
        } 
      }
		} = dto;

		try {
			const user = User.findByPk(id);
			const [result] = await sequelize.query(`select category.id as categoryId, category.title as categoryTitle, note.id as noteId, note.title as noteTitle, note.description as noteDescription from category left join note ON category.id = note."categoryId" where category."creatorId" = ${id}`)

			const categories = rebuildCategories(result);
			return categories;
		} catch(e) {
			return e;
		}
	}
}

module.exports = {
	UserService,
}