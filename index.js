const port = 3000;
const { app } = require('./config')
const { 
  userController, 
  authenticationController, 
  categoryController 
} = require('./api')

app.use('/', userController);
app.use('/', authenticationController);
app.use('/', categoryController)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
