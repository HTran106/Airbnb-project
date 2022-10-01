import { csrfFetch } from "./csrf"

const MY_BOOKMARKS = 'bookmarks/myBookmarks'

export const myBookmarks = (bookmarks) => ({
    type: MY_BOOKMARKS,
    payload: bookmarks
})

export const fetchMyBookmarks = () => async dispatch => {
    const res = await csrfFetch('/api/my/bookmarks')

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(myBookmarks(parsedRes))
        return res
    }
}

const DELETE_BOOKMARK = 'bookmarks/deletedBookmark'

export const deletedBookmark = bookmark => ({
    type: DELETE_BOOKMARK,
    payload: bookmark
})

export const deleteBookmark = spotId => async dispatch => {
    const res = await csrfFetch(`/api/bookmarks/${spotId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        dispatch(deletedBookmark(parsedRes))
        return parsedRes
    }
}

export const CREATE_BOOKMARK = 'bookmarks/createBookmark'

export const createdBookmark = bookmark => ({
    type: CREATE_BOOKMARK,
    payload: bookmark
})

export const createBookmark = spotId => async dispatch => {
    const res = await csrfFetch(`/api/bookmarks/${spotId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ spotId })
    })

    if (res.ok) {
        const parsedRes = await res.json(res)
        dispatch(createdBookmark(parsedRes))
        return parsedRes
    }
}



const bookmarksReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_BOOKMARKS:
            const myBookmarksState = {}
            action.payload.forEach(bookmark => {
                myBookmarksState[bookmark.id] = bookmark
            })
            return myBookmarksState
        case DELETE_BOOKMARK:
            const deleteBookmarkState = { ...state }
            delete deleteBookmarkState[action.payload.id]
            return deleteBookmarkState
        case CREATE_BOOKMARK:
            const createBookmarkState = { ...state }
            createBookmarkState[action.payload.id] = action.payload
            return createBookmarkState
        default:
            return state
    }
}

export default bookmarksReducer
