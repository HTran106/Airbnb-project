const express = require('express');
const { requireAuth, doesNotExist, unauthorized } = require('../../utils/auth');
const { Booking, Image, User, Spot, Message, Bookmark } = require('../../db/models');
const router = express.Router();
const { Op } = require('sequelize');


// GET MY BOOKMARKS

router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const { user } = req
    const { spotId } = req.params

    const bookmark = await Bookmark.findOne({
        where: {
            userId: +user.id,
            spotId: +spotId
        }
    })
    await bookmark.destroy()

    const myBookmarks = await Bookmark.findAll({
        where: {
            userId: +user.id
        },
    })
    res.status(200)
    res.json(myBookmarks)
})

// //GET ALL MESSAGES
// router.get('/', requireAuth, async (req, res, next) => {
//     const { user } = req
//     const messages = await Message.findAll({
//         where: {
//             [Op.or]: [
//                 { senderId: user.id },
//                 { recipientId: user.id }
//             ]
//         },
//         include: [
//             {
//                 model: User,
//                 as: 'sender',
//                 attributes: ['id', 'firstName', 'lastName', 'email', 'profileImage']
//             },
//             {
//                 model: User,
//                 as: 'recipient',
//                 attributes: ['id', 'firstName', 'lastName', 'email', 'profileImage']
//             }
//         ]
//     })
//     res.json(messages)
// })

// //GET MESSAGES BETWEEN 2 USERS
// router.get('/:userIdOne/:userIdTwo', requireAuth, async (req, res, next) => {

// }


module.exports = router
