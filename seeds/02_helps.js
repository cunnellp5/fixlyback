const moment = require('moment');

exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM help; ALTER SEQUENCE help_id_seq RESTART WITH 1')
      .then(() => {
        const help = [{
          description: 'bike chain broken',
          request: 'active',
          lat: 39.7392,
          lng: -104.9903,
          time: moment(Date.now()).format('h:mm:ss a'),
          day: moment(Date.now()).format('MMMM Do YYYY'),
          user_id: 1
        }, {
          description: 'bike tire popped',
          request: 'completed',
          lat: 39.7392,
          lng: -104.9903,
          time: moment(Date.now()).format('h:mm:ss a'),
          day: moment(Date.now()).format('MMMM Do YYYY'),
          user_id: 1
        }];
        return knex('help').insert(help);
      });
};
