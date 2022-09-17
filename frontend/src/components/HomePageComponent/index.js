import HomeSearchComponent from "./HomeSearchComponent"
import './HomePageComponent.css'
import HomePreviews from "./HomeSearchComponent/PreviewHomesComponent"

const HomePageComponent = () => {
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
        </div>
    )
}

export default HomePageComponent
