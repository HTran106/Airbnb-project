const express = require('express');
const { setTokenCookie, requireAuth, doesNotExist, unauthorized } = require('../../utils/auth');
const { validateSignup } = require('../../utils/validation')
const { User, Booking } = require('../../db/models');
const router = express.Router();

// EDIT A BOOKING
router.put('/:bookingId', requireAuth, async (req, res, next) => {
    const { bookingId } = req.params
    const { user } = req
    const { startDate, endDate } = req.body

    const booking = await Booking.findByPk(+bookingId)
    const bookings = await Booking.findAll({
        where: {
            spotId: booking.spotId
        }
    })


    const date = Date.now()

    if (booking) {
        if (booking.userId === +user.id) {
            if (endDate <= date) {
                const err = new Error("Past bookings can't be modified")
                err.status = 400
                err.title = "Past bookings can't be modified"
                return next(err)
            }

            let isNotAvail;
            bookings.forEach(booking => {
                if ((startDate >= booking.startDate && startDate <= booking.endDate) || (endDate <= booking.endDate && endDate >= booking.startDate)) {
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
                const updatedBooking = await booking.update({
                    startDate,
                    endDate,
                })
            }
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Booking')
    }
})

// DELETE A BOOKING
router.delete('/:bookingId', requireAuth, async (req, res, next) => {
    const { bookingId } = req.params
    const { user } = req

    const date = Date.now()

    const booking = await Booking.findByPk(+bookingId)
    if (booking) {
        if (booking.userId === +user.id) {
            if (booking.startDate <= date) {
                const err = new Error("Bookings that have been started can't be deleted")
                err.title = "Bookings that have been started can't be deleted"
                err.status = 400
                return next(err)
            } else {
                await booking.destroy()
                res.status(200)
                res.json({ message: 'Successfully deleted', statusCode: 200 })
            }
        } else {
            unauthorized(next)
        }
    } else {
        doesNotExist(next, 'Booking')
    }
})






module.exports = router;
