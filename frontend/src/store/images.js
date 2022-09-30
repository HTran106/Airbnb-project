import { csrfFetch } from "./csrf";


const ADD_IMAGE_SPOT = 'images/addedImageSpot'

export const addedImageSpot = image => ({
    type: ADD_IMAGE_SPOT,
    payload: image
})

export const addImageToSpot = (url, spotId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}/images`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            url,
        })
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(addedImageSpot(parsedRes))
        return res
    }
}




const ADD_IMAGE_REVIEW = 'images/addedImageReview'

export const addedImageReview = image => ({
    type: ADD_IMAGE_REVIEW,
    payload: image
})

export const addImageToReview = (url, reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}/images`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: {
            url,
        }
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(addedImageReview(parsedRes))
        return res
    }
}



const DELETE_IMAGE = 'images/deletedImage'

export const deletedImage = imageId => ({
    type: DELETE_IMAGE,
    payload: imageId
})

export const deleteSpotImage = (spotId, imageId) => async dispatch => {
    const res = await csrfFetch(`/api/spots/${spotId}/images/${imageId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const parsedRes = await res.json(parsedRes)
        await dispatch(deletedImage(imageId))
    }
}

export const deleteReviewImage = (reviewId, imageId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}/images/${imageId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(deletedImage(imageId))
        return res
    }
}



const imagesReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_IMAGE_SPOT:
            const newSpotImageState = { ...state }
            newSpotImageState[action.payload.id] = action.payload
            return newSpotImageState
        case ADD_IMAGE_REVIEW:
            const newReviewImageState = { ...state }
            newReviewImageState[action.payload.id] = action.payload
            return newReviewImageState
        case DELETE_IMAGE:
            const deleteImageState = { ...state }
            delete deleteImageState[action.payload]
            return deleteImageState
        default:
            return state
    }
}


export default imagesReducer
