const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const myRouter = require('./my.js')
const reviewsRouter = require('./reviews.js')
const bookingsRouter = require('./bookings.js')
const imagesRouter = require('./images.js')
const { Spot, Booking } = require('../../db/models');
const { Op } = require('sequelize');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter)
router.use('/my', myRouter)
router.use('/reviews', reviewsRouter)
router.use('/bookings', bookingsRouter)
router.use('/images', imagesRouter)

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

//search route
router.get('/search', async (req, res) => {
  let { location, checkIn, checkOut } = req.query;
  checkIn = new Date(checkIn)
  checkOut = new Date(checkOut)

  if (location) {
    const spots = await Spot.findAll({
      where: { city: { [Op.like]: `%${location}%` } } || { state: { [Op.like]: `%${location}%` } }
    })
    return res.json(spots)
  }

  if (checkIn && checkOut) {
    let spots = await Spot.findAll()
    spots.filter(async spot => {
      const bookings = await Booking.findAll({
        where: { spotId: spot.id }
      })
      console.log("THIS RIGHT HURRRRRRR =>>>>>>>>", bookings[0])
      for (let i = 0; i < bookings.lenght; i++) {
        const booking = bookings[i].Booking
        if ((checkIn <= booking.dataValues.startDate && checkOut >= booking.dataValues.startDate) || (checkIn >= booking.dataValues.startDate && booking.dataValues.endDate >= checkIn)) {
          return false
        }
        return true
      }
      // bookings.forEach(booking => {
      //   if ((checkIn <= booking.dataValues.startDate && checkOut >= booking.dataValues.startDate) || (checkIn >= booking.dataValues.startDate && booking.dataValues.endDate >= checkIn)) {
      //     return false
      //   }
      // })
      res.json(spots)

    })

    // exclude: {
    //   model: Booking,
    //   where: {
    //     startDate: checkIn >= Booking.startDate && checkIn <= Booking.endDate,
    //     endDate: checkOut >= Booking.startDate && checkOut <= Booking.endDate
    //   }
    // }

    // const bookings = await Booking.findAll({
    //   where: {
    //     startDate: startDate <= checkIn,
    //     endDate: endDate >= checkOut
    //   }
    // })
  }
})

module.exports = router;
