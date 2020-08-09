const { app } = require('../../config')
const { UserService } = require('../../services')

app.post('/user', (req, res) => {
	console.log(UserService);

	const user = UserService.create(req.body)
	user.then(v => {
		res.send(v);
	})
})

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