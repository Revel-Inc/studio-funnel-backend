const { promisify } = require('util')
const { sign, verify } = require('jsonwebtoken')
const signPromise = promisify(sign)
const verifyPromise = promisify(verify)
const secret = process.env.SECRET_KEY

class Token {
  //both token methods are async and return a promise

  static sign (id) {
    const sub = { id }
    const expiresIn = '30 days'
    return signPromise({ sub }, secret, { expioresIn })
  }

  static verifyAndExtractHeaderToken (header) {
    const token = header.authorization ? header.authorization.replace('Bearer ', '') : null
    return verifyPromise(token, secret) //on success returns the decoded token
  }
  
}

module.exports = token
