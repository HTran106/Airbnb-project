import './GoogleMapsSpot.css'
import { GoogleMap, useLoadScript, Marker, InfoBox } from '@react-google-maps/api';
import { useMemo } from 'react';

const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";


const GoogleMapComponentSpot = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    // const newMarker = new Marker({
    //     position: { lat: 25, lng: -80 },
    //     // map: map,
    //     label: "HELLO"
    // })
    const options = { closeBoxURL: '', enableEventPropagation: true };

    const onLoad = infoBox => {
        console.log('infoBox: ', infoBox)
    };


    const center = useMemo(() => (
        {
            lat: 44,
            lng: -80
        }
    ), [])


    if (!isLoaded) return <div>....loading</div>

    document.addEventListener('cilck', () => {
        console.log('clicked')
    })

    return (
        <>
            <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`}>
            </script>
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                <Marker position={center} />
            </GoogleMap>
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
