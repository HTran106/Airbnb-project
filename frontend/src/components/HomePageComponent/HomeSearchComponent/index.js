import './HomeSearchComponent.css'
import SearchBar from './SearchBar'

const HomeSearchComponent = () => {
    return (
        <div className='home-search-container'>
            <div className="home-search-area-container">
                <div className='home-search-area'>
                    <div className='home-destination-container'>
                        <span>Every home is a destination</span>
                    </div>
                    <div className='searchbar-container'>
                        <SearchBar />
                    </div>
                </div>
            </div>
            <div className='home-search-bottom'>
                <p>The best of luxury retreats, Luxe Events is offering the world's most extraordinary homes with the highest standard of service for all your event needs.</p>
            </div>
        </div>
    )
}

export default HomeSearchComponent
