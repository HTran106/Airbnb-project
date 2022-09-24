import { csrfFetch } from "./csrf";


const MY_BOOKINGS = 'bookings/myBookings'

export const myBookings = bookings => ({
    type: MY_BOOKINGS,
    payload: bookings
})

export const fetchMyBookings = () => async dispatch => {
    const res = await csrfFetch('/api/my/bookings')

    if (res.ok) {
        const parsedRes = await res.json(parsedRes)
        await dispatch(myBookings(parsedRes))
        return res
    }
}




const SPOT_BOOKINGS = 'bookings/spotBookings'

export const spotBookings = bookings => ({
    type: SPOT_BOOKINGS,
    payload: bookings
})

export const fetchBookingsForSpot = spotId => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}/bookings`)

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(spotBookings(parsedRes))
        return res
    }
}



const CREATE_BOOKING = 'bookings/createdBooking'

export const createdBooking = (booking) => ({
    type: CREATE_BOOKING,
    payload: booking
})

export const createBooking = (booking, spotId) => async dispatch => {
    const { startDate, endDate } = booking

    const res = await csrfFetch(`/api/spots/${spotId}/bookings`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            startDate,
            endDate
        })
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(createdBooking(parsedRes))
        return res;
    }
}




const EDIT_BOOKING = 'bookings/editedBooking'

export const editedBooking = booking => ({
    type: EDIT_BOOKING,
    payload: booking
})

export const editABooking = booking => async dispatch => {
    const { startDate, endDate } = booking
    const res = await csrfFetch(`/api/bookings/${booking?.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            startDate,
            endDate
        })
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(editedBooking(parsedRes))
        return res;
    }
}




const DELETE_BOOKING = 'bookings/deletedBooking'

export const deletedBooking = bookingId => ({
    type: DELETE_BOOKING,
    payload: bookingId
})

export const deleteBooking = bookingId => async dispatch => {
    const res = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        dispatch(deletedBooking(bookingId))
        return res
    }
}



const bookingsReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_BOOKINGS:
            const myBookingsState = { ...state }
            action.payload.Bookings?.forEach(booking => {
                myBookingsState[booking.id] = booking
            })
            return myBookingsState
        case SPOT_BOOKINGS:
            const spotBookingsState = { ...state }
            action.payload.Bookings?.forEach(booking => {
                spotBookingsState[booking.id] = booking
            })
            return spotBookingsState
        case CREATE_BOOKING:
            const newBookingState = { ...state }
            newBookingState[action.payload.id] = action.payload
        case EDIT_BOOKING:
            const editBookingState = { ...state }
            editBookingState[action.payload.id] = action.payload
            return editBookingState
        case DELETE_BOOKING:
            const deleteBookingState = { ...state }
            delete deleteBookingState[action.payload]
            return deleteBookingState
        default:
            return state
    }
}

export default bookingsReducer
