import './MySpotsComponent.css'
import { useHistory } from 'react-router-dom'
import CreateSpotFormModal from '../../CreateSpotModal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSpot, fetchMySpots } from '../../../store/spots'
import EditSpotFormModal from '../../EditSpotModal'
import { useEffect } from 'react'

const MySpotsComponent = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const spots = Object.values(useSelector(state => state.spots))

    useEffect(() => {
        dispatch(fetchMySpots())
    }, [])

    const handleSpotDelete = spotId => {
        dispatch(deleteSpot(spotId))
    }

    return (
        <>
            <div className='my-spots'>
                <h1 style={{ paddingLeft: '.4em' }}>My Spots</h1>
                <div className='host-spot-button-container'>
                    <CreateSpotFormModal />
                </div>
            </div>
            <div className='my-spots-container'>
                {spots?.map((spot, i) => (
                    <div key={i} className='my-spot-card-container'>
                        <div className='my-spot-card-top'>
                            <div className='name-overflow-container'>
                                <span
                                    onClick={() => {
                                        history.push(`/spots/${spot?.id}`)
                                    }}
                                    className='my-spot-name'>{spot?.name}
                                </span>
                            </div>
                            <div>
                                <EditSpotFormModal spot={spot} />
                                <span
                                    onClick={() => handleSpotDelete(spot?.id)}
                                    style={{ paddingLeft: '1em', paddingRight: '.5em' }}
                                    className='edit-delete-buttons'>Delete
                                </span>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                history.push(`/spots/${spot?.id}`)
                            }}
                            className='my-spot-image-container'>
                            <img
                                src={spot?.images[0]?.url ? spot?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                alt='spotImage'
                                className='my-spot-image' />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MySpotsComponent
