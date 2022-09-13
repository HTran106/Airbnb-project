const express = require('express');
const { requireAuth, restoreUser } = require('../../utils/auth');
// const { validateSignup } = require('../../utils/validation')
const { Spot } = require('../../db/models');
const router = express.Router();

// GET ALL SPOTS
router.get('/', async (req, res) => {
    const spots = await Spot.findAll()

    return res.json({
        spots,
    })
})










module.exports = router;
