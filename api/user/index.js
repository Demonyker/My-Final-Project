const userRouter = require('express').Router();
const { UserController } = require('../../controllers');
const { isAuth, findUser } = require('../../helpers');

userRouter.get('/user', isAuth, findUser, UserController.getPersonalInfo);

module.exports = userRouter;
