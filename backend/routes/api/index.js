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

  if (location && checkIn && checkOut) {
    const spots = await Spot.findAll({
      where: { city: { [Op.like]: `%${location}%` } } || { state: { [Op.like]: `%${location}%` } },
      include: {
        model: Booking,
        where: {
          startDate: (checkIn && checkOut) ? { [Op.notBetween]: [checkIn, checkOut] } : null,
          endDate: (checkIn && checkOut) ? { [Op.notBetween]: [checkIn, checkOut] } : null
        }
      }
    })
    res.json(spots)
  }

  if (checkIn && checkOut) {
    const spots = await Spot.findAll({
      include: {
        model: Booking,
        where: {
          startDate: (checkIn && checkOut) ? { [Op.notBetween]: [checkIn, checkOut] } : null,
          endDate: (checkIn && checkOut) ? { [Op.notBetween]: [checkIn, checkOut] } : null
        }
      }
    })
    res.json(spots)
  }

  if (location) {
    const spots = await Spot.findAll({
      where: { city: { [Op.like]: `%${location}%` } } || { state: { [Op.like]: `%${location}%` } }
    })
    return res.json(spots)
  }
})

module.exports = router;
