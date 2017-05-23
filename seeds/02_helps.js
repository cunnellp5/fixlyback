exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM help; ALTER SEQUENCE help_id_seq RESTART WITH 1')
      .then(() => {
        const help = [{
          description: 'bike chain broken',
          request: 'active',
          user_id: 1
        }, {
          description: 'bike tire popped',
          request: 'completed',
          user_id: 1
        }];
        return knex('help').insert(help);
      });
};
