
exports.up = function(knex) {

    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('username').notNullable().unique();
        table.string('password');
    }).createTable('links', (table) => {
      table.increments('id');
      table.text('link');
      table.string('short_link').notNullable().unique();
      table.string('times_shortened');
      table.string('short_uses');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTable('users')
  .dropTable('links');;
};
