const knex = require('../db/knex');

module.exports = {
  getAll: function() {
    return knex.select().from('help');
  },
  getAllFromUser: function(id) {
    return knex('help').where('user_id', id);
  },
  getAllActive: function() {
    return knex('help').where('request', 'active');
  },
  getAllpending: function() {
    return knex('help').where('request', 'pending');
  },
  getAllcompleted: function() {
    return knex('help').where('request', 'completed');
  }
};
