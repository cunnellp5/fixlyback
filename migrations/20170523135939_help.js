exports.up = function(knex, Promise) {
  return knex.schema.createTable('help', table => {
    table.increments();
    table.text('description').notNullable();
    table.string('day');
    table.string('time');
    table.float('lat', 6);
    table.float('lng', 6);
    table.enu('request', ['active', 'pending', 'completed']);
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('help');
};
