import './GoogleMapsSearch.css'
import { GoogleMap, useLoadScript, Marker, InfoBox, InfoWindow } from '@react-google-maps/api';
import { useMemo, useState, useEffect, forceUpdate } from 'react';
import SpotCardComponent from '../../SpotCardComponent';
import { useHistory } from 'react-router-dom';

const GoogleMapComponentSearch = ({ spots }) => {
    let lat = spots?.length <= 10 ? +spots[0]?.lat?.toFixed(2) : 36.53
    let lng = spots?.length <= 10 ? +spots[0]?.lng?.toFixed(2) : -116.93

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    const center = useMemo(() => {
        if (lat && lng) {
            return { lat, lng }
        } else {
            return { lat: 36.53, lng: -116.93 }
        }
    }, [lat, lng])

    if (!isLoaded) return <div>....loading</div>

    return (
        <>
            <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`}>
            </script>
            <div className='search-google-maps-container'>
                {spots?.length <= 10 && (<GoogleMap zoom={10} center={center} mapContainerClassName="search-map-container">
                    {spots?.map(spot => {
                        const position = { lat: +spot?.lat, lng: +spot?.lng }
                        return (
                            <div key={spot?.id} id={`spot${spot?.id}`}>
                                <InfoBox
                                    position={position}
                                >
                                    <div
                                        id={spot.id} className='info-box-container'
                                        style={{ backgroundColor: 'white', borderRadius: '1em', height: '2em' }}
                                    >
                                        <span className='info-box-price'>
                                            ${spot?.price?.toLocaleString("en-US")}
                                        </span>
                                    </div>
                                </InfoBox>
                            </div>
                        )
                    })}
                </GoogleMap>)}
                {spots?.length >= 10 && (<GoogleMap zoom={6} center={center} mapContainerClassName="search-map-container">
                    {spots?.map(spot => {
                        const position = { lat: +spot?.lat, lng: +spot?.lng }
                        return (
                            <div key={spot?.id} id={`spot${spot?.id}`}>
                                <InfoBox
                                    // onLoad={onLoad}
                                    // options={options}
                                    position={position}
                                >
                                    <div
                                        id={spot.id} className='info-box-container'
                                        style={{ backgroundColor: 'white', borderRadius: '1em', height: '2em' }}
                                    >
                                        <span className='info-box-price'>
                                            ${spot?.price?.toLocaleString("en-US")}
                                        </span>
                                    </div>
                                </InfoBox>
                            </div>
                        )
                    })}
                </GoogleMap>)}
            </div>
        </>
    )
}

export default GoogleMapComponentSearch;

// const options = { closeBoxURL: '', enableEventPropagation: true };

// const onLoad = infoBox => {
//     console.log('infoBox: ', infoBox)
// };

// <InfoBox
//     onLoad={onLoad}
//     options={options}
//     position={center}
// >
//     <div style={{ backgroundColor: 'white', padding: 12 }}>
                //         <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                //             Hello, World!
                //         </div>
                //     </div>
                // </InfoBox>
