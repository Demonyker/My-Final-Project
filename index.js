const port = 3000;
const { app } = require('./config')
const { userController, authenticationController } = require('./api')

app.use('/', userController);
app.use('/', authenticationController);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
