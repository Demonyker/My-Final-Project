const port = 3000;
const { app } = require('./config');
const { 
  authenticationRoter, 
  categoryRouter,
  noteRouter,
} = require('./api');
const { handleErrors } = require('./helpers');

app.use('/', authenticationRoter);
app.use('/', categoryRouter);
app.use('/', noteRouter);
app.use(handleErrors)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
