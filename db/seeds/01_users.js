exports.seed = function(knex, Promise) {
  //Adds users to db
  return knex('users').insert([
    { id: 1, fname: 'Ted', lname: 'Hoot', key_role: 'Visual Design', admin: false, active: true },
    { id: 2, fname: 'Marc', lname: 'Perez', key_role: 'UX', admin: false, active: true },
    { id: 3, fname: 'Joe', lname: 'Ehrbar', key_role: 'Copy Writer', admin: false, active: true },
    { id: 4, fname: 'John', lname: 'Hooper', key_role: 'Production Design', admin: false, active: true },
    { id: 5, fname: 'Matty', lname: 'Mcbride', key_role: 'UX', admin: false, active: true },
    { id: 6, fname: 'James', lname: 'Watson', key_role: 'Visual Design', admin: false, active: true },
    { id: 7, fname: 'Adam', lname: 'Fisher', key_role: 'Design Strategy', admin: true, active: true },
    { id: 7, fname: 'Stanley', lname: 'Nicholl', key_role: 'Executive Production', admin: true, active: true },
  ])
  .then(() => {
    return knex.raw('SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));')
  })
}
