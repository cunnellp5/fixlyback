const knex = require('../db/knex');

module.exports = {
  getAll: function() {
    return knex.select().from('user')
  }
};
