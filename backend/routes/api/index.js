const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const myRouter = require('./my.js')
const reviewsRouter = require('./reviews.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter)
router.use('/my', myRouter)
router.use('/reviews', reviewsRouter)

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
