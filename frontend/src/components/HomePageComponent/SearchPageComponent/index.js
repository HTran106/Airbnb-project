import './SearchPageComponent.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSpot } from '../../../store/search'


const SearchPageComponent = () => {
    const spots = Object.values(useSelector(state => state.spots))

    return (
        <>
            <div className='search-page-container'>

            </div>
        </>
    )
}

export default SearchPageComponent;
