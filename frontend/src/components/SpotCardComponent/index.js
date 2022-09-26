import './SpotCardComponent.css';

const SpotCardComponent = ({ spot }) => {
    return (
        <>
            <div className='spot-card-container'>
                <div className='spot-card-image-container'>
                    <img className='spot-card-image' src={spot?.Images[0].url} alt='spot' />
                </div>
                <div className='spot-card-info'>
                    <h1>{spot?.name}</h1>
                    <h2>{spot?.location}</h2>
                    <h2>{spot?.price}</h2>
                </div>
            </div>
        </>
    )
}


export default SpotCardComponent;
