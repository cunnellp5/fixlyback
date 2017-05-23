exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.text('username').unique().notNullable();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.text('phone').notNullable();
    table.text('address').nullable();
    table.enu('type', ['store', 'bicyclist']).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
