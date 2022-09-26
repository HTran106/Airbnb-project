import './SearchBar.css'
import Calendar from 'react-calendar'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import { addDays, subDays } from 'date-fns'
import { fetchSearchSpots } from '../../../../store/spots'
import { useDispatch } from 'react-redux'

const SearchBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [location, setLocation] = useState('')
    const [checkIn, setCheckIn] = useState(null)
    const [checkOut, setCheckOut] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const handleSearch = e => {
        e.preventDefault()
        dispatch(fetchSearchSpots({ location, checkIn, checkOut }))
    }

    return (
        <div className='search-bar'>
            <div className='actual-search-bar'>
                <div className='search-area'>
                    <div className='location'>
                        <span>LOCATION</span>
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
                {/* <div className='calendar-container'>
                    <div className='calendar-area-container'>
                        <div className='check-in'>
                            <span>CHECK IN (optional)</span>
                        </div>
                        <div className='date-input'>
                            <input
                                className='text'
                                type='date'
                                value={checkIn}
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
                                value={checkOut}
                                type='date'
                                min={Date.now()}
                                onChange={e => setCheckOut(e.target.value)}
                            >
                            </input>
                        </div>
                    </div>
                </div> */}
                <div className='search-button'>
                    <button onClick={handleSearch}>
                        <div className='search-text'>
                            Search
                        </div>
                    </button>
                </div>
                {/* <Calendar /> */}

            </div>
        </div >
    )
}

export default SearchBar
