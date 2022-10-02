import './MyBookings.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, fetchMyBookings } from '../../../store/bookings';
import { useHistory } from 'react-router-dom';
import EditBookingCalendar from './EditBookingCalendar';
import BookingCard from './BookingCard';

const MyBookings = ({ bookings }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const bookings = Object.values(useSelector(state => state.bookings))
    const todaysDate = new Date();
    const [showCalendar, setShowCalendar] = useState(false);
    const [index, setIndex] = useState(null);

    return (
        <div className='my-reviews-container'>
            <div className='my-reviews'>
                <h1>My Bookings</h1>
            </div>
            <div className='my-bookings-body-container'>
                {bookings?.map((booking, i) => (
                    <div key={i}>
                        <BookingCard booking={booking} />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default MyBookings;
