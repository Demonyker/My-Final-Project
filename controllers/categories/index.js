const { CategoryService } = require('../../services');
const { responseWrapper } = require('../../helpers');

class CategoryController {
  static async getAll(req, res) {
    const categories = await CategoryService.getAll({ ...req.query, user: { ...req.user } });
    res.send(categories);
  }

  static async add(req, res, next) {
    const category = await CategoryService.add({ ...req.body, user: { ...req.user } });
    responseWrapper(category, res, next);
  }

  static async delete(req, res, next) {
    const categories = await CategoryService.delete({ ...req.body, user: { ...req.user } });
    responseWrapper(categories, res, next);
  }

  static async update(req, res, next) {
    const category = await CategoryService.update({ ...req.body, user: { ...req.user } });
    responseWrapper(category, res, next);
  }
}

module.exports = CategoryController;
