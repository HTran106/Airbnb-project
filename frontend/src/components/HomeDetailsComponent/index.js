import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchOneSpot } from '../../store/spots';
import './HomeDetailsComponent.css';
import PhotosModal from './PhotosModal';
import BookingComponent from './BookingComponent';
import IncludedComponent from './IncludedComponent';
import ReviewsComponent from './ReviewsComponent';
import GoogleMapComponentSpot from './GoogleMapsComponent';

const HomeDetailsComponent = ({ setNavBar, setLocation }) => {
    const { spotId } = useParams();

    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots[spotId]);
    const user = useSelector(state => state.session.user);

    const [showReserve, setShowReserve] = useState(true);

    useEffect(() => {
        dispatch(fetchOneSpot(+spotId))
    }, [dispatch, spotId])

    useEffect(() => {
        if (spot && user && spot?.ownerId === user?.id) {
            setShowReserve(false)
        }
    }, [spot, user])

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [dispatch])

    return (
        <>
            {spot && (
                <>
                    <div className='home-details-page-container'>
                        <div className='content-container'>
                            <div className='home-details-name-image-container'>
                                <div className='spot-name'>
                                    <span>{spot?.name}</span>
                                    {showReserve && <a className='reserve' href="#calendar">Reserve</a>}
                                </div>
                                <div className='fa-solid fa-star avg-reviews-area'>
                                    <span className='ratings-font'>
                                        {spot?.avgStarRatings !== 'NaN' ? spot?.avgStarRatings : null} · <a href={spot?.numReviews !== 0 ? '#reviews' : null}>{spot?.numReviews} reviews</a>
                                        <span> · {spot?.city}, {spot?.state}</span>
                                    </span>
                                </div>
                                <div className='big-image'>
                                    <img className='spot-image' src={spot?.images[0]?.url ? spot?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'} alt='spot' />
                                </div>
                            </div>
                            <div className='description-container'>
                                <div className='city-description'>
                                    <span className='city-state'>Luxury Stay in {spot?.city}, {spot?.state}, {spot?.country}</span>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                    <p>{spot?.description}</p>
                                </div>
                                <div className='hospitality-container'>
                                    <p className='hospitality'>Hospitality by
                                        <span> LUXE RETREATS</span>
                                    </p>
                                </div>
                            </div>
                            <div className='home-details-photos-container'>
                                <div className='home-details-photos-top'>
                                    <div style={{ paddingRight: '.2em' }}>
                                        <img
                                            style={{ borderRadius: '1em 0 0 0' }}
                                            src={spot?.images[1]?.url ? spot?.images[1]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                            alt="previewImage"
                                        />
                                    </div>
                                    <div style={{ paddingLeft: '.2em' }}>
                                        <img
                                            style={{ borderRadius: '0 1em 0 0' }}
                                            src={spot?.images[2]?.url ? spot?.images[2]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                            alt="previewImage"
                                        />
                                    </div>
                                </div>
                                <div className='home-details-photos-bottom'>
                                    <div style={{ paddingRight: '.2em', marginTop: '.3em' }}>
                                        <img
                                            style={{ borderRadius: '0 0 0 1em' }}
                                            src={spot?.images[3]?.url ? spot?.images[3]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                            alt="previewImage"
                                        />
                                    </div>
                                    <div style={{ paddingLeft: '.2em', paddingRight: '.2em', marginTop: '.3em' }}>
                                        <img
                                            src={spot?.images[4]?.url ? spot?.images[4]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                            alt="previewImage"
                                        />
                                    </div>
                                    <div style={{ paddingLeft: '.2em', marginTop: '.3em' }}>
                                        <img
                                            style={{ borderRadius: '0 0 1em 0' }}
                                            src={spot?.images[5]?.url ? spot?.images[5]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                            alt="previewImage"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id='hey' >
                                {/* <div className='show-all-photos-container'> */}
                                <PhotosModal setNavBar={setNavBar} images={spot?.images} />
                                {/* </div> */}
                            </div>
                            {showReserve && <BookingComponent spot={spot} />}
                        </div>
                        <div className='luxe-description-container'>
                            <div className='luxe-description-content-container'>
                                <div className='luxe-description-logo'>
                                    <span className='luxe'>Luxe</span>
                                    <span style={{ borderLeft: '1px solid black' }} className='EVENTS'>EVENTS</span>
                                </div>
                                <div className='luxe-description-header'>
                                    <span className='luxe-description-extraordinary'>Extraordinary homes with five-star everything</span>
                                </div>
                                <div className='luxe-description-description'>
                                    <p className='luxe-description'>
                                        Pristine and expertly designed, each Luxe home comes with luxury amenities, services, and a dedicated trip designer.  We’re here to help you plan the perfect home to host all your events, from start to finish.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <IncludedComponent />
                        <ReviewsComponent spot={spot} />
                        <GoogleMapComponentSpot spot={spot} />
                    </div>
                    <div className='bottom-filler-container'>
                        <div className='filler-inside-container'>
                            <span>© Luxe Events by Huydu Tran</span>
                            <span style={{ paddingRight: '1em' }}>$ USD</span>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default HomeDetailsComponent
