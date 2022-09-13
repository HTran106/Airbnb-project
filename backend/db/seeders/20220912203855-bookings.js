'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        userId: 1,
        spotId: 1,
        startDate: '2022-05-18 15:23:29',
        endDate: '2022-05-20 15:23:29'
      },
      {
        userId: 1,
        spotId: 2,
        startDate: '2022-06-18 12:15:22',
        endDate: '2022-06-20 12:15:22'
      },
      {
        userId: 1,
        spotId: 3,
        startDate: '2022-11-01 12:15:22',
        endDate: '2022-11-02 12:15:22'
      },
      {
        userId: 1,
        spotId: 4,
        startDate: '2022-11-03 12:15:22',
        endDate: '2022-11-05 12:15:22'
      },
      {
        userId: 2,
        spotId: 6,
        startDate: '2022-11-06 12:15:22',
        endDate: '2022-11-07 12:15:22'
      },
      {
        userId: 2,
        spotId: 4,
        startDate: '2022-11-08 12:15:22',
        endDate: '2022-11-10 12:15:22'
      },
      {
        userId: 2,
        spotId: 9,
        startDate: '2022-11-12 12:15:22',
        endDate: '2022-11-13 12:15:22'
      },
      {
        userId: 2,
        spotId: 1,
        startDate: '2022-11-15 12:15:22',
        endDate: '2022-11-20 12:15:22'
      },
      {
        userId: 3,
        spotId: 8,
        startDate: '2022-11-21 12:15:22',
        endDate: '2022-11-23 12:15:22'
      },
      {
        userId: 3,
        spotId: 6,
        startDate: '2022-11-24 12:15:22',
        endDate: '2022-11-26 12:15:22'
      },
      {
        userId: 3,
        spotId: 4,
        startDate: '2022-11-27 12:15:22',
        endDate: '2022-11-29 12:15:22'
      },
      {
        userId: 3,
        spotId: 2,
        startDate: '2022-12-10 12:15:22',
        endDate: '2022-12-14 12:15:22'
      },
      {
        userId: 4,
        spotId: 3,
        startDate: '2022-12-15 12:15:22',
        endDate: '2022-12-20 12:15:22'
      },
      {
        userId: 4,
        spotId: 7,
        startDate: '2022-12-22 12:15:22',
        endDate: '2022-12-23 12:15:22'
      },
      {
        userId: 4,
        spotId: 5,
        startDate: '2022-12-24 12:15:22',
        endDate: '2022-12-25 12:15:22'
      },
      {
        userId: 4,
        spotId: 2,
        startDate: '2022-12-26 12:15:22',
        endDate: '2022-12-27 12:15:22'
      },
      {
        userId: 5,
        spotId: 1,
        startDate: '2022-12-28 12:15:22',
        endDate: '2022-12-29 12:15:22'
      },
      {
        userId: 5,
        spotId: 8,
        startDate: '2022-12-29 12:15:22',
        endDate: '2022-12-30 12:15:22'
      },
      {
        userId: 5,
        spotId: 9,
        startDate: '2023-01-21 12:15:22',
        endDate: '2023-01-23 12:15:22'
      },
      {
        userId: 5,
        spotId: 10,
        startDate: '2023-01-24 12:15:22',
        endDate: '2023-01-25 12:15:22'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      userId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
    }, {});
  }
};
