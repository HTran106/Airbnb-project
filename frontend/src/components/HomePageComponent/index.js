import HomeSearchComponent from "./HomeSearchComponent"
import './HomePageComponent.css'
import '../HomeDetailsComponent/IncludedComponent/IncludedComponent.css';
import HomePreviews from "./PreviewHomesComponent"
import LuxeDifferenceComponent from "./LuxeDifferenceComponent"
import { useEffect } from "react"
import { images } from "../HomeDetailsComponent/IncludedComponent"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSpots } from "../../store/spots";

const HomePageComponent = ({ setLocation }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        setLocation(window.location.pathname)
    }, [dispatch])



    return (
        <div className="home-container">
            <HomeSearchComponent />
            <div className="home-previews-container">
                <div className="home-wording">
                    <span className="extraordinary">The world's most extraordinary homes</span>
                    <span className="expertly-design">A selection of pristine, expertly designed homes with high-end amenities, and services.</span>
                </div>
                <HomePreviews />
            </div>
            <LuxeDifferenceComponent />
            <div className="personalize-container">
                <h1 className="amenities-h1">Luxury amenities for all homes</h1>
                <p>When you book a Luxe home, you with get the best service along with all the best amenities.</p>
                {images?.map((imgSrc, i) => {
                    return (
                        <div key={i} className='image-container'>
                            <img className='image' src={imgSrc.split(" ")[0]} alt='included' />
                            <span className='amenity-word'>{imgSrc.split(" ")[1]}</span>
                        </div>
                    )
                })}
            </div>
            <div className='bottom-filler-container'>
                <div className='filler-inside-container'>
                    <span>© Luxe Events by Huydu Tran</span>
                    <span style={{ paddingRight: '1em' }}>$ USD</span>
                </div>
            </div>
        </div>
    )
}

export default HomePageComponent
