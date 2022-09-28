import { csrfFetch } from "./csrf";



const MY_REVIEWS = 'reviews/myReviews'

export const myReviews = reviews => ({
    type: MY_REVIEWS,
    payload: reviews
})

export const fetchMyReviews = () => async dispatch => {
    const res = await csrfFetch('/api/my/reviews')

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(myReviews(parsedRes))
        return res
    }
}



const SPOT_REVIEWS = 'reviews/spotReviews'

export const spotReviews = reviews => ({
    type: SPOT_REVIEWS,
    payload: reviews
})

export const fetchSpotReviews = (spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`)

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(spotReviews(parsedRes))
        return res
    }
}




const NEW_SPOT_REVIEW = 'reviews/createdReview'

export const createdReview = review => ({
    type: NEW_SPOT_REVIEW,
    payload: review
})

export const createAReview = (data, spotId) => async dispatch => {
    const { review, stars } = data
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: {
            review,
            stars,
        }
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(createdReview(parsedRes))
        return res
    }
}




const EDIT_REVIEW = 'reviews/editedReview'

export const editedReview = review => ({
    type: EDIT_REVIEW,
    payload: review
})

export const editAReview = (reviewData, spotId) => async dispatch => {
    const { review, stars } = reviewData

    const res = await csrfFetch(`/api/spots/${spotId}/reviews/${reviewData.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            review,
            stars
        }
    })

    if (res.ok) {
        const parsedRes = await res.json(parsedRes)
        await dispatch(editedReview(parsedRes))
        return res;
    }
}




const DELETE_REVIEW = 'reviews/deletedReview'

export const deletedReview = reviewId => ({
    type: DELETE_REVIEW,
    payload: reviewId
})

export const deleteReview = (spotId, reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(deletedReview(parsedRes))
        return res;
    }
}



const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_REVIEWS:
            const myReviewsState = { ...state }
            action.payload?.forEach(review => {
                myReviewsState[review.id] = review
            })
            return myReviewsState
        case SPOT_REVIEWS:
            const spotReviewsState = {}
            action.payload.Reviews?.forEach(review => {
                spotReviewsState[review.id] = review
            })
            return spotReviewsState
        case NEW_SPOT_REVIEW:
            const newReviewState = { ...state }
            newReviewState[action.payload.id] = action.payload
            return newReviewState
        case EDIT_REVIEW:
            const editReviewState = { ...state }
            editReviewState[action.payload.id] = action.payload
            return editReviewState
        case DELETE_REVIEW:
            const deleteReviewState = { ...state }
            delete deleteReviewState[action.payload.id]
            return deleteReviewState
        default:
            return state
    }
}


export default reviewsReducer
