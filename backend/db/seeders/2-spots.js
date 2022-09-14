'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '2688 Stanley Drive',
        city: 'Berkeley',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Spacious warehouse located in downtown Berkeley',
        description: "Let us host your next event!  Our spacious warehouse offers all the space needed for any event.",
        price: 6400
      },
      {
        ownerId: 3,
        address: '1454 Berkeley Drive',
        city: 'Berkeley',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 10000,
        name: 'Giant house for all your hosting needs',
        description: "Situated in the heart of berkeley, you can host any kind of event here.",
        price: 6800
      },
      {
        ownerId: 5,
        address: '2611 Awesome Dr',
        city: 'Berkeley',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Spacious warehouse in the heart of Berkeley',
        description: "Let us host your next event!  Our spacious warehouse offers all the space needed for any event.",
        price: 7800
      },
      {
        ownerId: 6,
        address: '9231 Technology Dr',
        city: 'San Jose',
        state: 'California',
        country: 'USA',
        lat: 37.3382082,
        lng: -121.8863286,
        squareFt: 18401,
        name: 'Giant Warehouse for your next event!',
        description: "We have nothing but space! you can host any kind of event including weddings!",
        price: 5600
      },
      {
        ownerId: 1,
        address: '3561 Milky Way',
        city: 'Berkeley',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 10154,
        name: '10br/8bths luxurious house',
        description: "One of the most beautiful spots in San Jose with over 10,000 square feet",
        price: 4800
      },
      {
        ownerId: 3,
        address: '8845 Wayne St',
        city: 'San Jose',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 12854,
        name: 'One in a million listing',
        description: "This house will be an eye opener!, no catfishing here, 100% real photos",
        price: 2150
      },
      {
        ownerId: 5,
        address: '1514 Finay Rd',
        city: 'San Jose',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 16411,
        name: 'Amazingly big warehouse',
        description: "Ready to setup your next event? Our place fits up to 5,000 people!",
        price: 3500
      },
      {
        ownerId: 6,
        address: '1542 Beachfront Way',
        city: 'Pacifica',
        state: 'California',
        country: 'USA',
        lat: 37.613827,
        lng: -122.486916,
        squareFt: 8164,
        name: 'Beautiful beachfront home',
        description: "This house is suitable for any kind of event including parties! Book with us today!",
        price: 6500
      },
      {
        ownerId: 1,
        address: '3254 Beach House Rd',
        city: 'Pacifica',
        state: 'California',
        country: 'USA',
        lat: 37.613827,
        lng: -122.486916,
        squareFt: 20154,
        name: 'Beachfront Villa in Pacifica',
        description: "Situated next to the beach, this house has amazing views of the pacific ocean and will leave you in awe.",
        price: 3400
      },
      {
        ownerId: 3,
        address: '1118 Woven St',
        city: 'San Francisco',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Building in San Francisco',
        description: "Let us host your next event!  Our spacious warehouse offers all the space needed for any event.",
        price: 8000
      },
      {
        ownerId: 5,
        address: '1187 21st St',
        city: 'San Francisco',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Spacious warehouse in the heart of San Francisco',
        description: "This is my description",
        price: 8500
      },
      {
        ownerId: 6,
        address: '9141 hwy 1',
        city: 'Big Sur',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Beautiful home in Big Sur',
        description: "This home in big sur is beautiful",
        price: 5500
      },
      {
        ownerId: 1,
        address: '12854 Point Lobos Dr',
        city: 'Big Sur',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Home on Point Lobos',
        description: "My home in point lobos",
        price: 4800
      },
      {
        ownerId: 3,
        address: '6513 Beach dr',
        city: 'San Diego',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Awesome house in San Diego',
        description: "Mesmerizing house",
        price: 5000
      },
      {
        ownerId: 5,
        address: '1941 Huntington Beach Way',
        city: 'Huntington Beach',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Spacious warehouse in Huntington Beach',
        description: "House is biggggggg",
        price: 12000
      },
      {
        ownerId: 6,
        address: '3910 Carmel Way',
        city: 'Carmel',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'One of a kind house in Carmel Valley',
        description: "Def a big house in carmel",
        price: 10000
      },
      {
        ownerId: 1,
        address: '9218 Coronado Island',
        city: 'Coronado',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Big house in Coronado',
        description: "Let us host your next event!  Our spacious warehouse offers all the space needed for any event.",
        price: 7800
      },
      {
        ownerId: 3,
        address: '5812 Laguna way',
        city: 'Laguna Beach',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Contemporary West Indies villa on private beach',
        description: "Ease into a lifestyle granting pure relaxation, unending adventure, lush landscapes, and a warm welcome island culture, all in this British West Indies-inspired manor.",
        price: 5850
      },
      {
        ownerId: 5,
        address: '8515 Hollywood Hills',
        city: 'Hollywood',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Event hosting in Hollywood',
        description: "Let us host your next event!  Our spacious warehouse offers all the space needed for any event.",
        price: 14500
      },
      {
        ownerId: 6,
        address: '4199 Oceanside Blvd',
        city: 'Oceanside',
        state: 'California',
        country: 'USA',
        lat: 37.871666,
        lng: -122.272781,
        squareFt: 20154,
        name: 'Moroccan-themed estate near Coachella grounds',
        description: "Let us host your next event!  Our spacious warehouse offers all the space needed for any event.",
        price: 1240
      },

    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', {
      ownerId: { [Op.in]: [1, 3, 5, 6] }
    }, {});
  }
};