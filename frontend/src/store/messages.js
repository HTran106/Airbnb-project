import { csrfFetch } from "./csrf";

const MY_MESSAGES = 'messages/myMessages'

export const myMessages = messages => ({
    type: MY_MESSAGES,
    payload: messages
})

export const fetchMyMessages = () => async dispatch => {
    const res = await csrfFetch('/api/messages')

    if (res.ok) {
        const parsedRes = await res.json(res)
        await dispatch(myMessages(parsedRes))
        return res
    }
}


const messagesReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_MESSAGES:
            const myMessagesState = { ...state }
            action.payload.forEach(message => {
                myMessagesState[message.id] = message
            })
            return myMessagesState
        default:
            return state
    }
}

export default messagesReducer
