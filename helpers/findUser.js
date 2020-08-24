const { User } = require('../models')
const findUser = (req, res, next) => {
  const decodedTokenData = req.tokenData;
  const userRecord = await User.findByPk(decodedTokenData.id)
 
  req.user = userRecord;
 
  if(!userRecord) {
    return res.status(401).end('User not found')
  } else {
    return next();
 }
}

module.exports = {
  findUser,
}