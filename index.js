const port = 3000;
const { app } = require('./config');
const {
  authenticationRoter,
  categoryRouter,
  noteRouter,
  userRouter,
} = require('./api');
const { handleErrors } = require('./helpers');

app.use('/api', authenticationRoter);
app.use('/api', categoryRouter);
app.use('/api', noteRouter);
app.use('/api', userRouter);
app.use(handleErrors);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
