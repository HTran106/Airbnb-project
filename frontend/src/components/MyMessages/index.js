import './MyMessages.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchMyMessages } from '../../store/messages'


const MyMessagesComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const messages = Object.values(useSelector(state => state.messages))
    const user = useSelector(state => state.session.user)
    const recipients = messages && messages.filter(message => message.recipientId !== user?.id)
    const myMessages = messages && messages.filter(message => message.recipientId === user?.id)

    useEffect(() => {
        dispatch(fetchMyMessages())
    }, [dispatch])

    const recipientIds = []
    return (
        <div className='my-messages-container'>
            <div className='left-side-container'>
                {messages?.map(message => {
                    if (message?.recipientId !== user?.id && !recipientIds.includes(message?.recipientId)) {
                        recipientIds.push(message?.recipientId)
                        return (
                            <div>
                                <div className='left-card-container'>
                                    <div className='left-profile-img-container'>
                                        <img src={message?.recipient.profileImage} alt='profile pic' />
                                    </div>
                                    <div>
                                        <div className='left-name-container'>
                                            {message?.recipient.firstName} {message?.recipient.lastName}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            // <div className='left-message-container' key={message?.id}>
                            //     <div className='message-card'>
                            //         <img src={message?.recipient.profileImage} alt='profile image' />
                            //         <span>{message?.recipient.firstName} {message?.recipient.lastName}</span>
                            //     </div>
                            //     <div className='message-content'>
                            //         <span>{message?.body}</span>
                            //     </div>
                            // </div>
                        )
                    }
                })}
            </div>
            <MessageDetailsComponent />
        </div>
    )
}


const MessageDetailsComponent = () => {
    return (
        <h1>hey</h1>
    )
}

export default MyMessagesComponent
