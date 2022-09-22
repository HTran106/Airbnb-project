import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOneSpot } from '../../store/spots';
import './HomeDetailsComponent.css';

const HomeDetailsComponent = () => {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spots[spotId]);

    useEffect(() => {
        dispatch(fetchOneSpot(+spotId))
    }, [dispatch])



    return (
        <div className='home-details-page-container'>
            <div className='content-container'>
                <div className='home-details-name-image-container'>
                    <div className='spot-name'>
                        <span>{spot?.name}</span>
                    </div>
                    <div className='big-image'>
                        <img className='spot-image' src={'https://images4.alphacoders.com/829/829688.jpg'} alt='spot' />
                    </div>
                </div>
                <div className='description-container'>
                    <div className='city-description'>
                        <span className='city-state'>Luxury Stay in {spot?.city}, {spot?.state}, {spot?.country}</span>
                    </div>
                    <div style={{ marginTop: '2em' }}>
                        <p>{spot?.description}</p>
                    </div>
                    <div className='hospitality-container'>
                        <p className='hospitality'>Hospitality by
                            <span> LUXE RETREATS</span>
                        </p>
                    </div>
                </div>
                <div className='home-details-photos-container'>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetailsComponent
