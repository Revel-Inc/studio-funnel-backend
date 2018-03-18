exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments()
    table.string('dynamics_id')
    table.string('name').notNullable().defaultTo('')
    table.text('description').defaultTo('')
    table.string('logo').notNullable().defaultTo('Revel')
    table.string('client').notNullable().defaultTo('')
    table.date('start_date')
    table.date('end_date')
    table.string('work_type').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
