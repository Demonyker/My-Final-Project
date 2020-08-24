const { User } = require('../models');
const bcrypt = require('bcrypt');

class UserService {

	static async create(dto) {
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
}

module.exports = {
	UserService,
}