exports.up = function(knex, Promise) {
  return knex.schema.createTable('help', table => {
    table.increments();
    table.text('description').notNullable();
    table.enu('request', ['active', 'pending', 'completed']);
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('help');
};
