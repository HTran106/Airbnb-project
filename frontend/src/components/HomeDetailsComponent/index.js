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

const HomeDetailsComponent = ({ setNavBar }) => {
    const { spotId } = useParams();

    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots[spotId]);
    const user = useSelector(state => state.session.user);

    const [showReserve, setShowReserve] = useState(true);

    useEffect(() => {
        dispatch(fetchOneSpot(+spotId))
    }, [dispatch, spotId])

    useEffect(() => {
        if (spot?.ownerId === user?.id) {
            setShowReserve(false)
        }
    }, [spot])

    return (
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
                                {spot?.avgStarRatings !== 'NaN' ? spot?.avgStarRatings : null}  ·  {spot?.numReviews} reviews  ·
                                <span> {spot?.city}, {spot?.state}</span>
                            </span>
                        </div>
                        <div className='big-image'>
                            <img className='spot-image' src={spot?.images[0].url} alt='spot' />
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
                                    src={spot?.images[1]?.url}
                                    alt="previewImage"
                                />
                            </div>
                            <div style={{ paddingLeft: '.2em' }}>
                                <img
                                    style={{ borderRadius: '0 1em 0 0' }}
                                    src={spot?.images[2]?.url}
                                    alt="previewImage"
                                />
                            </div>
                        </div>
                        <div className='home-details-photos-bottom'>
                            <div style={{ paddingRight: '.2em', marginTop: '.3em' }}>
                                <img
                                    style={{ borderRadius: '0 0 0 1em' }}
                                    src={spot?.images[3]?.url}
                                    alt="previewImage"
                                />
                            </div>
                            <div style={{ paddingLeft: '.2em', paddingRight: '.2em', marginTop: '.3em' }}>
                                <img
                                    src={spot?.images[4]?.url}
                                    alt="previewImage"
                                />
                            </div>
                            <div style={{ paddingLeft: '.2em', marginTop: '.3em' }}>
                                <img
                                    style={{ borderRadius: '0 0 1em 0' }}
                                    src={spot?.images[5]?.url}
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
                <h1>hey</h1>
            </div>
        </>
    )
}

export default HomeDetailsComponent
