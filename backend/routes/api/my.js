const express = require('express');
const { requireAuth, doesNotExist, restoreUser } = require('../../utils/auth');
const { Spot, Booking, Review, User, Image, Bookmark } = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();


// GET ALL SPOTS OWNED BY THE CURRENT USER
router.get('/spots', requireAuth, async (req, res, next) => {
    const { user } = req;

    const spots = await Spot.findAll({
        where: {
            ownerId: user.id
        },
        include: [
            {
                model: Image,
                as: 'images',
                attributes: ['url']
            },
            {
                model: User,
                as: 'Owner',
                attributes: ['firstName', 'lastName', 'email']
            }
        ]
    })

    if (spot) {
        res.status(200)
        return res.json({ Spots: spots })
    } else {
        doesNotExist(next, 'Spots')
    }
})

// GET ALL OF THE CURRENT USER'S BOOKINGS
router.get('/bookings', requireAuth, async (req, res) => {
    const { user } = req

    const bookings = await Booking.findAll({
        where: {
            userId: +user.id
        },
        include: [
            {
                model: Spot,
                include: [
                    {
                        model: Image,
                        as: 'images',
                        attributes: ['url']
                    },
                    {
                        model: User,
                        as: 'Owner',
                        attributes: ['firstName', 'lastName', 'email']
                    }
                ]
            },
        ]
    })

    if (bookings) {
        res.status(200)
        res.json({ Bookings: bookings })
    } else {
        doesNotExist(next, 'Bookings')
    }
})

// GET REVIEWS BY THE CURRENT USER
router.get('/reviews', requireAuth, async (req, res, next) => {
    const { user } = req

    const reviews = await Review.findAll({
        where: {
            userId: +user.id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName', 'profileImage', 'createdAt']
            },
            {
                model: Spot,
                include: {
                    model: Image,
                    as: 'images',
                    attributes: ['url']
                }
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


//MY BOOKMARKS
router.get('/bookmarks', requireAuth, async (req, res, next) => {
    const { user } = req

    const bookmarks = await Bookmark.findAll({
        include:
        {
            model: Spot,
            include:
            {
                model: Image,
                as: 'images',
                attributes: ['url']
            }
        }

    })

    if (bookmarks) {
        res.status(200)
        res.json({ Bookmarks: bookmarks })
    } else {
        doesNotExist(next, 'Bookmarks')
    }
})








module.exports = router;
