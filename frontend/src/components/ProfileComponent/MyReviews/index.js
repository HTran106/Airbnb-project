import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, createRef } from 'react';
import { deleteReview, editAReview, fetchMyReviews } from '../../../store/reviews';
import { months } from '../../HomeDetailsComponent/ReviewsComponent/index';
import './MyReviews.css'
import { useHistory } from 'react-router-dom';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyReviewsComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const closePopup = (ref) => ref.current.close()

    const [reviewBody, setReviewBody] = useState('');
    const [reviewStars, setReviewStars] = useState(0);
    const [starOne, setStarOne] = useState('fa-regular fa-star')
    const [starTwo, setStarTwo] = useState('fa-regular fa-star')
    const [starThree, setStarThree] = useState('fa-regular fa-star')
    const [starFour, setStarFour] = useState('fa-regular fa-star')
    const [starFive, setStarFive] = useState('fa-regular fa-star')

    const reviews = Object.values(useSelector(state => state.reviews));

    const handleOneStar = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-regular fa-star');
        setStarThree('fa-regular fa-star');
        setStarFour('fa-regular fa-star');
        setStarFive('fa-regular fa-star');
        setReviewStars(1);
    }

    const handleTwoStar = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-solid fa-star');
        setStarThree('fa-regular fa-star');
        setStarFour('fa-regular fa-star');
        setStarFive('fa-regular fa-star');
        setReviewStars(2);
    }

    const handleThreeStar = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-solid fa-star');
        setStarThree('fa-solid fa-star');
        setStarFour('fa-regular fa-star');
        setStarFive('fa-regular fa-star');
        setReviewStars(3);
    }

    const handleFourStar = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-solid fa-star');
        setStarThree('fa-solid fa-star');
        setStarFour('fa-solid fa-star');
        setStarFive('fa-regular fa-star');
        setReviewStars(4);
    }

    const handleFiveStar = () => {
        setStarOne('fa-solid fa-star');
        setStarTwo('fa-solid fa-star');
        setStarThree('fa-solid fa-star');
        setStarFour('fa-solid fa-star');
        setStarFive('fa-solid fa-star');
        setReviewStars(5);
    }

    useEffect(() => {
        dispatch(fetchMyReviews())
    }, [dispatch])

    return (
        <>
            <div className='my-reviews-container'>
                <div className='my-reviews'>
                    <h1>My Reviews</h1>
                </div>
                {reviews?.map(review => {
                    const ref = createRef()
                    return (
                        <div key={review?.id} className='review-card-container'>
                            <div className='review-spot-img-container'>
                                <img
                                    onClick={() => history.push(`/spots/${review?.Spot?.id}`)}
                                    className='review-spot-img'
                                    src={review?.Spot?.images[0].url ? review?.Spot?.images[0].url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                    alt='spot'
                                />
                            </div>
                            <div className='my-reviews-content'>
                                <div className='my-reviews-spot-name-container'>
                                    <span
                                        onClick={() => history.push(`/spots/${review?.Spot?.id}`)}
                                        className='my-reviews-spot-name'>{review?.Spot?.name}
                                    </span>
                                    <div className='edit-delete-container'>
                                        <Popup
                                            ref={ref}
                                            contentStyle={{ width: '400px', height: '250px', borderRadius: '10px' }}
                                            trigger={<span className='edit-delete-buttons'>Edit</span>}
                                            position="top center">
                                            <div className='edit-popup-container'>
                                                <div className='edit-popup-name-container'>
                                                    <img
                                                        className='edit-review-profile-img'
                                                        src={review?.User?.profileImage ? review?.User?.profileImage : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                                        alt='spot' />
                                                    <div className='edit-review-name-container'>
                                                        <div>
                                                            <span>
                                                                {review?.User?.firstName} {review?.User?.lastName}
                                                                <br></br>
                                                                <span className='edit-review-joined-date'>Joined {(new Date(review?.User?.createdAt)).getFullYear()}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='star-container'>
                                                        <i onClick={handleOneStar} className={starOne}></i>
                                                        <i onClick={handleTwoStar} className={starTwo}></i>
                                                        <i onClick={handleThreeStar} className={starThree}></i>
                                                        <i onClick={handleFourStar} className={starFour}></i>
                                                        <i onClick={handleFiveStar} className={starFive}></i>
                                                    </div>
                                                </div>
                                                <div className='edit-review-input-container'>
                                                    <textarea
                                                        value={reviewBody}
                                                        onChange={e => setReviewBody(e.target.value)}
                                                        className='edit-form-text-area'
                                                        placeholder='Write your review here'
                                                        required
                                                    >
                                                    </textarea>
                                                </div>
                                                <div className='update-button-container'>
                                                    <button
                                                        className='update-button'
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            if (reviewStars === 0) {
                                                                return alert('Please select a star rating')
                                                            } else if (reviewBody === '') {
                                                                return alert('Please write a review')
                                                            } else {
                                                                dispatch(editAReview({ review: reviewBody, stars: reviewStars, id: review?.id }, review?.Spot?.id))
                                                                setReviewBody('')
                                                                setReviewStars(0)
                                                                setStarOne('fa-regular fa-star');
                                                                setStarTwo('fa-regular fa-star');
                                                                setStarThree('fa-regular fa-star');
                                                                setStarFour('fa-regular fa-star');
                                                                setStarFive('fa-regular fa-star');
                                                                closePopup(ref)
                                                            }
                                                        }}
                                                    >Update</button>
                                                </div>
                                            </div>
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
                                <div className='review-body-container'>
                                    <span className='review-word'>
                                        Review:
                                    </span>
                                    <br></br>
                                    <span className='my-reviews-review'>{review?.review}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div >
        </>
    )
}

export default MyReviewsComponent
