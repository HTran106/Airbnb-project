'use strict';



module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '2688 Stanley Drive',
        city: 'Santa Cruz',
        state: 'California',
        country: 'USA',
        lat: 37.050096,
        lng: -121.9905908,
        squareFt: 20154,
        name: 'Rose Cottage',
        description: "Located in Santa Cruz in the Tarentaise Valley near Grenoble, Rose Cottage is a luxury home set to provide a dream alpine vacation. This luxury villa is located within Les Trois Vallées, the largest linked ski area in the world. While this area of Santa Cruz is great for winter lovers, the warmer months also bring plenty of opportunities for fun including spas, golfing, cycling and watersports.",
        price: 6400
      },
      {
        ownerId: 3,
        address: '1454 Berkeley Drive',
        city: 'San Jose',
        state: 'California',
        country: 'USA',
        lat: 36.961666,
        lng: -122.022781,
        squareFt: 10000,
        name: 'The Beach House',
        description: "Enjoy the elegance of a by-gone era while staying in this Art Deco home. Beautifully decorated and featuring a sweeping staircase, original stained-glass windows, period furniture, and a stunningly unique black-and-white tiled bathroom.",
        price: 6800
      },
      {
        ownerId: 5,
        address: '2611 Awesome Dr',
        city: 'Monterey',
        state: 'California',
        country: 'USA',
        lat: 36.591666,
        lng: -121.942781,
        squareFt: 20154,
        name: 'Meadow View',
        description: "Retreat to the deck of this sustainable getaway and gaze at the twinkling constellations under a cosy tartan blanket. AirShip 2 is an iconic, insulated aluminium pod designed by Roderick James with views of the Sound of Mull from dragonfly windows. Airship002 is comfortable, quirky and cool. It does not pretend to be a five-star hotel. The reviews tell the story.",
        price: 7800
      },
      {
        ownerId: 6,
        address: '9231 Technology Dr',
        city: 'Oceanside',
        state: 'California',
        country: 'USA',
        lat: 33.195911,
        lng: -117.379517,
        squareFt: 18401,
        name: 'Woodland Retreat',
        description: "Take an early morning stroll and enjoy the Trevi Fountain without the tourists. Wander around the historic streets while the city sleeps, then head back for a morning coffee at this urban-chic studio with a suspended loft bedroom.",
        price: 5600
      },
      {
        ownerId: 1,
        address: '3561 Milky Way',
        city: 'San Diego',
        state: 'California',
        country: 'USA',
        lat: 32.728073,
        lng: -117.167749,
        squareFt: 10154,
        name: 'The Willows',
        description: "Unwind at this stunning French Provencal beachside cottage. The house was lovingly built with stone floors, high-beamed ceilings, and antique details for a luxurious yet charming feel. Enjoy the sea and mountain views from the pool and lush garden. The house is located in the enclave of Llandudno Beach, a locals-only spot with unspoilt, fine white sand and curling surfing waves. Although shops and restaurants are only a five-minute drive away, the area feels peaceful and secluded.",
        price: 4800
      },
      {
        ownerId: 3,
        address: '8845 Wayne St',
        city: 'San Francisco',
        state: 'California',
        country: 'USA',
        lat: 37.321666,
        lng: -121.882781,
        squareFt: 12854,
        name: 'Paradise Palms',
        description: "Pretend you are lost in a magical forest as you perch on a log or curl up in the swinging chair. Soak in the tub, then fall asleep in a heavenly bedroom with cloud-painted walls and twinkling lights. And when you wake up, the espresso machine awaits.",
        price: 2150
      },
      {
        ownerId: 5,
        address: '1514 Finay Rd',
        city: 'San Jose',
        state: 'California',
        country: 'USA',
        lat: 37.401666,
        lng: -121.782781,
        squareFt: 16411,
        name: 'Beach Tree Cottage',
        description: "Beach Tree Cottage is one of San Jose’s most historic and architecturally eclectic neighborhood. You’ll be close to everything in (CN) but far enough to enjoy a relaxing trip. We are both born and raised here so we know all the good spots like the delicious pancakes, vanilla infused orange juice and freshly brewed coffee, down the street at one of our favorite restaurants",
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
        name: 'Bulverton House',
        description: "Enjoy a comfy retreat in this 100 year old home in Pacifica. Cook in a retro kitchen and dine in surrounded by the original built-in corner shelfs. Take in all of Pacifica as you’ll be only minutes away from everything!",
        price: 6500
      },
      {
        ownerId: 1,
        address: '3254 Beach House Rd',
        city: 'Pacifica',
        state: 'California',
        country: 'USA',
        lat: 37.563827,
        lng: -122.506916,
        squareFt: 20154,
        name: 'Stonehurst',
        description: "A lovely space to unwind and relax after a busy day whether it is work or play. Awake refreshed and ready for a day exploring the city via this clean, sunny apartment with impressive views. Head out and wander through the nearby farmers’ market and pick up local ingredients to later craft a meal in the fully stocked kitchen.",
        price: 3400
      },
      {
        ownerId: 3,
        address: '1118 Woven St',
        city: 'San Francisco',
        state: 'California',
        country: 'USA',
        lat: 37.771666,
        lng: -122.502781,
        squareFt: 20154,
        name: 'Highland House',
        description: "This modern, sun-drenched apartment offers a tranquil residential vibe alongside quick, easy access to the downtown areas. Admire the crisp, contemporary decor of the open-plan living space and take in the peaceful surroundings from the cute terrace.",
        price: 8000
      },
      {
        ownerId: 5,
        address: '1187 21st St',
        city: 'San Francisco',
        state: 'California',
        country: 'USA',
        lat: 37.801666,
        lng: -122.402781,
        squareFt: 20154,
        name: 'Highclere Castle',
        description: "In a charming neighborhood with wonderful restaurants and shops, and sights within walking distance, as well as the city center, all within 5 minutes. I love the atmosphere in my neighborhood, you will find local and specialty stores (organic food, vintage clothes, vinyl records, wineries, vintage decor), mix of cultures, the architectural style of the old city, good restaurants, terraces in summer , cultural centers.",
        price: 8500
      },
      {
        ownerId: 6,
        address: '9141 hwy 1',
        city: 'Big Sur',
        state: 'California',
        country: 'USA',
        lat: 36.241666,
        lng: -121.812781,
        squareFt: 20154,
        name: 'Orchard House',
        description: "Situated on one of the city’s most beautiful streets, in one of the world’s most beautiful cities, this two-bedroom apartment enjoys an extremely prestigious and convenient location in bustling downtown Big Sur.",
        price: 5500
      },
      {
        ownerId: 1,
        address: '12854 Point Lobos Dr',
        city: 'Big Sur',
        state: 'California',
        country: 'USA',
        lat: 36.221666,
        lng: -121.752781,
        squareFt: 20154,
        name: 'Hillcrest Cottage',
        description: "Whatever brings you to Big Sur – wish to explore the city, just have a good time and enjoy nightlife, cultural events, sporting events, visiting university, business, or any other reason, the location of the house and the way it is suited makes Hillcrest Cottage your perfect choice! ",
        price: 4800
      },
      {
        ownerId: 3,
        address: '6513 Beach dr',
        city: 'San Diego',
        state: 'California',
        country: 'USA',
        lat: 32.831666,
        lng: -117.262781,
        squareFt: 20154,
        name: 'Haven House',
        description: "Feel Like Home in this spacious and stylish Apartment with a view at the Cathedral, located in the pedestrian area of the City Center Old Town. You get to feel the “Genius Local” spirit of the town, being surrounded by the main city attractions. Whether you visit San Diego for sightseeing or business, find retreat in this Apartment",
        price: 5000
      },
      {
        ownerId: 5,
        address: '1941 Huntington Beach Way',
        city: 'Huntington Beach',
        state: 'California',
        country: 'USA',
        lat: 33.671666,
        lng: -118.022781,
        squareFt: 20154,
        name: 'The Palms Villa',
        description: " Your second home is located directly in the center of Huntington Beach, so if you decided to go to the castle, monuments, gardens or best pubs, discos and famous restaurants, you will be there in few minutes by feet so forget about buses, cabs, trains and etc.",
        price: 12000
      },
      {
        ownerId: 6,
        address: '3910 Carmel Way',
        city: 'Carmel',
        state: 'California',
        country: 'USA',
        lat: 36.541666,
        lng: -121.922781,
        squareFt: 20154,
        name: 'Crystal Cottage',
        description: "The flat is located directly on Carmel Way (the shopping street) – one of the central streets of Carmel, with houses from 18th century. There are various restaurants, cafés, and shops along the whole street. The pedestrian historical centre is just few minutes away by foot.",
        price: 10000
      },
      {
        ownerId: 1,
        address: '9218 Coronado Island',
        city: 'Coronado',
        state: 'California',
        country: 'USA',
        lat: 32.691666,
        lng: -117.172781,
        squareFt: 20154,
        name: 'Jessamine Cottage',
        description: "Let us host your next event!  Our spacious warehouse offers all the space needed for any event.",
        price: 7800
      },
      {
        ownerId: 3,
        address: '5812 Laguna way',
        city: 'Laguna Beach',
        state: 'California',
        country: 'USA',
        lat: 33.541666,
        lng: -117.782781,
        squareFt: 20154,
        name: 'Chateau de la Mer',
        description: "Ease into a lifestyle granting pure relaxation, unending adventure, lush landscapes, and a warm welcome island culture, all in this British West Indies-inspired manor.",
        price: 5850
      },
      {
        ownerId: 5,
        address: '8515 Hollywood Hills',
        city: 'Hollywood',
        state: 'California',
        country: 'USA',
        lat: 34.101666,
        lng: -118.322781,
        squareFt: 20154,
        name: 'Villa el Sol',
        description: "Whatever brings you to Hollywood – wish to explore the city, just have a good time and enjoy nightlife, cultural events, sporting events, visiting university, business, or any other reason, the location of the apartment and the way it is suited makes Villa El Sol your perfect choice! ",
        price: 14500
      },
      {
        ownerId: 6,
        address: '4199 Oceanside Blvd',
        city: 'Oceanside',
        state: 'California',
        country: 'USA',
        lat: 33.171666,
        lng: -117.272781,
        squareFt: 20154,
        name: 'Moroccan-themed estate',
        description: "We know how important it is to feel comfortable & relaxed when you arrive back from a long day of sightseeing. This idea is what inspired us to build our apartment studio and provide everyone that stays a place to recharge, relax and enjoy",
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
