import './SearchPageComponent.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapComponentSearch from './GoogleMapsComponentSearch';
import SpotCardComponent from '../SpotCardComponent';


const SearchPageComponent = () => {
    const spots = Object.values(useSelector(state => state.search))

    return (
        <>
            <div className='search-page-container'>
                <div className='search-left-container'>
                    {spots?.map(spot => (
                        <SpotCardComponent spot={spot} />
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
