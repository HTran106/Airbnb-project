import './SearchBar.css'


const SearchBar = () => {
    return (
        <div className='search-bar'>
            <div className='actual-search-bar'>
                <div className='search-area'>
                    <div className='location'>
                        <span>LOCATION</span>
                    </div>
                    <div className='search-input'>
                        <input
                            type='search'
                            placeholder='Anywhere'
                        ></input>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchBar
