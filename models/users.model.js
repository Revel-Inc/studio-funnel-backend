const db = require('../db/knex')
const Model = require('./model')('users')

class usersModel extends Model {
  static getUserIdByEmail (email) {
    return db('users')
    .select('id', 'fname')
    .where({ email })
    .first()
  }
}

module.exports = usersModel
