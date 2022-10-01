'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Bookmarks", [
      {
        spotId: 2,
        userId: 1,
      },
      {
        spotId: 3,
        userId: 1,
      },
      {
        spotId: 4,
        userId: 1,
      },
      {
        spotId: 5,
        userId: 2,
      },
      {
        spotId: 6,
        userId: 2,
      },
      {
        spotId: 7,
        userId: 2,
      },
      {
        spotId: 8,
        userId: 3,
      },
      {
        spotId: 9,
        userId: 3,
      },
      {
        spotId: 10,
        userId: 1,
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
