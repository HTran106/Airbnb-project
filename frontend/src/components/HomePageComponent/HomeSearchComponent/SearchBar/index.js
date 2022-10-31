import './SearchBar.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
    const history = useHistory()

    const [location, setLocation] = useState('')
    const [checkIn, setCheckIn] = useState(null)
    const [checkOut, setCheckOut] = useState(null)

    const handleSearch = e => {
        e.preventDefault()
        const todaysDate = new Date()
        if (checkIn < todaysDate) {
            alert('Please enter a valid check in date')
            return
        }
        if (checkOut < todaysDate) {
            alert('Please enter a valid check out date')
            return
        }


        if (location.length && checkIn && checkOut) {
            history.push(`/search/${location}/${checkIn}/${checkOut}`)
        } else if (checkIn) {
            if (checkOut) {
                if (checkOut < checkIn) {
                    alert('Please select a valid date range')
                } else {
                    history.push(`/search/${checkIn}/${checkOut}`)
                }
            } else {
                window.alert("Please select a check out date")
            }
        } else if (location.length) {
            history.push(`/search/${location}`)
        } else {
            history.push(`/search`)
        }
    }

    return (
        <div className='search-bar'>
            <div className='actual-search-bar'>
                <div className='search-area'>
                    <div className='location'>
                        <span>LOCATION (optional)</span>
                    </div>
                    <div style={{ width: '80%' }} className='search-input'>
                        <input
                            type='text'
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            placeholder='Anywhere'
                        ></input>
                    </div>
                </div>
                <div className='calendar-container'>
                    <div className='calendar-area-container'>
                        <div className='check-in'>
                            <span>CHECK IN (optional)</span>
                        </div>
                        <div className='date-input'>
                            <input
                                className='text'
                                type='date'
                                onChange={e => setCheckIn(e.target.value)}
                                min={Date.now()}
                            />
                        </div>
                    </div>
                    <div className='calendar-area-container2'>
                        <div className='check-in'>
                            <span>CHECK OUT (optional)</span>
                        </div>
                        <div className='date-input'>
                            <input
                                className='text'
                                type='date'
                                min={Date.now()}
                                onChange={e => setCheckOut(e.target.value)}
                            >
                            </input>
                        </div>
                    </div>
                </div>
                <div className='search-button'>
                    <button onClick={handleSearch}>
                        <div className='search-text'>
                            Search
                        </div>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default SearchBar
