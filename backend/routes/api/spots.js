const express = require('express');
const { requireAuth, doesNotExist, unauthorized } = require('../../utils/auth');
const { validateSpot, validateReview } = require('../../utils/validation')
const { Spot, User, Review, Image, Booking } = require('../../db/models');
const router = express.Router();

// GET ALL SPOTS
router.get('/', async (req, res, next) => {
    let spots = await Spot.findAll({
        include: {
            model: Image,
            as: 'images',
            attributes: ['url']
        }
    })

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
        const images = await Image.findAll({
            where: {
                spotId: +spotId
            },
            attributes: ['url']
        })

        spot.dataValues.images = images

        let avgStar = 0
        stars.forEach(star => {
            avgStar += star.stars
        })
        avgStar = avgStar / reviews

        spot.dataValues.numReviews = reviews
        spot.dataValues.avgStarRatings = avgStar.toFixed(2)
        res.status(200)
        return res.json(spot)
    } else {
        doesNotExist(next, 'Spot')
    }
})

// CREATE A SPOT
router.post('/', requireAuth, validateSpot, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price, images } = req.body
    const { user } = req

    const newSpot = await Spot.create({
        ownerId: user.id,
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

    for (let i = 0; i < images.length; i++) {
        await Image.create({
            spotId: newSpot.id,
            imageType: 'spot',
            url: images[i]
        })
    }

    const spot = await Spot.findOne({
        where: {
            id: +newSpot.id
        },
        include: [
            {
                model: User,
                as: 'Owner',
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Image,
                as: 'images',
                attributes: ['url']
            }
        ]
    })

    res.status(201)
    res.json(spot)
})


// EDIT A SPOT
router.put('/:spotId', requireAuth, async (req, res, next) => {
    const { spotId } = req.params;
    const { user } = req
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spot = await Spot.findOne({
        where: {
            id: +spotId
        },
        include: [
            {
                model: Image,
                as: 'images',
                attributes: ['url']
            },
        ]
    })

    if (spot) {
        if (spot.ownerId === +user.id) {
            await spot.update({
                address: address || spot.address,
                city: city || spot.city,
                state: state || spot.state,
                country: country || spot.country,
                lat: lat || spot.lat,
                lng: lng || spot.lng,
                name: name || spot.name,
                description: description || spot.description,
                price: price || spot.price
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

    const spot = await Spot.findByPk(+spotId)

    if (spot) {
        if (spot.ownerId === +user.id) {
            await spot.destroy();
            res.json({ msg: 'Successfully deleted', statusCode: res.statusCode })
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Spot')
    }
})

// GET ALL REVIEWS BY A SPOT'S ID
router.get('/:spotId/reviews', async (req, res, next) => {
    const { spotId } = req.params

    const spot = await Spot.findByPk(+spotId)

    if (spot) {
        const reviews = await Review.findAll({
            where: {
                spotId: +spotId
            },
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'profileImage', 'createdAt']
                },
                {
                    model: Image,
                    as: 'images',
                    attributes: ['url']
                },
                {
                    model: Spot,
                    include: {
                        model: Image,
                        as: 'images',
                        attributes: ['url']
                    }
                },
            ]
        })
        res.status(200)
        res.json({ Reviews: reviews })
    } else {
        doesNotExist(next, 'Spot')
    }
})

// CREATE A REVIEW FOR A SPOT BASED ON THE SPOT ID
router.post('/:spotId/reviews', requireAuth, validateReview, async (req, res, next) => {
    const { user } = req
    const { spotId } = req.params
    const { review, stars } = req.body

    const spot = await Spot.findByPk(+spotId)
    const checkReview = await Review.findOne({
        where: {
            spotId: +spotId,
            userId: +user.id
        }
    })

    if (spot) {
        if (checkReview) {
            res.status(403);
            const err = new Error("User already has a review for this spot");
            err.message = "User already has a review for this spot";
            err.status = 403;
            next(err);
        } else {
            const newReview = await Review.create({
                userId: +user.id,
                spotId: +spot.id,
                review,
                stars,
            })

            const findReview = await Review.findOne({
                where: {
                    spotId: +spotId,
                    userId: +user.id
                },
                include: {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'profileImage', 'createdAt']
                }
            })

            res.status(200)
            res.json(findReview)
        }
    } else {
        doesNotExist(next, 'Spot')
    }

})

// EDIT A REVIEW
router.put('/:spotId/reviews/:reviewId', requireAuth, validateReview, async (req, res, next) => {
    const { user } = req
    const { spotId, reviewId } = req.params
    const { review, stars } = req.body

    const spot = await Spot.findByPk(+spotId)


    if (spot) {
        let reviewToUpdate = await Review.findByPk(+reviewId, {
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
                }
            ]
        })
        if (reviewToUpdate) {
            if (reviewToUpdate.userId === +user.id) {
                reviewToUpdate = await reviewToUpdate.update({
                    review,
                    stars,
                })
                res.status(200)
                res.json(reviewToUpdate)
            } else {
                unauthorized(next)
            }
        } else {
            doesNotExist(next, 'Review')
        }
    } else {
        doesNotExist(next, 'Spot')
    }
})

