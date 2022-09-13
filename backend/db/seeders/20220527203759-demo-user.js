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
        firstName: 'James',
        lastName: 'Tan',
        email: 'user1@user.io',
        password: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Anne',
        lastName: 'Collins',
        email: 'user2@user.io',
        password: bcrypt.hashSync('password'),
        isHost: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Nguyen',
        email: 'user3@user.io',
        password: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Abby',
        lastName: 'Hanes',
        email: 'user4@user.io',
        password: bcrypt.hashSync('password'),
        isHost: true
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'user5@user.io',
        password: bcrypt.hashSync('password'),
        isHost: true
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'user6@user.io',
        password: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Jennifer',
        lastName: 'Taylor',
        email: 'user7@user.io',
        password: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Scarlet',
        lastName: 'Chester',
        email: 'user8@user.io',
        password: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Leah',
        lastName: 'Flay',
        email: 'user9@user.io',
        password: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      firstName: { [Op.in]: ['Demo', 'James', 'Anne', 'Kevin', 'Abby', 'John', 'Jane', 'Jennifer', 'Scarlet', 'Leah'] }
    }, {});
  }
};
