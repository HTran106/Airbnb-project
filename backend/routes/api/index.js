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
    let bookings = await Booking.findAll()
    let array = []

    const filteredBookings = await bookings.filter(booking => {
      if (((checkIn <= booking.dataValues.startDate) && (checkOut >= booking.dataValues.startDate)) || ((checkIn >= booking.dataValues.startDate) && (booking.dataValues.endDate >= checkOut))) {
        return false
      } else {
        return true
      }
    })

    const spotIds = await filteredBookings.map(booking => booking.spotId)

    await spotIds.forEach(async spotId => {
      const spot = await Spot.findByPk(spotId)

      if (!array.includes(spot.dataValues)) {
        array.push(spot.dataValues)
      }
    })
    res.json(array)


    // console.log('THESE ARE THE RESULTS', results)
    // let spots = await Spot.findAll()
    // spots.filter(async spot => {

    //   const bookings = await Booking.findAll({
    //     where: { spotId: spot.id }
    //   })

    //   for (let i = 0; i < bookings.length; i++) {
    //     const booking = bookings[i]
    //     if (((checkIn <= booking.dataValues.startDate) && (checkOut >= booking.dataValues.startDate)) || ((checkIn >= booking.dataValues.startDate) && (booking.dataValues.endDate >= checkOut))) {
    //       console.log('THIS IS FALSE FALSE FALSE FALSE')
    //       return false
    //     } else {
    //       return true
    //     }
    //   }

    // })
    // res.json(spots)

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
