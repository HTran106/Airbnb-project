"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reviews", [
      {
        userId: 1,
        spotId: 2,
        review: "The host was very friendly and helpful. The place was clean and comfortable. I would recommend this place to anyone looking for a place to stay in the area.",
        stars: 5
      },
      {
        userId: 1,
        spotId: 8,
        review: "Great place to getaway and relax. Just amazing. Thank you for your hospitality and for being such wonderful hosts.",
        stars: 3
      },
      {
        userId: 1,
        spotId: 3,
        review: "When we first stumbled upon this flat on Luxe, it seemed almost too good to be true. There must be a catch! But everything was as perfect as it seemed online.",
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
        review: "We had a very nice 3 day stay. The home is very picturesque and would accommodate a large event nicely. In addition, the view of the night sky is amazing!",
        stars: 5
      },
      {
        userId: 2,
        spotId: 3,
        review: "This place is just the way it looks on Luxe, beautiful. Check in was easy place was clean, great location. The Hostess was so nice and invited me to a bonfire. Thank you so much and I will come again.",
        stars: 5
      },
      {
        userId: 2,
        spotId: 4,
        review: "Absolutely breathtaking home! So well kept and great location right down the street from all the shopping! The host's communication was top notch and we throughly enjoyed ourselves will definitely visit again.",
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
        review: "It is truly a unique place to stay in. Location is in the center of everthing and you are surrounded by beaches.",
        stars: 3
      },
      {
        userId: 3,
        spotId: 4,
        review: "Excellent hosts that I couldn’t ask for anything better. They were supportive of my proposal to my girlfriend and even offered to take photos for us. Thank you guys!",
        stars: 5
      },
      {
        userId: 3,
        spotId: 5,
        review: "Great quiet place to stay at Sedona, it’s a must see!! The host had Great customer service. Willing to go the extra mile to keep us happy and comfortable.  Thank you!",
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
