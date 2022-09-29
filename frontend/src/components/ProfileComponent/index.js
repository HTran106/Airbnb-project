import ProfileCard from './ProfileCard'
import './ProfileComponent.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMyReviews } from '../../store/reviews'
import { fetchMySpots } from '../../store/spots'
import MyReviewsComponent from './MyReviews'
import MySpotsComponent from './MySpots'
// import { Popup } from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

const ProfileComponent = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const reviews = Object.values(useSelector(state => state.reviews))
    const spots = Object.values(useSelector(state => state.spots))

    const [showReviews, setShowReviews] = useState(true)
    const [showSpots, setShowSpots] = useState(false)
    const [showBookings, setShowBookings] = useState(false)
    const [reviewTabBackground, setReviewTabBackground] = useState({})
    const [spotTabBackground, setSpotTabBackground] = useState({})
    const [bookingTabBackground, setBookingTabBackground] = useState({})

    useEffect(() => {
        dispatch(fetchMyReviews())
        dispatch(fetchMySpots())
    }, [dispatch])

    const handleShowReview = e => {
        e.preventDefault()
        setShowReviews(true)
        setShowSpots(false)
        setShowBookings(false)
    }

    const handleShowSpots = e => {
        e.preventDefault()
        setShowReviews(false)
        setShowSpots(true)
        setShowBookings(false)
    }

    const handleShowBookings = e => {
        e.preventDefault()
        setShowReviews(false)
        setShowSpots(false)
        setShowBookings(true)
    }

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
                                    {reviews?.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="menu-container">
                        <ol>
                            <li>
                                <div style={{}} onClick={handleShowSpots}>My Spots</div>
                            </li>
                            <li>
                                <div onClick={handleShowBookings}>My Bookings</div>
                            </li>
                            <li>
                                <div onClick={handleShowReview}>My Reviews</div>
                            </li>
                        </ol>
                    </div>
                    {/* <div className='bottom-components-container'> */}
                    {showReviews && <MyReviewsComponent setShowReviews={setShowReviews} />}
                    {showSpots && <MySpotsComponent spots={spots} />}
                    {/* <h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1> */}
                    {/* </div> */}
                </div>
            </div>
        </div >
    )
}

export default ProfileComponent