import ProfileCard from './ProfileCard'
import './ProfileComponent.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMyReviews } from '../../store/reviews'
import { fetchMySpots } from '../../store/spots'
import MyReviewsComponent from './MyReviews'
import MySpotsComponent from './MySpots'
import MyBookings from './MyBookings'
import BookmarkComponent from './BookmarkComponent'
import { fetchMyBookmarks } from '../../store/bookmarks'
import { fetchMyBookings } from '../../store/bookings'

const ProfileComponent = ({ setLocation }) => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const reviews = Object.values(useSelector(state => state.reviews))
    const spots = Object.values(useSelector(state => state.spots))
    const numBookmarks = Object.values(useSelector(state => state.bookmarks)).length
    let bookings = Object.values(useSelector(state => state.bookings))
    bookings = bookings.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))

    const [showReviews, setShowReviews] = useState(true)
    const [showSpots, setShowSpots] = useState(false)
    const [showBookings, setShowBookings] = useState(false)
    const [showBookmarks, setShowBookmarks] = useState(false)

    useEffect(() => {
        dispatch(fetchMyReviews())
        dispatch(fetchMySpots())
        dispatch(fetchMyBookmarks())
        dispatch(fetchMyBookings())
        setLocation(window.location.pathname)
    }, [dispatch, setLocation])

    const handleShowReview = e => {
        e.preventDefault()
        setShowReviews(true)
        setShowSpots(false)
        setShowBookings(false)
        setShowBookmarks(false)
    }

    const handleShowSpots = e => {
        e.preventDefault()
        setShowReviews(false)
        setShowSpots(true)
        setShowBookings(false)
        setShowBookmarks(false)
    }

    const handleShowBookings = e => {
        e.preventDefault()
        setShowReviews(false)
        setShowSpots(false)
        setShowBookings(true)
        setShowBookmarks(false)
    }

    const handleShowBookmarks = e => {
        e.preventDefault()
        setShowReviews(false)
        setShowSpots(false)
        setShowBookings(false)
        setShowBookmarks(true)
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
                        <div style={{ paddingTop: '1em', paddingLeft: '.2em' }} className='fa-solid fa-bookmark'>
                            <span className='spot-count'>{numBookmarks} Bookmarks</span>
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
                            <li>
                                <div onClick={handleShowBookmarks}>My Bookmarks</div>
                            </li>
                        </ol>
                    </div>
                    {showReviews && <MyReviewsComponent />}
                    {showSpots && <MySpotsComponent spots={spots} />}
                    {showBookings && <MyBookings bookings={bookings} />}
                    {showBookmarks && <BookmarkComponent />}
                </div>
            </div>
        </div >
    )
}

export default ProfileComponent
