exports.seed = function(knex, Promise) {
  //Deletes all existing entries
  return knex('auth').del()
    .then(() => knex('projects_users').del())
    .then(() => knex('projects').del())
    .then(() => knex('users').del())
}
