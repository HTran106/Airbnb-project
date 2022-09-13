const express = require('express');
const { requireAuth, restoreUser, doesNotExist, unauthorized } = require('../../utils/auth');
const { validateSpot } = require('../../utils/validation')
// const { validateSignup } = require('../../utils/validation')
const { Spot, User, Review } = require('../../db/models');
const router = express.Router();

// GET ALL SPOTS
router.get('/', async (req, res, next) => {
    const spots = await Spot.findAll()

    if (spots) {
        res.status(200)
        return res.json({ Spots: spots })
    } else {
        doesNotExist(next, 'Spots')
    }
})

// GET DETAILS OF A SPOT FROM AN ID
router.get('/:spotId', async (req, res, next) => {
    const { spotId } = req.params
    const spot = await Spot.findOne({
        where: {
            id: spotId
        },
        include: {
            model: User,
            as: 'Owner',
            attributes: ['id', 'firstName', 'lastName']
        }
    })

    if (spot) {
        const reviews = await Review.count({ where: { spotId } })
        const stars = await Review.findAll({ where: { spotId } })

        let avgStar = 0
        stars.forEach(star => {
            avgStar += star.stars
        })
        avgStar = avgStar / reviews

        spot.dataValues.numReviews = reviews
        spot.dataValues.avgStarRatings = avgStar
        res.status(200)
        return res.json(spot)
    } else {
        doesNotExist(next, 'Spot')
    }

})

// CREATE A SPOT
router.post('/', requireAuth, validateSpot, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const { user } = req

    const newSpot = await Spot.create({
        ownerId: user.id,
        address,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price,
    })

    res.status(201)
    res.json(newSpot)
})


// EDIT A SPOT
router.put('/:spotId', requireAuth, validateSpot, async (req, res, next) => {
    const { spotId } = req.params;
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spot = await Spot.findByPk(spotId)

    if (spot) {
        if (spot.ownerId === +spotId) {
            await spot.update({
                address,
                city,
                state,
                country,
                lat,
                lng,
                name,
                description,
                price,
            })
            res.json(spot)
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Spot')
    }

})

// DELETE A SPOT
router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const { user } = req
    const { spotId } = req.params

    const spot = Spot.findByPk(+spotId)

    if (spot) {
        if (spot.ownerId === +user.id) {
            await spot.destroy();
            res.json({ msg: 'Successfully deleted', statusCode: res.statusCode })
        } else {
            unauthorized()
        }
    } else {
        doesNotExist(next, 'Spot')
    }
})









module.exports = router;
