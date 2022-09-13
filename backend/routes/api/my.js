const express = require('express');
const { requireAuth, doesNotExist, restoreUser } = require('../../utils/auth');
const { validateSignup } = require('../../utils/validation')
const { Spot } = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();

// router.get('/spots', async (req, res, next) => {
//     const { user } = req;

//     const spots = await Spot.findAll({
//         where: {
//             ownerId: user.id
//         }
//     })

//     spots ? res.json({ Spots: spots }) : doesNotExist(next, 'Spots')
// })






module.exports = router;
