import { csrfFetch } from './csrf';
import { useSelector } from 'react-redux';

const GET_SPOT = 'spots/getOneSpot'

export const getOneSpot = spot => ({
    type: GET_SPOT,
    payload: spot
})

export const fetchOneSpot = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}`)

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(getOneSpot(parsedRes))
        return res
    }
}


const ALL_SPOTS = 'spots/getAllSpots'

export const getAllSpots = spots => ({
    type: ALL_SPOTS,
    payload: spots
})

export const fetchAllSpots = () => async dispatch => {
    const res = await csrfFetch('/api/spots')

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(getAllSpots(parsedRes))
        return res
    }
}


const MY_SPOTS = 'spots/mySpots'

export const mySpots = spots => ({
    type: MY_SPOTS,
    payload: spots
})

export const fetchMySpots = () => async dispatch => {
    const res = await csrfFetch('/api/my/spots')

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(mySpots(parsedRes))
        return res
    }
}


const NEW_SPOT = 'spots/newSpot'

export const newSpot = spot => ({
    type: NEW_SPOT,
    payload: spot
})

export const createNewSpot = (spot, images) => async dispatch => {
    const { address, city, state, country, lat, lng, name, description, price, squareFt } = spot

    const res = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price,
            images,
            squareFt
        })
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(newSpot(parsedRes))
        return parsedRes;
    }
}


const EDIT_SPOT = 'spots/editSpot'

export const editSpot = spot => ({
    type: EDIT_SPOT,
    payload: spot
})

export const editASpot = spot => async dispatch => {
    const user = useSelector(state => state.session.user)
    const { address, city, state, country, lat, lng, name, description, price, squareFt } = spot

    const res = await csrfFetch(`/api/spots/${spot.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            userId: user.id,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price,
            squareFt
        }
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(editSpot(parsedRes))
        return res
    }
}


const DELETE_SPOT = 'spots/deletedSpot'

export const deletedSpot = spotId => ({
    type: DELETE_SPOT,
    payload: spotId
})

export const deleteSpot = spotId => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (res.ok) {
        await dispatch(deletedSpot(spotId))
        return res;
    }
}

// export const SEARCH_SPOT = 'spots/searchSpot'

// export const searchSpot = spots => ({
//     type: SEARCH_SPOT,
//     payload: spots
// })

// export const fetchSearchSpots = searchValues => async dispatch => {
//     const { location, checkIn, checkOut } = searchValues

//     let res;
//     if (location.length && checkIn !== null && checkOut !== null) {
//         res = await csrfFetch(`/api/search?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}`)
//     } else if (checkIn !== null && checkOut !== null) {
//         res = await csrfFetch(`/api/search?checkIn=${checkIn}&checkOut=${checkOut}`)
//     } else if (location.length) {
//         res = await csrfFetch(`/api/search?location=${location}`)
//     } else {
//         res = await csrfFetch('/api/spots')
//     }

//     if (res) {
//         if (res.ok) {
//             const parsedRes = await res.json(res)
//             await dispatch(searchSpot(parsedRes))
//             return res
//         }
//     }
// }

const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SPOT:
            const oneSpotState = { ...state }
            oneSpotState[action.payload.id] = action.payload
            return oneSpotState
        case ALL_SPOTS:
            const allSpotsState = { ...state }
            action.payload?.Spots?.forEach((spot, i) => {
                allSpotsState[i] = spot
            })
            return allSpotsState
        case MY_SPOTS:
            const mySpotsState = { ...state }
            action.payload?.Spots?.forEach((spot, i) => {
                mySpotsState[i] = spot
            })
            return mySpotsState
        case NEW_SPOT:
            const newSpotState = { ...state }
            newSpotState[action.payload?.id] = action.payload
            return newSpotState
        case EDIT_SPOT:
            const editSpotState = { ...state }
            editSpotState[action.payload?.id] = action.payload
            return editSpotState
        case DELETE_SPOT:
            const deletedSpotState = { ...state }
            for (let key in deletedSpotState) {
                if (deletedSpotState[key].id === action.payload) {
                    delete deletedSpotState[key]
                }
            }
            return deletedSpotState
        default:
            return state
    }
}

export default spotsReducer
