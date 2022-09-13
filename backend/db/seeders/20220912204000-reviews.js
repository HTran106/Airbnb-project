'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        spotId: 2,
        review: 'Place was nice, clean, and spacious',
        stars: 5
      },
      {
        userId: 1,
        spotId: 8,
        review: 'There were troubles communicating with the host, but place is decent for the price',
        stars: 3
      },
      {
        userId: 1,
        spotId: 3,
        review: 'My go to place when I need to host an event in the area',
        stars: 4
      },
      {
        userId: 1,
        spotId: 4,
        review: "Take my money",
        stars: 5
      },
      {
        userId: 2,
        spotId: 3,
        review: 'Place was awesome and host responded quickly when we had questions',
        stars: 5
      },
      {
        userId: 2,
        spotId: 9,
        review: 'Some communication problems with the host but the place was very beautiful.',
        stars: 3
      },
      {
        userId: 2,
        spotId: 1,
        review: 'Really exceeded my expectations!',
        stars: 5
      },
      {
        userId: 2,
        spotId: 5,
        review: 'I would not recommend this place. The check in process was extremely confusing and not guest-friendly. sorry. ',
        stars: 1
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
