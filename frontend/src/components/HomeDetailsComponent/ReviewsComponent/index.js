import './ReviewsComponent.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpotReviews } from '../../../store/reviews';

const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}


const ReviewsComponent = ({ spot }) => {
    const dispatch = useDispatch();
    const reviews = Object.values(useSelector(state => state.reviews));

    const [showReviews, setShowReviews] = useState(false);

    useEffect(() => {
        if (spot?.id) {
            dispatch(fetchSpotReviews(spot?.id))
        }
    }, [dispatch, spot])

    useEffect(() => {
        if (reviews.length) {
            setShowReviews(true);
        }
    }, [reviews])


    return (
        <>
            {showReviews && (
                <div className='reviews-container'>
                    <div className='fa-solid fa-star reviews-star'>
                        <span className='avg-star'>
                            {spot?.avgStarRatings !== 'NaN' ? spot?.avgStarRatings : null} ({spot?.numReviews} reviews)
                        </span>
                    </div>
                    <div className='reviews-section-container'>
                        {reviews?.map(review => (
                            <div className='reviews-card-container'>
                                <div className='profile-image-area'>
                                    <img className='review-profile-image' src={review?.User?.profileImage} alt='profileImage' />
                                    <div className='name-container'>
                                        <span style={{ fontWeight: '600' }}>
                                            {review?.User?.firstName}
                                        </span>
                                        <span className='user-join-date'>
                                            {months[new Date(review?.User?.createdAt).getMonth()]} {new Date(review?.User?.createdAt).getFullYear()}
                                        </span>
                                    </div>
                                </div>
                                <div className='review-body'>
                                    {review?.review}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                )}
                <h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1><h1>HEY</h1>
        </>
    )
}

export default ReviewsComponent;
