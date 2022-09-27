import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMyReviews } from '../../../store/reviews';
import { months } from '../../HomeDetailsComponent/ReviewsComponent/index';
import './MyReviews.css'

const MyReviewsComponent = () => {
    const dispatch = useDispatch();
    const reviews = Object.values(useSelector(state => state.reviews));
    console.log(reviews)

    useEffect(() => {
        dispatch(fetchMyReviews())
    }, [dispatch])

    return (
        <>
            <div className='my-reviews-container'>
                {reviews?.map(review => (
                    <div key={review?.id} className='review-card-container'>
                        <div className='review-spot-img-container'>
                            <img className='review-spot-img' src={review?.Spot?.images[0].url} alt='spot' />
                        </div>
                        <div className='my-reviews-content'>
                            <div>
                                <span className='my-reviews-spot-name'>{review?.Spot.name}</span>
                            </div>
                            <div>
                                <span className='my-reviews-date'>{months[new Date(review?.createdAt).getMonth()]} {new Date(review?.createdAt).getFullYear()}</span>
                            </div>
                            <div >
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
