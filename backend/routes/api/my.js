const express = require('express');
const { requireAuth, doesNotExist, restoreUser } = require('../../utils/auth');
const { validateSignup } = require('../../utils/validation')
const { Spot } = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();


// GET ALL SPOTS OWNED BY THE CURRENT USER
router.get('/spots', requireAuth, async (req, res, next) => {
    const { user } = req;

    const spots = await Spot.findAll({
        where: {
            ownerId: user.id
        }
    })

    if (spot) {
        res.status(200)
        return res.json({ Spots: spots })
    } else {
        doesNotExist(next, 'Spots')
    }
})









module.exports = router;
