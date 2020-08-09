const { User } = require('../models')

class UserService {

	static async create(dto) {
		const {
			name,
			birthDate,
			email,
			phone,
			password,
		} = dto;

		try {
			const user = await User.create({
				name,
				birthDate,
				email,
				phone,
				password
			})

			return user;
		} catch(e) {
			return e;
		}
	}
}

module.exports = {
	UserService,
}