const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthenticationService {

	static async signUp(dto) {
		const {
			firstName,
			lastName,
			birthDate,
			email,
			password,
		} = dto;

		const salt = await bcrypt.genSalt();

		try {
			const user = await User.create({
				firstName,
				lastName,
				birthDate,
				email,
				salt,
				password: await this.hashPassword(password, salt)
			})

			return user;
		} catch(e) {
			return e;
		}
	}

	static async hashPassword(password, salt) {
		return await bcrypt.hash(password, salt);
  }
  
  static async signIn(dto) {
		const {
      email,
      password,
    } = dto;

    try {
      const { isValidatedPassword, user } = await this.validateUserPassword(email, password);

      if (!isValidatedPassword) {
        throw new Error('Wrong Password');
      }

      const data = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthDate: user.birthDate,
      }

      const signature = 'MySuP3R_z3kr3t';
      const expiration = '6h';

      return jwt.sign({ data }, signature, { expiresIn: expiration });

    } catch(e) {
      return e.message;
    }
  }
  
  static async validateUserPassword(email, password) {
    const user = await User.findOne({ where: { email }})
    if (!user) {
      throw new Error('User Not Found')
    }

    const hash = await bcrypt.hash(password, user.salt);
    const isValidatedPassword = hash === user.password;

    return { isValidatedPassword, user };
  }
}

module.exports = {
	AuthenticationService,
}