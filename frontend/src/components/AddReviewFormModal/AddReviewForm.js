import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { createAReview } from "../../store/reviews";
import './AddReview.css'


function AddReviewForm({ spot }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [reviewBody, setReviewBody] = useState('');
    const [reviewStars, setReviewStars] = useState(0);
    const [starOne, setStarOne] = useState('fa-regular fa-star')
    const [starTwo, setStarTwo] = useState('fa-regular fa-star')
    const [starThree, setStarThree] = useState('fa-regular fa-star')
    const [starFour, setStarFour] = useState('fa-regular fa-star')
    const [starFive, setStarFive] = useState('fa-regular fa-star')

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

    const handleSubmit = e => {
        e.preventDefault();
        if (reviewBody === '') {
            return alert('Please write a review')
        }
        if (reviewStars === 0) {
            return alert('Please select a star rating')
        }
        dispatch(createAReview({ review: reviewBody, stars: reviewStars }, spot.id))
    }


    return (
        <>
            <div className='add-review-container'>
                <div className="add-review-username-area">
                    <img className='edit-review-profile-img' src={user?.profileImage ? user?.profileImage : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'} alt='spot' />

                </div>
                <div className='add-review-stars'>
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
            <div className="add-review-modal-button">
                <button onClick={handleSubmit} type='submit' className='update-button'>Add Review</button>
            </div>
        </>
    );
}

export default AddReviewForm;
