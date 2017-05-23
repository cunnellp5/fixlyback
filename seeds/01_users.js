const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.seed = (knex, Promise) => {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1')
      .then(() => {
        const users = [
          {
            username: process.env.USERNAME1,
            email: process.env.EMAIL1,
            password: bcrypt.hashSync(process.env.SECRET_PASSWORD1, 10),
            phone: process.env.PHONE1,
            address: process.env.ADDRESS1,
            type: 'bicyclist'
          },
          {
            username: process.env.USERNAME2,
            email: process.env.EMAIL2,
            password: bcrypt.hashSync(process.env.SECRET_PASSWORD2, 10),
            phone: process.env.PHONE2,
            address: process.env.ADDRESS2,
            type: 'store'
          },
        ];
        return knex('user').insert(users);
      });
};
