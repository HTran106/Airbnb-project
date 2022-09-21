import './PreviewHomesComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllSpots } from '../../../store/spots'


const HomePreviews = () => {
    const dispatch = useDispatch()
    const spots = Object.values(useSelector(state => state.spots))
    const spotsLeft = spots?.filter((spot, i) => i < 3)
    const spotsRight = spots?.filter((spot, i) => i > 2 && i < 6)
    console.log(spots[0]?.Images[0]?.url)

    useEffect(() => {
        dispatch(fetchAllSpots())
    }, [dispatch])

    return (
        <div className='preview-homes-container'>
            <div className='preview-homes-left'>
                {/* add onClick to home details */}
                <div className='left-top'>
                    <div>
                        {/* need real image */}
                        <img
                            className='preview-image'
                            src='https://tse1.mm.bing.net/th?id=OIP.ZKCOe0Zhtu5GFLhNZwiEYwHaF7&pid=Api&P=0' alt='previewImage'>
                        </img>
                    </div>
                    {/* {spotsLeft[0] && (
                        <img src={spotsLeft[0]?.}
                    )} */}
                    <div style={{ fontSize: '1.3em' }} className='city-name'>
                        <span className='stays'>100+ stays</span>
                        <span>{spots[8]?.city}</span>
                    </div>
                </div>
                <div className='left-bottom-container'>
                    <div className='left-bottom'>
                        <div>
                            <img
                                className='preview-image'
                                src='https://tse1.mm.bing.net/th?id=OIP.ZKCOe0Zhtu5GFLhNZwiEYwHaF7&pid=Api&P=0' alt='previewImage'>
                            </img>
                        </div>
                        <div className='city-name'>
                            <span className='stays'>100+ stays</span>
                            <span>{spots[10]?.city}</span>
                        </div>
                    </div>
                    <div style={{ marginLeft: '1em', marginRight: '0' }} className='left-bottom'>
                        <div>
                            <img
                                className='preview-image'
                                src='https://tse1.mm.bing.net/th?id=OIP.ZKCOe0Zhtu5GFLhNZwiEYwHaF7&pid=Api&P=0' alt='previewImage'>
                            </img>
                        </div>
                        <div className='city-name'>
                            <span className='stays'>100+ stays</span>
                            <span>{spots[15]?.city}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='preview-homes-right'>
                <div className='left-bottom-container'>
                    <div className='right-top'>
                        <div>
                            <img
                                className='preview-image'
                                src='https://tse1.mm.bing.net/th?id=OIP.ZKCOe0Zhtu5GFLhNZwiEYwHaF7&pid=Api&P=0' alt='previewImage'>
                            </img>
                        </div>
                        <div className='city-name'>
                            <span className='stays'>100+ stays</span>
                            <span>{spots[3]?.city}</span>
                        </div>
                    </div>
                    <div style={{ marginLeft: '1em', marginRight: '0' }} className='right-top'>
                        <div>
                            <img
                                className='preview-image'
                                src='https://tse1.mm.bing.net/th?id=OIP.ZKCOe0Zhtu5GFLhNZwiEYwHaF7&pid=Api&P=0' alt='previewImage'>
                            </img>
                        </div>
                        <div className='city-name'>
                            <span className='stays'>100+ stays</span>
                            <span>{spots[18]?.city}</span>
                        </div>
                    </div>
                </div>
                <div className='right-bottom'>
                    <div>
                        {/* need real image */}
                        <img
                            className='preview-image'
                            src='https://tse1.mm.bing.net/th?id=OIP.ZKCOe0Zhtu5GFLhNZwiEYwHaF7&pid=Api&P=0' alt='previewImage'>
                        </img>
                    </div>
                    {/* {spotsLeft[0] && (
                        <img src={spotsLeft[0]?.}
                    )} */}
                    <div style={{ fontSize: '1.3em' }} className='city-name'>
                        <span className='stays'>100+ stays</span>
                        <span>{spots[19]?.city}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePreviews
