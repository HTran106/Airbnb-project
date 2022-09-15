const express = require('express');
const { requireAuth, doesNotExist, unauthorized } = require('../../utils/auth');
const { Review, Image } = require('../../db/models');
const router = express.Router();


// ADD AN IMAGE TO A REVIEW BASED ON THE REVIEW'S ID
router.post('/:reviewId/images', requireAuth, async (req, res, next) => {
    const { user } = req
    const { reviewId } = req.params
    const { url } = req.body

    const review = await Review.findByPk(+reviewId)

    if (review) {
        if (review.userId === +user.id) {
            const images = await Image.findAll({
                where: {
                    reviewId: +reviewId
                }
            })
            if (images.length > 10) {
                const err = new Error("Maximum number of images for this resource was reached")
                err.title = "Maximum number of images for this resource was reached"
                err.status = 400
                return next(err)
            } else {
                const newImage = await Image.create({
                    spotId: review.spotId,
                    reviewId: review.reviewId,
                    imageType: 'Review',
                    url,
                })
                res.status(200)
                res.json(newImage)
            }
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Review')
    }
})










module.exports = router;
