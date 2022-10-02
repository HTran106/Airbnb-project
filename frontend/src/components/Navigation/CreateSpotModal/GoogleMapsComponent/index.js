import './GoogleMapsSpot.css'
import { GoogleMap, useLoadScript, Marker, InfoBox } from '@react-google-maps/api';
import { useMemo } from 'react';

const GoogleMapComponentSpot = ({ lat, lng, city, state }) => {
    lat = +lat;
    lng = +lng;


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
            <div className='home-details-map-container-2'>
                <div style={{ paddingBottom: '2em' }} className='location-word'>
                    <span>Location:</span>
                </div>
                <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </>
    )
}

export default GoogleMapComponentSpot