// DELETE A REVIEW
router.delete('/:spotId/reviews/:reviewId', requireAuth, async (req, res, next) => {
    const { spotId, reviewId } = req.params
    const { user } = req

    const spot = await Spot.findByPk(+spotId)

    if (spot) {
        const review = await Review.findByPk(+reviewId)
        if (review) {
            if (review.userId === +user.id) {
                await review.destroy();
                res.json({ id: +reviewId, msg: 'Successfully deleted', statusCode: res.statusCode })
            } else {
                unauthorized(next)
            }
        } else {
            doesNotExist(next, 'Review')
        }
    } else {
        doesNotExist(next, 'Spot')
    }
})

// GET ALL BOOKINGS FOR A SPOT BASED ON THE SPOT'S ID
router.get('/:spotId/bookings', requireAuth, async (req, res, next) => {
    const { spotId } = req.params
    const { user } = req

    const spot = await Spot.findByPk(+spotId)

    if (spot) {
        if (spot.ownerId === +user.id) {
            const bookings = await Booking.findAll({
                where: {
                    userId: +spotId
                },
                include: [{
                    model: User,
                    as: 'Owner',
                    attributes: ['id', 'firstName', 'lastName']
                }]
            })
            res.status(200)
            res.json({ Bookings: bookings })
        } else {
            const bookings = await Booking.findAll({
                where: {
                    spotId: +spotId
                },
                include: {
                    model: Spot
                }
            })
            res.status(200)
            res.json({ Bookings: bookings })
        }
    } else {
        doesNotExist(next, 'Spot')
    }
})

// CREATE A BOOKING FROM A SPOT BASED ON THE SPOT'S ID
router.post('/:spotId/bookings', requireAuth, async (req, res, next) => {
    const { spotId } = req.params
    let { startDate, endDate } = req.body
    const { user } = req

    const spot = await Spot.findByPk(+spotId)

    if (spot) {
        const bookings = await Booking.findAll({
            where: {
                spotId: +spotId
            }
        })

        startDate = new Date(startDate)
        endDate = new Date(endDate)

        let isNotAvail;
        bookings.forEach(booking => {
            if (((startDate <= booking.dataValues.startDate) && (endDate >= booking.dataValues.startDate)) || ((startDate >= booking.dataValues.startDate) && (booking.dataValues.endDate >= startDate))) {
                isNotAvail = true
            }
        })

        if (isNotAvail) {
            res.status(403);
            const err = new Error("Sorry, this spot is already booked for the specified dates");
            err.message = "Sorry, this spot is already booked for the specified dates";
            err.errors = {
                startDate: "Start date conflicts with an existing booking",
                endDate: "End date conflicts with an existing booking"
            };
            err.status = 403;
            next(err);
        } else {
            if (spot.ownerId !== +user.id) {
                const booking = await Booking.create({
                    spotId: +spotId,
                    userId: +user.id,
                    startDate,
                    endDate
                })

                res.status(200)
                res.json(booking)
            } else {
                unauthorized(next)
            }
        }
    } else {
        doesNotExist(next, 'Spot')
    }
})



// ADD AN IMAGE TO A SPOT BASED ON THE SPOT'S ID
router.post('/:spotId/images', requireAuth, async (req, res, next) => {
    const { spotId } = req.params
    const { url } = req.body

    const spot = await Spot.findByPk(+spotId)

    if (spot) {
        const newImage = await Image.create({
            spotId: +spotId,
            imageType: "Spot",
            url,
        })
        res.status(200)
        res.json(newImage)
    } else {
        doesNotExist(next, 'Spot')
    }
})

// DELETE AN IMAGE BASED ON SPOT ID
router.delete('/:spotId/images/:imageId', requireAuth, async (req, res, next) => {
    const { user } = req
    const { imageId, spotId } = req.params

    const image = await Image.findByPk(+imageId)
    const spot = await Spot.findByPk(+spotId)

    if (spot) {
        if (image) {
            if (spot.ownerId === +user.id) {
                await image.destroy()
                res.status(200)
                res.json({ message: "Successfully deleted", statusCode: 200 })
            } else {
                unauthorized(next)
            }
        } else {
            doesNotExist(next, 'Image')
        }
    }
})





module.exports = router;
