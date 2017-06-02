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
  getOneActive: function(id) {
    return knex('help').where('request', 'active').andWhere('id', id);
  },
  getAllcompleted: function() {
    return knex('help').where('request', 'completed');
  },
  getOne: function(id) {
    return knex('help').where('id', id);
  },
  editOne: function(id, request) {
    return knex('help').where('id', id).update({request: request});
  }
};
