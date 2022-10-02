import './MyBookings.css';
import BookingCard from './BookingCard';

const MyBookings = ({ bookings }) => {

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
