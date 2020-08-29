const { AuthenticationService } = require('../../services');
const { responseWrapper } = require('../../helpers');

class AuthenticationController {
  static async signUp(req, res, next) {
    const user = await AuthenticationService.signUp(req.body, next);
    responseWrapper(user, res, next);
  }

  static async signIn(req, res, next) {
    const result = await AuthenticationService.signIn(req.body, next);
    responseWrapper(result, res, next);
  }
}

module.exports = AuthenticationController;
