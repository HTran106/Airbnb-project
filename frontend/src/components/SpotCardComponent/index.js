import './SpotCardComponent.css';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchOneSpot } from '../../store/spots';

const SpotCardComponent = ({ spot }) => {
    const history = useHistory()
    const dispatch = useDispatch()

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

    const handleOnClick = e => {
        e.preventDefault()
        history.push(`/spots/${spot?.id}`)
    }

    return (
        <>
            <div
                className='spot-card-container'
                onMouseOver={() => {
                    document.getElementById(`${spot?.id}`).style.backgroundColor = 'black'
                    document.getElementById(`${spot?.id}`).style.color = 'white'
                    document.getElementById(`${spot?.id}`).style.position = 'relative'
                    setShowArrow(true)
                }}
                onMouseLeave={() => {
                    document.getElementById(`${spot?.id}`).style.backgroundColor = 'white'
                    document.getElementById(`${spot?.id}`).style.color = 'black'
                    setShowArrow(false)
                }}
            ><div
                style={{ backgroundImage: `url(${spot?.images[index]?.url})` }}
                className='spot-card-image spot-card-image-container'

            >
                    {showArrow && index !== 0 ? (
                        <div>
                            <button onClick={handleLeft} className='fa-solid fa-angle-left card-left'>
                            </button></div>)
                        : (<div></div>)
                    }
                    {showArrow && index !== spot?.images.length - 1 ? (
                        <div>
                            <button onClick={handleRight} className='fa-solid fa-angle-right card-right'>
                            </button>
                        </div>)
                        : (<div></div>)}
                </div>
                <div onClick={handleOnClick} style={{ paddingTop: '.2em' }} className='spot-card-info'>
                    <span className='spot-card-name'>{spot?.name}</span>
                </div>
                <div onClick={handleOnClick} className='spot-card-info'>
                    <span className='spot-card-location'>{spot?.city}, {spot?.state}</span>
                </div>
                <div onClick={handleOnClick} className='spot-card-info'>
                    <span className='spot-card-price'>{spot?.price?.toLocaleString("en-US", { style: 'currency', currency: 'USD' })} night</span>
                </div>
            </div>
        </>
    )
}

export default SpotCardComponent;
