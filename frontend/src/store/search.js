import { csrfFetch } from './csrf';


export const SEARCH_SPOT = 'search/searchSpot'

export const searchSpot = spots => ({
    type: SEARCH_SPOT,
    payload: spots
})

export const fetchSearchSpots = searchValues => async dispatch => {
    const { location, checkIn, checkOut } = searchValues

    let res;
    if (location && checkIn && checkOut) {
        res = await csrfFetch(`/api/search?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}`)
    }

    if (checkIn && checkOut) {
        res = await csrfFetch(`/api/search?checkIn=${checkIn}&checkOut=${checkOut}`)
    }

    if (location) {
        res = await csrfFetch(`/api/search?location=${location}`)
    }

    if (res) {
        if (res.ok) {
            const parsedRes = await res.json(res)
            await dispatch(searchSpot(parsedRes))
            return res
        }
    }
}

export const SEARCH_ALL = 'search/searchAll'

export const searchAll = spots => ({
    type: SEARCH_ALL,
    payload: spots
})

export const searchAllSpot = () => async dispatch => {
    const res = await csrfFetch('/api/spots')

    if (res.ok) {
        const spots = await res.json()
        await dispatch(searchAll(spots))
        return res
    }
}

const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_SPOT:
            const searchSpotState = {}
            action.payload.forEach(spot => {
                searchSpotState[spot.id] = spot
            })
            return searchSpotState
        case SEARCH_ALL:
            const searchAllState = {}
            action.payload.Spots.forEach(spot => {
                searchAllState[spot.id] = spot
            })
            return searchAllState
        default:
            return state
    }
}

export default searchReducer
