const { User } = require('../models')
const findUser = async (req, res, next) => {
  try {
    const decodedTokenData = req.token.data;
    const userRecord = await User.findByPk(decodedTokenData.id)
   
    req.user = userRecord;
   
    if(!userRecord) {
      return res.status(401).end('User not found')
    } else {
      return next();
   }
  } catch(e) {
    return res.send(e.message)
  }
}

module.exports = {
  findUser,
}