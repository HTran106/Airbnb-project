import './ReviewsComponent.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpotReviews } from '../../../store/reviews';
import AddReviewFormModal from '../../AddReviewFormModal';
import { deleteReview } from '../../../store/reviews'
import EditReviewFormModal from '../../EditReviewFormModal';

export const months = {
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
    const user = useSelector(state => state.session.user)

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

    const exist = reviews.find(review => review.userId === user?.id)



    return (
        <>
            {showReviews && (
                <div id='reviews' className='reviews-container'>
                    <div className='reviews-star-container'>
                        <div className='fa-solid fa-star reviews-star'>
                            <span className='avg-star'>
                                {spot?.avgStarRatings !== 'NaN' ? spot?.avgStarRatings : null} ({spot?.numReviews} reviews)
                            </span>


                        </div>
                        {exist === undefined && (
                            <AddReviewFormModal spot={spot} />
                        )}
                        {/* <button>add a review</button> */}
                    </div>
                    <div className='reviews-section-container'>
                        {reviews?.map(review => (
                            <div key={review?.id} className='reviews-card-container'>
                                <div className='profile-image-area'>
                                    <img
                                        className='review-profile-image'
                                        src={review?.User?.profileImage ? review?.User?.profileImage : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                        alt='profileImage' />
                                    <div className='name-container'>
                                        <span style={{ fontWeight: '600' }}>
                                            {review?.User?.firstName}
                                        </span>
                                        <div className='join-date-container'>
                                            <span className='user-join-date'>
                                                {months[new Date(review?.User?.createdAt).getMonth()]} {new Date(review?.User?.createdAt).getFullYear()}
                                            </span>
                                            {review?.userId === user?.id ?
                                                <div>
                                                    <EditReviewFormModal review={review} />
                                                    <span
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            dispatch(deleteReview(spot?.id, review?.id))
                                                        }}
                                                        style={{ paddingLeft: '.5em' }} className='edit-review-button'> Delete</span>
                                                </div> : null}
                                        </div>
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
        </>
    )
}

export default ReviewsComponent;
