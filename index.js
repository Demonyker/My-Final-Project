const port = 3000;
const { app } = require('./config')
const { userController } = require('./api')

userController
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
