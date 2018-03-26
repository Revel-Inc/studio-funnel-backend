exports.seed = function(knex, Promise) {
  //Adds users to db
  return knex('projects').insert([
    { id: 1, dynamics_id: '124abc', name: 'HR Career Connections', description: 'Building a portal of the future to allow early Microsoft FTEs to connect with mentors across the globe', logo: 'Microsoft', active: true },
  ])
  .then(() => {
    return knex.raw('SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));')
  })
}
