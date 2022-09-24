import './BookingComponent.css';
import Calendar from 'react-calendar';
import './Calendar.css';
import { useState } from 'react';

const BookingComponent = () => {
    const [checkInValue, setCheckInValue] = useState(new Date());
    const [checkOutValue, setCheckOutValue] = useState(new Date());

    const tileDisabled = ({ activeStartDate, date, view }) => {
        return date < new Date()
    }

    const tileDisabled2 = ({ activeStartDate, date, view }) => {
        return date < checkInValue && date < new Date()
    }

    return (
        <div className="booking-component-container">
            <div className='calendar'>
                <div className='checkin-word-container'>
                    <span className="select-checkin-words">Select check-in date</span>
                </div>
                <Calendar tileDisabled={tileDisabled} onChange={setCheckInValue} value={checkInValue} />
                <h1>hey</h1>
                <h1>hey</h1>
                <h1>hey</h1>
                <h1>hey</h1>
            </div>
            <div className='calendar'>
                <div className='checkin-word-container'>
                    <span className="select-checkin-words">Select check-out date</span>
                </div>
                <Calendar tileDisabled={tileDisabled2} onChange={setCheckOutValue} value={checkOutValue} />
            </div>
            <div className="booking-card">

            </div>
        </div>
    )
}

export default BookingComponent
