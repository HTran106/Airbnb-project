import './SpotCardComponent.css';
import { useState } from 'react'

const SpotCardComponent = ({ spot }) => {
    const [index, setIndex] = useState(0)
    const [showArrow, setShowArrow] = useState(false)

    const handleLeft = e => {
        e.preventDefault()
        setIndex(prev => prev - 1)
    }

    const handleRight = e => {
        e.preventDefault()
        setIndex(prev => prev + 1)
    }

    return (
        <>
            <div className='spot-card-container'>
                <div
                    style={{ backgroundImage: `url(${spot?.Images[index]?.url})` }}
                    className='spot-card-image spot-card-image-container'
                    onMouseOver={() => setShowArrow(true)}
                    onMouseLeave={() => setShowArrow(false)}
                >
                    {showArrow && index !== 0 ? (
                        <div>
                            <button onClick={handleLeft} className='fa-solid fa-angle-left card-left'>
                            </button></div>)
                        : (<div></div>)
                    }
                    {showArrow && index !== spot?.Images.length - 1 ? (
                        <div>
                            <button onClick={handleRight} className='fa-solid fa-angle-right card-right'>
                            </button>
                        </div>)
                        : (<div></div>)}
                </div>
                <div className='spot-card-info'>
                    <span className='spot-card-name'>{spot?.name}</span>
                </div>
                <div>
                    <span className='spot-card-location'>{spot?.city}, {spot?.state}</span>
                </div>
                <div>
                    <span className='spot-card-price'>{spot?.price?.toLocaleString("en-US", { style: 'currency', currency: 'USD' })} night</span>
                </div>
            </div>
        </>
    )
}

export default SpotCardComponent;
