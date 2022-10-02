const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const myRouter = require('./my.js')
const reviewsRouter = require('./reviews.js')
const bookingsRouter = require('./bookings.js')
const imagesRouter = require('./images.js')
const { Spot, Booking, Image } = require('../../db/models');
const bookmarksRouter = require('./bookmarks.js')
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
router.use('/bookmarks', bookmarksRouter)

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

  let params = {}

  if (location) {
    if (isProduction) {
      params.city = { [Op.iLike]: `%${location}%` }
      params.state = { [Op.iLike]: `%${location}%` }

    } else {
      params.city = { [Op.like]: `%${location}%` }
      params.state = { [Op.like]: `%${location}%` }
    }
  }

  if (location && checkIn && checkOut) {
    const spots = await Spot.findAll({
      where: { [Op.or]: [{ city: params.city }, { state: params.state }] },
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
          as: 'images',
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
          as: 'images',
          attributes: ['url']
        }
      ]
    })
    res.json(spots)
  } else if (location) {
    const spots = await Spot.findAll({
      where: { [Op.or]: [{ city: params.city }, { state: params.state }] },
      include: {
        model: Image,
        as: 'images',
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
