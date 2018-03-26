
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('fname').notNullable().defaultTo('')
    table.string('lname').notNullable().defaultTo('')
    table.string('key_role').notNullabe().defaulTo('')
    table.boolean('admin').notNullable().defaultTo(false)
    table.boolean('active').notNullabe().defaulTo(true)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
