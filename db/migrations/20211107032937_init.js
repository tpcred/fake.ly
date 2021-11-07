
exports.up = function(knex) {

    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('username').notNullable().unique();
        table.string('password');
    }).createTable('link', (table) => {
      table.increments('id');
      table.string('link');
      table.string('short_link');
      table.string('times_shortened');
      table.string('short_uses');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTable('users')
  .dropTable('link');;
};
