import './GoogleMapsSpot.css'
import { GoogleMap, useLoadScript, Marker, InfoBox } from '@react-google-maps/api';
import { useMemo } from 'react';

const GoogleMapComponentSpot = ({ spot }) => {
    const lat = +spot?.lat?.toFixed(2);
    const lng = +spot?.lng?.toFixed(2);


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
            <div className='home-details-map-container'>
                <div className='location-word'>
                    <span>Location</span>
                </div>
                <div>
                    <span className='maps-location-word'>{spot?.city}, {spot?.state}</span>
                </div>
                <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </>
    )
}

export default GoogleMapComponentSpot


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
