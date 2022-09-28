import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteReview, fetchMyReviews } from '../../../store/reviews';
import { months } from '../../HomeDetailsComponent/ReviewsComponent/index';
import './MyReviews.css'
import { useHistory } from 'react-router-dom';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyReviewsComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const reviews = Object.values(useSelector(state => state.reviews));


    useEffect(() => {
        dispatch(fetchMyReviews())
    }, [dispatch, reviews?.length])

    return (
        <>
            <div className='my-reviews-container'>
                {reviews?.map(review => (
                    <div key={review?.id} className='review-card-container'>
                        <div className='review-spot-img-container'>
                            <img
                                onClick={() => history.push(`/spots/${review?.Spot?.id}`)}
                                className='review-spot-img' src={review?.Spot?.images[0].url}
                                alt='spot'
                            />
                        </div>
                        <div className='my-reviews-content'>
                            <div className='my-reviews-spot-name-container'>
                                <span
                                    onClick={() => history.push(`/spots/${review?.Spot?.id}`)}
                                    className='my-reviews-spot-name'>{review?.Spot.name}
                                </span>
                                <div className='edit-delete-container'>
                                    <Popup trigger={<span className='edit-delete-buttons'>Edit</span>} position="top center">
                                        <div>Popup content here !!</div>
                                    </Popup>
                                    <span id='delete' onClick={() => {
                                        dispatch(deleteReview(review?.Spot.id, review?.id))
                                    }}
                                        className='edit-delete-buttons'>Delete</span>
                                </div>
                            </div>
                            <div>
                                {new Array(review?.stars).fill(0).map((star, i) => (
                                    <span key={i} className='fa-solid fa-star star-custom'></span>
                                ))}
                                <span className='my-reviews-date'> {months[new Date(review?.createdAt).getMonth()]} {new Date(review?.createdAt).getFullYear()}</span>
                            </div>
                            <div>
                                <span className='review-word'>
                                    Review:
                                </span>
                                <br></br>
                                <span className='my-reviews-review'>{review?.review}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default (MyReviewsComponent)
