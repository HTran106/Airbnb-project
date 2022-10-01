const express = require('express');
const { requireAuth, doesNotExist, unauthorized } = require('../../utils/auth');
const { Booking, Image, User, Spot, Message, Bookmark } = require('../../db/models');
const router = express.Router();
const { Op } = require('sequelize');


//DELETE BOOKMARK
router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const { user } = req
    const { spotId } = req.params

    const bookmark = await Bookmark.findOne({
        where: {
            userId: +user.id,
            spotId: +spotId
        }
    })
    const bookmarkId = bookmark.dataValues.id
    await bookmark.destroy()

    res.status(200)
    res.json({ id: bookmarkId, message: 'Bookmark deleted' })
})

//CREATE BOOKMARK
router.post('/:spotId', requireAuth, async (req, res, next) => {
    const { user } = req
    const { spotId } = req.params

    const bookmark = await Bookmark.create({
        userId: +user.id,
        spotId: +spotId
    })

    res.status(200)
    res.json(bookmark)
})


module.exports = router
