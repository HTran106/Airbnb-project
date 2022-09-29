import './MySpotsComponent.css'
import { useHistory } from 'react-router-dom'
import CreateSpotFormModal from '../../CreateSpotModal'

const MySpotsComponent = ({ spots }) => {
    const history = useHistory()

    return (
        <>
            <div className='my-spots'>
                <h1 style={{ paddingLeft: '.4em' }}>My Spots</h1>
                <div className='host-spot-button-container'>
                    <CreateSpotFormModal />
                </div>
            </div>
            <div className='my-spots-container'>
                {spots?.map(spot => (
                    <div key={spot?.id} className='my-spot-card-container'>
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
                                <span className='edit-delete-buttons'>Edit</span>
                                <span
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
                            <img src={spot?.images[0].url} alt='spotImage' className='my-spot-image' />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MySpotsComponent
