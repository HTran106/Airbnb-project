import './PreviewHomesComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllSpots } from '../../../../store/spots'


const HomePreviews = () => {
    const dispatch = useDispatch()
    const spots = Object.values(useSelector(state => state.spots))
    const spotsLeft = spots?.filter((spot, i) => i < 3)
    const spotsRight = spots?.filter((spot, i) => i > 2 && i < 6)
    console.log(spotsLeft)

    useEffect(() => {
        dispatch(fetchAllSpots())
    }, [dispatch])

    return (
        <div className='preview-homes-container'>
            <div className='preview-homes-left'>
                <div className='left-top'>
                    {/* {spotsLeft[0] && (
                        <img src={spotsLeft[0]?.}
                    )} */}
                </div>
            </div>
            <div className='preview-homes-right'>

            </div>
        </div>
    )
}

export default HomePreviews
