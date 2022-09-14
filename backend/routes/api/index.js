const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const myRouter = require('./my.js')
const reviewsRouter = require('./reviews.js')
const bookingsRouter = require('./bookings.js')
const imagesRouter = require('./images.js')

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

module.exports = router;
