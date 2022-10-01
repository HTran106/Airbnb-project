import './BookmarkComponent.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMyBookmarks } from '../../../store/bookmarks';
import { deleteBookmark } from '../../../store/bookmarks';

const BookmarkComponent = () => {
    const dispatch = useDispatch();
    const bookmarks = Object.values(useSelector(state => state.bookmarks))

    useEffect(() => {
        dispatch(fetchMyBookmarks())
    }, [dispatch])

    const handleDelete = () => {
        dispatch(deleteBookmark())
    }

    return (
        <div style={{ paddingTop: '5em' }}>
            <button onClick={handleDelete}>Bookmark</button>
        </div>
    )
}

export default BookmarkComponent;
