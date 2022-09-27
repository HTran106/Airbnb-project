import ProfileCard from './ProfileCard'
import './ProfileComponent.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMyReviews } from '../../store/reviews'
import { fetchMySpots } from '../../store/spots'

const ProfileComponent = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const reviews = Object.values(useSelector(state => state.reviews))
    const spots = Object.values(useSelector(state => state.spots))

    useEffect(() => {
        dispatch(fetchMyReviews())
        dispatch(fetchMySpots())
    }, [dispatch])

    return (
        <div className="profile-component-container">
            <div className='profile-component-inside-container'>
                <ProfileCard />
                <div className='profile-component-right-container'>
                    <div className='hi-section'>
                        <span className='right-name'>Hi, I'm {user?.firstName} {user?.lastName}</span>
                        <span className='right-joined'>Joined in {(user?.createdAt).split("-")[0]}</span>
                    </div>
                    <div className='right-about-container'>
                        <span className='right-about'>About</span>
                        <span style={{ paddingTop: '1em' }} className='fa-solid fa-house'>
                            <span className='spot-count'>
                                Hosting {spots?.length} Spots
                            </span>
                        </span>
                        <div>
                            <span style={{ paddingTop: '1em' }} className='fa-solid fa-star'>
                                <span className='spot-count'>
                                    {reviews?.length} Reviews
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="menu-container">
                        <ol>
                            <li>
                                <div>My Spots</div>
                            </li>
                            <li>
                                <div>My Bookings</div>
                            </li>
                            <li>
                                <div>My Reviews</div>
                            </li>
                        </ol>
                    </div>
                    <div className='bottom-components-container'>
                        <h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent
