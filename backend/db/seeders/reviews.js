"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      {
        userId: 1,
        spotId: 2,
        review: "Place was nice, clean, and spacious",
        stars: 5
      },
      {
        userId: 1,
        spotId: 8,
        review: "There were troubles communicating with the host, but place is decent for the price",
        stars: 3
      },
      {
        userId: 1,
        spotId: 3,
        review: "My go to place when I need to host an event in the area",
        stars: 4
      },
      {
        userId: 1,
        spotId: 4,
        review: "BEAUTIFUL home! Very clean! Great location! We loved our family time at this home. Had everything we needed and more! My family loved the pool and game room!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 1,
        review: "Great house…. Amazing location. Deer in our side yard and surrounding area. Owners were quick to respond to any issues.",
        stars: 5
      },
      {
        userId: 2,
        spotId: 2,
        review: "Best views!! Definitely worth it!!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 3,
        review: "Thanks for an excellent stay!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 4,
        review: "Wonderful home and location. We enjoyed the orchards and parks nearby",
        stars: 1
      },
      {
        userId: 3,
        spotId: 1,
        review: "The house was amazing. It was so spacious and perfect for our extra large group! We can’t wait to come visit again!",
        stars: 5
      },
      {
        userId: 3,
        spotId: 2,
        review: "Great house…. Amazing location. Deer in our side yard and surrounding area. Owners were quick to respond to any issues.",
        stars: 5
      },
      {
        userId: 3,
        spotId: 3,
        review: "Had an amazing time at this location!",
        stars: 3
      },
      {
        userId: 3,
        spotId: 4,
        review: "Thanks for an excellent stay!",
        stars: 5
      },
      {
        userId: 3,
        spotId: 5,
        review: "There were cockroaches everywhere!",
        stars: 1
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', {
      userId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
