import './Maps.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const GoogleMapComponent = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    const center = useMemo(() => (
        {
            lat: 44,
            lng: -80
        }
    ), [])


    if (!isLoaded) return <div>....loading</div>

    return (
        <>
            <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`}>
                <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                    <Marker position={center} />
                </GoogleMap>
            </script>
        </>
    )
}

export default GoogleMapComponent


// import { Wrapper, Status } from '@googlemaps/react-wrapper'

// const GoogleMapComponent = () => {
//     const render = (status: Status) => {
//         return <h1>{status}</h1>
//     };

//     <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} render={render}>
//         <Component />
//     </Wrapper>
// }

// const Component = () => {
//     return (
//         <h1>map</h1>
//     )
// }

// export default GoogleMapComponent
