import './PreviewHomesComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllSpots } from '../../../store/spots'
import { useHistory } from 'react-router-dom'

const HomePreviews = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const spots = Object.values(useSelector(state => state.spots))

    useEffect(() => {
        dispatch(fetchAllSpots())
    }, [dispatch])

    return (
        <>
            {
                spots.length && (<div className='preview-homes-container'>
                    <div className='preview-homes-left'>
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => history.push(`/search/${spots[0]?.city}`)}
                            className='left-top'>
                            <div>
                                {spots[0]?.images[0] && <img
                                    className='preview-image'
                                    src={spots[0]?.images[0]?.url ? spots[0]?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                    alt='previewImage'>
                                </img>}
                            </div>
                            <div style={{ fontSize: '1.3em' }} className='city-name'>
                                <span className='stays'>100+ stays</span>
                                <span>{spots[0]?.city}</span>
                            </div>
                        </div>
                        <div className='left-bottom-container'>
                            <div

                                onClick={() => history.push(`/search/${spots[1]?.city}`)}
                                className='left-bottom'
                                style={{ marginRight: '.3em', cursor: 'pointer' }}>
                                <div >
                                    <img
                                        className='preview-image'
                                        src={spots[1]?.images[0]?.url ? spots[1]?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                        alt='previewImage'>
                                    </img>
                                </div>
                                <div className='city-name'>
                                    <span className='stays'>100+ stays</span>
                                    <span>{spots[1]?.city}</span>
                                </div>
                            </div>
                            <div
                                onClick={() => history.push(`/search/${spots[2]?.city}`)}
                                style={{ marginLeft: '.5em', cursor: 'pointer' }}
                                className='left-bottom'>
                                <div>
                                    <img
                                        className='preview-image'
                                        src={spots[2]?.images[0]?.url ? spots[2]?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                        alt='previewImage'>
                                    </img>
                                </div>
                                <div className='city-name'>
                                    <span className='stays'>100+ stays</span>
                                    <span>{spots[2]?.city}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='preview-homes-right'>
                        <div className='left-bottom-container'>
                            <div
                                onClick={() => history.push(`/search/${spots[3]?.city}`)}
                                className='right-top'
                                style={{ cursor: 'pointer', marginRight: '1em' }}>
                                <div>
                                    <img
                                        className='preview-image'
                                        src={spots[3]?.images[0]?.url ? spots[3]?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                        alt='previewImage'>
                                    </img>
                                </div>
                                <div className='city-name'>
                                    <span className='stays'>100+ stays</span>
                                    <span>{spots[3]?.city}</span>
                                </div>
                            </div>
                            <div
                                onClick={() => history.push(`/search/${spots[4]?.city}`)}
                                style={{ cursor: 'pointer' }}
                                className='right-top'>
                                <div>
                                    <img
                                        className='preview-image'
                                        src={spots[4]?.images[0]?.url ? spots[4]?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                        alt='previewImage'>
                                    </img>
                                </div>
                                <div className='city-name'>
                                    <span className='stays'>100+ stays</span>
                                    <span>{spots[4]?.city}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => history.push(`/search/${spots[5]?.city}`)}
                            style={{ cursor: 'pointer' }}
                            className='right-bottom'>
                            <div>
                                <img
                                    className='preview-image'
                                    src={spots[5]?.images[0]?.url ? spots[5]?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                    alt='previewImage'>
                                </img>
                            </div>
                            <div style={{ fontSize: '1.3em' }} className='city-name'>
                                <span className='stays'>100+ stays</span>
                                <span>{spots[5]?.city}</span>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default HomePreviews
