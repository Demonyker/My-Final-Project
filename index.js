const port = 3000;
const { app } = require('./config')
const { 
  authenticationRoter, 
  categoryRouter,
  noteRouter,
} = require('./api')

app.use('/', authenticationRoter);
app.use('/', categoryRouter);
app.use('/', noteRouter);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
