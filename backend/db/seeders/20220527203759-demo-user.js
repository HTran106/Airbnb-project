'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@user.io',
        password: bcrypt.hashSync('password'),
        isHost: true
      },
      {
        firstName: 'User 1',
        lastName: 'Test',
        email: 'user1@user.io',
        password: bcrypt.hashSync('password2'),
      },
      {
        firstName: 'User 2',
        lastName: 'Test',
        email: 'user2@user.io',
        password: bcrypt.hashSync('password3'),
        isHost: true
      },
      {
        firstName: 'User 3',
        lastName: 'Test',
        email: 'user3@user.io',
        password: bcrypt.hashSync('password4'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      firstName: { [Op.in]: ['Demo', 'User 1', 'User 2', 'User 3'] }
    }, {});
  }
};
