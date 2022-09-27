import './SearchPageComponent.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapComponentSearch from './GoogleMapsComponentSearch';
import SpotCardComponent from '../SpotCardComponent';

document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

const SearchPageComponent = ({ setLocation }) => {
    const spots = Object.values(useSelector(state => state.search))


    useEffect(() => {
        setLocation(window.location.pathname)
    }, [])

    return (
        <>
            <div className='search-page-container'>
                <div className='search-left-container'>
                    {spots?.map(spot => (
                        <SpotCardComponent spot={spot} key={spot?.id} />
                    ))}
                </div>
                <div className='search-right-maps'>
                    <GoogleMapComponentSearch spots={spots} />
                </div>
            </div>

        </>
    )
}

export default SearchPageComponent;
