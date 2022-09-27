const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const myRouter = require('./my.js')
const reviewsRouter = require('./reviews.js')
const bookingsRouter = require('./bookings.js')
const imagesRouter = require('./images.js')
const { Spot, Booking, Image } = require('../../db/models');
const { Op } = require('sequelize');
const { environment } = require('../../config/index.js');
const isProduction = environment === 'production'

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
  if (checkIn && checkOut) {
    checkIn = new Date(checkIn)
    checkOut = new Date(checkOut)
  }

  console.log(isProduction)

  let where = {}

  if (location) {
    if (isProduction) {
      where.city = { [Op.iLike]: `%${location}%` }
      where.state = { [Op.iLike]: `%${location}%` }
    } else {
      where.city = { [Op.like]: `%${location}%` }
      where.state = { [Op.like]: `%${location}%` }
    }
  }

  console.log(where.city)
  console.log(where.state)

  if (location && checkIn && checkOut) {
    const spots = await Spot.findAll({
      where: { city: where.city } || { state: where.state },
      include: [
        {
          model: Booking,
          where: {
            startDate: (checkIn && checkOut) ? { [Op.notBetween]: [checkIn, checkOut] } : null,
            endDate: (checkIn && checkOut) ? { [Op.notBetween]: [checkIn, checkOut] } : null
          }
        },
        {
          model: Image,
          attributes: ['url']
        }
      ]
    })
    res.json(spots)
  } else if (checkIn && checkOut) {
    const spots = await Spot.findAll({
      include: [
        {
          model: Booking,
          where: {
            startDate: (checkIn && checkOut) ? { [Op.notBetween]: [checkIn, checkOut] } : null,
            endDate: (checkIn && checkOut) ? { [Op.notBetween]: [checkIn, checkOut] } : null
          }
        },
        {
          model: Image,
          attributes: ['url']
        }
      ]
    })
    res.json(spots)
  } else if (location) {
    const spots = await Spot.findAll({
      where: { city: where.city } || { state: where.state },
      include: {
        model: Image,
        attributes: ['url']
      }
    })
    return res.json(spots)
  } else {
    const spots = await Spot.findAll();
    return res.json(spots)
  }

})

module.exports = router;
