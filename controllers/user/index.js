const { UserService } = require('../../services')
const { responseWrapper } = require('../../helpers');

class UserController {

  static async getPersonalInfo(req, res, next) {
    const note = await UserService.getPersonalInfo({user: req.user})
    responseWrapper(note, res, next);
  }

}

module.exports = UserController;