import './SearchPageComponent.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapComponentSearch from './GoogleMapsComponentSearch';
import SpotCardComponent from '../SpotCardComponent';
import { useParams } from 'react-router-dom';
import { fetchSearchSpots, searchAllSpot } from '../../store/search'
import { fetchAllSpots } from '../../store/spots';

document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

const SearchPageComponent = ({ setLocation }) => {
    const dispatch = useDispatch();
    const { location, checkIn, checkOut } = useParams()
    const spots = Object.values(useSelector(state => state.search))
    const allSpots = Object.values(useSelector(state => state.spots))

    useEffect(() => {
        if ((location && location.length) || checkIn || checkOut) {
            dispatch(fetchSearchSpots({ location, checkIn, checkOut }))
        } else {
            dispatch(searchAllSpot())
        }
        setLocation(window.location.pathname)
    }, [dispatch, location, checkIn, checkOut, setLocation])

    useEffect(() => {
        dispatch(fetchAllSpots())
    }, [dispatch])

    return (
        <>
            <div className='search-page-container'>
                <div className='search-left-container'>
                    {spots.length ? spots?.map(spot => (
                        <SpotCardComponent spot={spot} key={spot?.id} />
                    )) :
                        <>
                            <h1>There are no spots matching your search</h1>
                            <br></br>
                            <h2>Here are some other popular destinations:</h2>
                            {allSpots.map(spot => (
                                <SpotCardComponent spot={spot} key={spot?.id} />
                            ))}
                        </>
                    }
                </div>
                <div className='search-right-maps'>
                    <GoogleMapComponentSearch spots={spots} allSpots={allSpots} />
                </div>
            </div>

        </>
    )
}

export default SearchPageComponent;
