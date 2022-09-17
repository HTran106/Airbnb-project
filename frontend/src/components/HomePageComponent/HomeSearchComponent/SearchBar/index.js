import './SearchBar.css'
import Calendar from 'react-calendar'
import { useState } from 'react'

const SearchBar = () => {

    return (
        <div className='search-bar'>
            <div className='actual-search-bar'>
                <div className='search-area'>
                    <div className='location'>
                        <span>LOCATION</span>
                    </div>
                    <div style={{ width: '80%' }} className='search-input'>
                        <input
                            type='search'
                            placeholder='Anywhere'
                        ></input>
                    </div>
                </div>
                <div className='calendar-container'>
                    <div className='calendar-area-container'>
                        <div className='check-in'>
                            <span>CHECK IN</span>
                        </div>
                        <div className='date-input'>
                            <input
                                className='text'
                                type='date'
                                placeholder='Add Date'
                                min={Date.now()}
                            >
                            </input>
                        </div>
                    </div>
                    <div className='calendar-area-container2'>
                        <div className='check-in'>
                            <span>CHECK OUT</span>
                        </div>
                        <div className='date-input'>
                            <input
                                className='text'
                                type='date'
                                placeholder='Add Date'
                                min={Date.now()}
                            >
                            </input>
                        </div>
                    </div>
                </div>
                <div className='search-button'>
                    <button>
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
