import './GoogleMapsSearch.css'
import { GoogleMap, useLoadScript, Marker, InfoBox } from '@react-google-maps/api';
import { useMemo } from 'react';

const GoogleMapComponentSearch = ({ spots }) => {
    const lat = +spots[0]?.lat?.toFixed(2);
    const lng = +spots[0]?.lng?.toFixed(2);


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
                <GoogleMap zoom={10} center={center} mapContainerClassName="search-map-container">
                    <Marker position={center} />
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
