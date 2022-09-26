// import { csrfFetch } from './csrf';


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

// const searchReducer = (state = {}, action) => {
//     switch (action.type) {
//         case SEARCH_SPOT:
//             const searchSpotState = {}
//             action.payload.forEach(spot => {
//                 searchSpotState[spot.id] = spot
//             })
//             return searchSpotState
//         default:
//             return state
//     }
// }

// export default searchReducer
