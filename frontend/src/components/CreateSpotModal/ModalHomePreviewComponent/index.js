import './ModalHomePreviewComponent.css';
import validator from 'validator'
import IncludedComponent from '../HostSpotIncludedComponent';
import GoogleMapComponentSpot from '../GoogleMapsComponent';

const ModalHomePreviewComponent = ({ setLocation, data }) => {
    const [name, description, address, city, state, country, lat, lng, price, image1, image2, image3, image4, image5, image6] = data

    return (
        <>
            {(name || description || address || city || state || country || lat || lng || price || image1 || image2 || image3 || image4 || image5 || image6) && (
                <>
                    <div className="create-spot-preview-container">
                        <div className='modal-preview-container'>
                            <span className='host-spot-house-name'>{name}</span>
                            <div className='host-spot-addy-container'>
                                <span>{address}</span>
                            </div>
                            {image1 && (
                                <img src={validator.isURL(image1) ? image1 : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'} alt='img1'></img>
                            )}
                            {city && state && country && (
                                <div className='city-state-country-container'>
                                    <span>Luxury stay in {city ? city : null}{state ? ', ' + state : null} {country ? ', ' + country : null}</span>
                                </div>
                            )}
                            {description && (
                                <div className='host-spot-preview-description-container'>
                                    <span>{description}</span>
                                </div>
                            )}
                            <div className='host-spot-photos-container'>
                                <div className='host-spot-photos-top'>
                                    {image2 && (
                                        <img src={validator.isURL(image2) ? image2 : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'} alt='img2'></img>
                                    )}
                                    {image3 && (
                                        <img style={{ marginLeft: '.3em' }} src={validator.isURL(image3) ? image3 : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'} alt='img3'></img>
                                    )}
                                </div>
                                <div className='host-spot-photos-bottom'>
                                    {image4 && (
                                        <img style={{ paddingTop: '.3em', paddingRight: '.2em' }} src={validator.isURL(image4) ? image4 : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'} alt='img4'></img>
                                    )}
                                    {image5 && (
                                        <img style={{ paddingTop: '.3em', paddingLeft: '.15em' }} src={validator.isURL(image5) ? image5 : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'} alt='img5' />
                                    )}
                                    {image6 && (
                                        <img style={{ paddingTop: '.3em', paddingLeft: '.3em' }} src={validator.isURL(image6) ? image6 : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'} alt='img6' />
                                    )}
                                </div>
                            </div>
                            <div className='host-luxe-description-container'>
                                <div className='luxe-description-content-container'>
                                    <div className='luxe-description-logo'>
                                        <span className='host-luxe'>Luxe</span>
                                        <span style={{ borderLeft: '1px solid black', color: 'black' }} className='EVENTS'>EVENTS</span>
                                    </div>
                                    <div className='luxe-description-header'>
                                        <span className='luxe-description-extraordinary'>Extraordinary homes with five-star everything</span>
                                    </div>
                                    <div className='luxe-description-description'>
                                        <p className='luxe-description'>
                                            Pristine and expertly designed, each Luxe home comes with luxury amenities, services, and a dedicated trip designer.  We’re here to help you plan the perfect home to host all your events, from start to finish.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <IncludedComponent />
                            {lat && lng && (
                                <GoogleMapComponentSpot lat={lat} lng={lng} city={city} state={state} />
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ModalHomePreviewComponent
