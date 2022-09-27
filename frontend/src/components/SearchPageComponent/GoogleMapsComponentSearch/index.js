import './GoogleMapsSearch.css'
import { GoogleMap, useLoadScript, Marker, InfoBox, InfoWindow } from '@react-google-maps/api';
import { useMemo, useState, useEffect } from 'react';
import SpotCardComponent from '../../SpotCardComponent';
import { useHistory } from 'react-router-dom';

const GoogleMapComponentSearch = ({ spots }) => {

    const history = useHistory()
    let lat = spots?.length <= 10 ? +spots[0]?.lat?.toFixed(2) : 37.17
    let lng = spots?.length <= 10 ? +spots[0]?.lng?.toFixed(2) : -119.73

    const [zoom, setZoom] = useState(6);
    const [openWindow, setOpenWindow] = useState(false);

    useEffect(() => {
        spots?.length <= 10 ? setZoom(10) : setZoom(6)
    }, [spots])




    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })


    const center = useMemo(() => {
        if (lat && lng) {
            return { lat, lng }
        }
    }, [lat, lng])

    if (!isLoaded) return <div>....loading</div>

    return (
        <>
            <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`}>
            </script>
            <div className='search-google-maps-container'>
                <GoogleMap zoom={zoom} center={center} mapContainerClassName="search-map-container">
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
                                    ><span className='info-box-price'>
                                            ${spot?.price?.toLocaleString("en-US")}
                                        </span>
                                    </div>
                                </InfoBox>
                            </div>
                        )
                    })}
                </GoogleMap>
            </div>
        </>
    )
}

export default GoogleMapComponentSearch;


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
