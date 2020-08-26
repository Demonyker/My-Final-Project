const { CategoryService } = require('../../services')

class CategoryController {

	static async getAll(req, res) {
	  const categories = await CategoryService.getAll({...req.query, user: { ...req.user }});
    res.send(categories);
  }
  
  static async add(req, res) {
	  const category = await CategoryService.add({...req.body, user: { ...req.user }});
    res.send(category);
  }

  static async delete(req, res) {
	  const categories = await CategoryService.delete({...req.body, user: { ...req.user }});

    res.send(categories);
  }

  static async update(req, res) {
	  const category = await CategoryService.update({...req.body, user: { ...req.user }});
    
    res.send(category);
  }
}

module.exports = CategoryController;