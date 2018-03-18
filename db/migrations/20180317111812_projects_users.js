
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_users', (table) => {
    table.increments()
    table.integer('project_id')
    table.foreign('project_id').references('projects.id').onDelete('CASCADE')
    table.integer('user_id')
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.boolean('is_lead').notNullable('').defaultTo(false)
    table.integer('hours').notNullable().defaultTo(0)
    table.integer('hours_remaining').notNullable().defaultTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects_users')
};
