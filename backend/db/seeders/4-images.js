'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Images', [
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/0.webp',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/1.jpeg',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/2.jpeg',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/3.webp',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/4.jpeg',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/5.webp',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/6.jpeg',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/7.webp',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house1/8.webp',
        spotId: 1,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house2/0.webp',
        spotId: 2,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house2/1.webp',
        spotId: 2,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house2/3.webp',
        spotId: 2,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house2/4.webp',
        spotId: 2,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house2/5.webp',
        spotId: 2,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house3/0.webp',
        spotId: 3,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house3/1.webp',
        spotId: 3,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house3/2.webp',
        spotId: 3,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house3/3.webp',
        spotId: 3,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house3/4.webp',
        spotId: 3,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house3/5.webp',
        spotId: 3,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house3/6.webp',
        spotId: 3,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house3/7.webp',
        spotId: 3,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/0.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/1.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/2.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/3.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/4.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/5.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/6.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/7.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/8.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house4/9.webp',
        spotId: 4,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/0.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/1.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/2.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/3.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/4.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/5.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/6.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/7.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/8.webp',
        spotId: 5,
        reviewId: null
      },
      {
        imageType: 'Spot',
        url: 'https://airbnb-files.s3.us-west-1.amazonaws.com/house-photos/Airbnb-pics/house5/9.webp',
        spotId: 5,
        reviewId: null
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
