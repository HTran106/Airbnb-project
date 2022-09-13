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
        profileImage: 'https://media.istockphoto.com/photos/why-not-use-this-copyspace-its-free-picture-id181086342?k=6&m=181086342&s=612x612&w=0&h=ZxB6w_tmE8aN2Gkenus_rpwonnmh_bUtTXVye9o9u3Q=',
        isHost: true
      },
      {
        firstName: 'James',
        lastName: 'Tan',
        email: 'user1@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://pngimg.com/uploads/businessman/businessman_PNG6566.png'
      },
      {
        firstName: 'Anne',
        lastName: 'Collins',
        email: 'user2@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://tse4.mm.bing.net/th?id=OIP.AMaupve6Vnm20qSi5llgjQHaFZ&pid=Api&P=0',
        isHost: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Nguyen',
        email: 'user3@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://www.hairdohairstyle.com/wp-content/uploads/2018/01/4-Blonde-Short-Side-Part-Haistyle.jpg'
      },
      {
        firstName: 'Abby',
        lastName: 'Hanes',
        email: 'user4@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://media.istockphoto.com/photos/business-woman-traveling-by-plane-picture-id513061342?k=6&m=513061342&s=170667a&w=0&h=vN0mENrNuw5UBIrSOlP4k-IXcWSB4rCDeSH1V7N0yoc=',
        isHost: true
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'user5@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://ae01.alicdn.com/kf/HTB1i8S2bmCWBuNjy0Fhq6z6EVXaI/2018-High-Quality-Business-Men-s-Professional-Suits-Men-Women-Blazer-Suits-Hotel-Work-Clothes.jpg_640x640.jpg',
        isHost: true
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'user6@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://tse3.mm.bing.net/th?id=OIP.oAq8CdeMq5A7fOO4ITTv6AHaE8&pid=Api&P=0'
      },
      {
        firstName: 'Jennifer',
        lastName: 'Taylor',
        email: 'user7@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/rZJIMvhmliwmde8a6/videoblocks-business-woman-with-digital-tablet-on-blurred-background-young-pretty-woman-speaker-welcoming-audience-with-spreading-hands_bk5lh9r-p_thumbnail-1080_01.png'
      },
      {
        firstName: 'Scarlet',
        lastName: 'Chester',
        email: 'user8@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://atlantablackstar.com/wp-content/uploads/2015/02/Black-businesswoman.jpg'
      },
      {
        firstName: 'Leah',
        lastName: 'Flay',
        email: 'user9@user.io',
        password: bcrypt.hashSync('password'),
        profileImage: 'https://media.istockphoto.com/photos/african-female-business-executive-in-office-picture-id515011751'
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
