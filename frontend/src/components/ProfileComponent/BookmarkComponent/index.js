import './BookmarkComponent.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMyBookmarks } from '../../../store/bookmarks';
import { deleteBookmark, createBookmark } from '../../../store/bookmarks';
import { useHistory } from 'react-router-dom';

const BookmarkComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const bookmarks = Object.values(useSelector(state => state.bookmarks))

    useEffect(() => {
        dispatch(fetchMyBookmarks())
    }, [dispatch])

    return (
        <div className='my-reviews-container'>
            <div className='my-reviews'>
                <h1>My Bookmarks</h1>
            </div>
            {bookmarks?.map(bookmark => (
                <div key={bookmark?.id} className='review-card-container'>
                    <div className='review-spot-img-container'>
                        <img
                            onClick={() => history.push(`/spots/${bookmark?.Spot?.id}`)}
                            className='review-spot-img'
                            src={bookmark?.Spot?.images[0]?.url ? bookmark?.Spot?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                            alt='spot'
                        />
                    </div>
                    <div className='my-reviews-content'>
                        <div className='my-reviews-spot-name-container'>
                            <span
                                onClick={() => history.push(`/spots/${bookmark?.Spot?.id}`)}
                                className='my-reviews-spot-name'>{bookmark?.Spot?.name}
                            </span>
                            <div style={{ justifyContent: 'flex-end' }} className='edit-delete-container'>
                                <span
                                    id='delete'
                                    onClick={() => {
                                        dispatch(deleteBookmark(bookmark?.Spot?.id))
                                    }}
                                    className='edit-delete-buttons'>Delete</span>
                            </div>
                        </div>
                        <div>
                            Hosted by {bookmark?.Spot?.Owner?.firstName} {bookmark?.Spot?.Owner?.lastName}
                        </div>
                        <div className='description-body-container'>
                            <span className='review-word'>
                                Description:
                            </span>
                            <br></br>
                            <span className='my-reviews-review'>{bookmark?.Spot?.description}</span>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default BookmarkComponent;
