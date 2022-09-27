import './PreviewHomesComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllSpots } from '../../../store/spots'

const HomePreviews = ({ spots }) => {
    const dispatch = useDispatch()
    // const spots = Object.values(useSelector(state => state.spots))

    // useEffect(() => {
    //     dispatch(fetchAllSpots())
    // }, [dispatch])

    return (
        <>
            {
                spots.length && (<div className='preview-homes-container'>
                    <div className='preview-homes-left'>
                        {/* add onClick to home details */}
                        <div className='left-top'>
                            <div>
                                {/* need real image */}
                                <img
                                    className='preview-image'
                                    src={spots[0]?.Images[0]?.url}
                                    alt='previewImage'>
                                </img>
                            </div>
                            {/* {spotsLeft[0] && (
                        <img src={spotsLeft[0]?.}
                    )} */}
                            <div style={{ fontSize: '1.3em' }} className='city-name'>
                                <span className='stays'>100+ stays</span>
                                <span>{spots[0]?.city}</span>
                            </div>
                        </div>
                        <div className='left-bottom-container'>
                            <div className='left-bottom' style={{ marginRight: '.3em' }}>
                                <div >
                                    <img
                                        className='preview-image'
                                        src={spots[1]?.Images[0]?.url}
                                        alt='previewImage'>
                                    </img>
                                </div>
                                <div className='city-name'>
                                    <span className='stays'>100+ stays</span>
                                    <span>{spots[1]?.city}</span>
                                </div>
                            </div>
                            <div style={{ marginLeft: '.5em' }} className='left-bottom'>
                                <div>
                                    <img
                                        className='preview-image'
                                        src={spots[2]?.Images[0]?.url}
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
                            <div className='right-top' style={{ marginRight: '1em' }}>
                                <div>
                                    <img
                                        className='preview-image'
                                        src={spots[3]?.Images[0]?.url}
                                        alt='previewImage'>
                                    </img>
                                </div>
                                <div className='city-name'>
                                    <span className='stays'>100+ stays</span>
                                    <span>{spots[3]?.city}</span>
                                </div>
                            </div>
                            <div className='right-top'>
                                <div>
                                    <img
                                        className='preview-image'
                                        src={spots[4]?.Images[0]?.url}
                                        alt='previewImage'>
                                    </img>
                                </div>
                                <div className='city-name'>
                                    <span className='stays'>100+ stays</span>
                                    <span>{spots[4]?.city}</span>
                                </div>
                            </div>
                        </div>
                        <div className='right-bottom'>
                            <div>
                                {/* need real image */}
                                <img
                                    className='preview-image'
                                    src={spots[5]?.Images[0]?.url}
                                    alt='previewImage'>
                                </img>
                            </div>
                            {/* {spotsLeft[0] && (
                        <img src={spotsLeft[0]?.}
                    )} */}
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
