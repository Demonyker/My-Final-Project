const { AuthenticationService } = require('../../services')

class AuthenticationController {

	static async signUp(req, res, next) {
    try {
      const user = await AuthenticationService.signUp(req.body);
      res.send(user);
    } catch (e) {
      next(e);
    }
  }
  
  static async signIn(req, res) {
    const user = await AuthenticationService.signIn(req.body);
    res.send(user);
  }
}

module.exports = AuthenticationController;