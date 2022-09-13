const express = require('express');
const { setTokenCookie, requireAuth, doesNotExist } = require('../../utils/auth');
const { validateSignup } = require('../../utils/validation')
const { Review, Spot, Image, User } = require('../../db/models');
const router = express.Router();


// GET ALL REVIEWS OF THE CURRENT USER
router.get('/', requireAuth, async (req, res, next) => {
    const { user } = req

    const reviews = await Review.findAll({
        where: {
            userId: +user.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Spot
            },
            {
                model: Image,
                as: 'images',
                attributes: ['url']
            }
        ]
    })
    if (reviews) {
        res.status(200)
        res.json(reviews)
    } else {
        doesNotExist(next, 'Reviews')
    }

})










module.exports = router;
