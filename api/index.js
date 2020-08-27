const authenticationRoter = require('./authentication');
const categoryRouter = require('./categories');
const noteRouter = require('./note');
const userRouter = require('./user');

module.exports = {
    authenticationRoter,
    categoryRouter,
    noteRouter,
    userRouter,
}