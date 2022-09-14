const express = require('express');
const { setTokenCookie, requireAuth, doesNotExist, unauthorized } = require('../../utils/auth');
const { validateSignup } = require('../../utils/validation')
const { User, Image } = require('../../db/models');
const router = express.Router();

// DELETE AN IMAGE
router.delete('/:imageId', requireAuth, async (req, res, next) => {
    const { user } = req
    const { imageId } = req.params

    const image = await Image.findByPk(+imageId)

    if (image) {
        if (image.userId === +user.id) {
            await image.destroy()
            res.status(200)
            res.json({ message: "Successfully deleted", statusCode: 200 })
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Image')
    }
})



module.exports = router;
