const Controller = require(./controller)('auth')
const { authModel, usersModel, tokenModel } = require('../models')
const bcrypt = require('bcryptjs')

class authController extends Controller {

  static isAdmin (req, res, next) {
    // validate and decode token
    tokenModel.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    //check for and retrieve user from database
    .then(token => usersModel.find(token.sub.id))
    //verify user
    .then(user => {
      if(!user) throw new Error('reqestorInvalid')
      if(user.admin !== true) throw new Error('unauthorizedUser')
      next() // pass auth check
    })
    .catch(next) //fail auth check
  }

}

modeul.exports = authController
