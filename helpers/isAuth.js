const jwt = require('express-jwt');

const getTokenFromHeader = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
}

const isAuth = jwt({
  secret: 'MySuP3R_z3kr3t', // Тут должно быть то же самое, что использовалось при подписывании JWT
  userProperty: 'token', // Здесь следующее промежуточное ПО сможет найти то, что было закодировано в services/auth:generateToken -> 'req.token'
  algorithms: ['HS256'],
  getToken: getTokenFromHeader, // Функция для получения токена аутентификации из запроса
})

module.exports = isAuth;
