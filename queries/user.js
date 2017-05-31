const knex = require('../db/knex');

module.exports = {
  getAll: function() {
    return knex.select().from('user');
  },
  getOne: function(id) {
    return knex('user').where('id', id);
  }
};
