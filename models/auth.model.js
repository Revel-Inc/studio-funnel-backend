const db = require('../db/knex')
const Model = require('../model')('auth')

class authModel extends Model {

  static find (userId) {
    return db('auth')
    .where({ user_id: userId})
    .first()
  }

  static createAdmin (id, password) {
    return db('auth')
    .insert({ user_id: id, hashed_password: password })
    .returning('*')
  }

}

module.exports = authModel
