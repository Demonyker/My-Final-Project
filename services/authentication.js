const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { BadRequest } = require('../helpers');
const { ERRORS_MESSAGES } = require('../enums');

const { INVALID_CREDS } = ERRORS_MESSAGES;

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
        password: await this.hashPassword(password, salt),
      });

      return user;
    } catch (e) {
      return e;
    }
  }

  static async hashPassword(password, salt) {
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  static async signIn(dto) {
    const {
      email,
      password,
    } = dto;

    const { isValidatedPassword, user } = await this.validateUserPassword(email, password);

    try {
      if (!isValidatedPassword) {
        throw new BadRequest(INVALID_CREDS);
      }

      const data = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthDate: user.birthDate,
      };

      const signature = 'MySuP3R_z3kr3t';
      const expiration = '6h';

      return jwt.sign({ data }, signature, { expiresIn: expiration });
    } catch (e) {
      return e;
    }
  }

  static async validateUserPassword(email, password) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new BadRequest(INVALID_CREDS);
      }

      const hash = await bcrypt.hash(password, user.salt);
      const isValidatedPassword = hash === user.password;

      return { isValidatedPassword, user };
    } catch (e) {
      return e;
    }
  }
}

module.exports = {
  AuthenticationService,
};
