const { app } = require('../../config')
const { UserService } = require('../../services')
const userController = require('express').Router();

userController.post('/user', (req, res) => {
	console.log(UserService);

	// const user = await UserService.create(req.body)
	const user = UserService.create(req.body)
	// res.send(user);
	user.then(v => {
		res.send(v);
	})
})

module.exports = userController;


//   app.get('/users', (req, res) => {
//     const { id } = req.query;
//     const isHaveId = Boolean(id);
//     const sql = isHaveId ? `SELECT * FROM user WHERE id = ?` : `SELECT * FROM user`;
//     const type = isHaveId ? 'get' : 'all';
//     db[type](sql, [id], function(e, result) {
//       if(e) {
//         console.log(e)
//       }
//       console.log(result)
//       res.send(result)
//     })
//   })

//   app.put('/users', (req, res) => {
//     const { name, value, id, senderId } = req.body;
//     if (senderId !== id) {
//       res.send('No access')
//     } else {
//     db.run(`UPDATE user SET name = ? WHERE id = ?`, [value, id], function(e) {
//       if (e) {
//         console.log(e)
//       }
//     })
//     res.send('user updated')}
//   })