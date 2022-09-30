import './MyBookings.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, fetchMyBookings } from '../../../store/bookings';
import { useHistory } from 'react-router-dom';
import EditBookingCalendar from './EditBookingCalendar';
import { a } from 'react-spring';

const MyBookings = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const bookings = Object.values(useSelector(state => state.bookings))
    const todaysDate = new Date();
    const [showCalendar, setShowCalendar] = useState(false);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        dispatch(fetchMyBookings())
    }, [dispatch]);

    const handleDeleteBooking = (bookingId) => {
        dispatch(deleteBooking(bookingId))
    }

    return (
        <div className='my-reviews-container'>
            <div className='my-reviews'>
                <h1>My Bookings</h1>
            </div>
            <div className='my-bookings-body-container'>
                {bookings.map((booking, i) => (
                    <>
                        <div key={i} className='review-card-container'>
                            <div className='review-spot-img-container'>
                                <img
                                    onClick={() => history.push(`/spots/${booking?.Spot?.id}`)}
                                    className='review-spot-img'
                                    src={booking?.Spot?.images[0]?.url ? booking?.Spot?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                    alt='booking-image' />
                            </div>
                            <div className='my-reviews-content'>
                                <div className='my-reviews-spot-name-container'>
                                    <span
                                        onClick={() => history.push(`/spots/${booking?.Spot?.id}`)}
                                        className='my-reviews-spot-name'
                                    >{booking?.Spot?.city}
                                    </span>
                                    {new Date(booking?.startDate) <= todaysDate && new Date(booking?.endDate) >= todaysDate ?
                                        <span className='current-booking-txt'>Current Booking</span> :
                                        new Date(booking?.endDate) < todaysDate ?
                                            <span className='current-booking-txt'>Past Booking</span> :
                                            <div className='edit-delete-container'>
                                                <span
                                                    onClick={() => setShowCalendar(true)}
                                                    className='edit-delete-buttons'>Edit</span>
                                                <span
                                                    onClick={() => handleDeleteBooking(booking?.id)}
                                                    className='edit-delete-buttons'
                                                >Delete</span>
                                            </div>}
                                </div>
                                <span className='hosted-by'>Hosted by {booking?.Spot?.Owner?.firstName} {booking?.Spot?.Owner?.lastName}</span>
                                <div className='booking-date-container'>
                                    <span style={{ fontSize: '1.1em' }} className='review-word'>
                                        Booking Dates:
                                    </span>
                                    <br></br>
                                    <br></br>
                                    <span className='my-booking-dates'>
                                        {new Date(booking?.startDate).toLocaleString().split(', ')[0]} - {' '}
                                        {new Date(booking?.endDate).toLocaleString().split(', ')[0]}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {showCalendar && (<div>
                            <EditBookingCalendar bookingId={booking?.id} spot={booking?.Spot} />
                        </div>)}
                    </>
                ))}
            </div>
        </div>
    )
}

export default MyBookings;
