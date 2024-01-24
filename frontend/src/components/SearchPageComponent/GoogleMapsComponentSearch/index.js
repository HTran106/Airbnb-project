import './GoogleMapsSearch.css'
import { GoogleMap, useLoadScript, InfoBox } from '@react-google-maps/api';
import { useMemo } from 'react';


const GoogleMapComponentSearch = ({ spots, allSpots }) => {
    let lat = spots?.length <= 10 ? +spots[0]?.lat?.toFixed(2) : 36.53
    let lng = spots?.length <= 10 ? +spots[0]?.lng?.toFixed(2) : -116.93

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    const moneyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
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
                {spots?.length === 0 && (<GoogleMap zoom={6} center={{ lat: 36.53, lng: -116.93 }} mapContainerClassName="search-map-container">
                    {allSpots?.map(spot => {
                        const position = { lat: +spot?.lat, lng: +spot?.lng }
                        return (
                            <div key={spot?.id} id={`spot${spot?.id}`}>
                                <div className='infobox-container'>
                                    <InfoBox
                                        position={position}
                                    >
                                        <div
                                            id={spot.id} className='info-box-container'
                                            style={{ backgroundColor: 'white', borderRadius: '1em', height: '2em' }}
                                        >
                                            <span className='info-box-price'>
                                                ${moneyFormatter.format(spot?.price)}
                                            </span>
                                        </div>
                                    </InfoBox>
                                </div>
                            </div>
                        )
                    })}
                </GoogleMap>)}
                {(spots?.length > 0) && (spots?.length <= 10) && (<GoogleMap zoom={10} center={center} mapContainerClassName="search-map-container">
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
                                            ${moneyFormatter.format(spot?.price)}
                                        </span>
                                    </div>
                                </InfoBox>
                            </div>
                        )
                    })}
                </GoogleMap>)}
                {spots?.length > 10 && (<GoogleMap zoom={6} center={{ lat: 36.53, lng: -116.93 }} mapContainerClassName="search-map-container">
                    {spots?.map(spot => {
                        const position = { lat: +spot?.lat, lng: +spot?.lng }
                        return (
                            <div key={spot?.id} id={`spot${spot?.id}`}>
                                <div className='infobox-container'>
                                    <InfoBox
                                        position={position}
                                    >
                                        <div
                                            id={spot.id} className='info-box-container'
                                            style={{ backgroundColor: 'white', borderRadius: '1em', height: '2em' }}
                                        >
                                            <span className='info-box-price'>
                                                ${moneyFormatter.format(spot?.price)}
                                            </span>
                                        </div>
                                    </InfoBox>
                                </div>
                            </div>
                        )
                    })}
                </GoogleMap>)}
            </div>
        </>
    )
}

export default GoogleMapComponentSearch;



// (<GoogleMap zoom={6} center={{ lat: 36.53, lng: -116.93 }} mapContainerClassName="search-map-container">
//     {spots?.map(spot => {
//         const position = { lat: +spot?.lat, lng: +spot?.lng }
//         return (
//             <div key={spot?.id} id={`spot${spot?.id}`}>
//                 <div className='infobox-container'>
//                     <InfoBox
//                         position={position}
//                     >
//                         <div
//                             id={spot.id} className='info-box-container'
//                             style={{ backgroundColor: 'white', borderRadius: '1em', height: '2em' }}
//                         >
//                             <span className='info-box-price'>
//                                 ${spot?.price?.toLocaleString("en-US")}
//                             </span>
//                         </div>
//                     </InfoBox>
//                 </div>
//             </div>
//         )
//     })}
// </GoogleMap>)


// ZOOMED OUT NO SPOTS

// (<GoogleMap zoom={2.5} center={{ lat: 36.53, lng: -116.93 }} mapContainerClassName="search-map-container">
//     {spots?.map(spot => {
//         const position = { lat: +spot?.lat, lng: +spot?.lng }
//         return (
//             <div key={spot?.id} id={`spot${spot?.id}`}>
//                 <InfoBox
//                     position={position}
//                 >
//                     <div
//                         id={spot.id} className='info-box-container'
//                         style={{ backgroundColor: 'white', borderRadius: '1em', height: '2em' }}
//                     >
//                         <span className='info-box-price'>
//                             ${spot?.price?.toLocaleString("en-US")}
//                         </span>
//                     </div>
//                 </InfoBox>
//             </div>
//         )
//     })}
// </GoogleMap>)
