import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { subDays, addDays } from 'date-fns';
import { editABooking } from '../../../../store/bookings';
import './EditBookingCalendar.css'


const MyEditBookingCalendar = ({ spot, bookingId }) => {
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showSummary, setShowSummary] = useState(false);
    const [confirmButton, setConfirmButton] = useState('Edit Booking')
    const [disabled, setDisabled] = useState(true);

    let bookings = Object.values(useSelector(state => state.bookings));

    bookings = bookings?.map(booking => {
        return {
            start: subDays(new Date(booking.startDate), 1),
            end: addDays(new Date(booking.endDate), 1)
        }
    })

    const numDays = (startDate, endDate) => {
        if (startDate <= endDate) {
            const oneDay = 24 * 60 * 60 * 1000;
            const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
            return diffDays;
        } else {
            return 0
        }
    }

    useEffect(() => {
        if (startDate && endDate) {
            if ((startDate <= endDate)) {
                setDisabled(false)
            } else {
                setDisabled(true)
                alert('Please select a valid date range')
            }
        }
    }, [startDate, endDate])


    const openSummary = e => {
        e.preventDefault();
        setShowSummary(true);
    }

    const handleEditBooking = e => {
        e.preventDefault();
        if (new Date(endDate) > new Date(startDate)) {
            dispatch(editABooking({ startDate, endDate }, bookingId))
                .then(() => {
                    setDisabled(true)
                    setConfirmButton('Confirmed ✓')
                })
        } else {
            alert('Please select a valid date range')
        }
    }

    return (
        <>
            <div className="booking-component-container">
                <div className="booking-card-container">
                    <div className='booking-card'>
                        <div className='title'>
                            <span className='price'>
                                ${(spot?.price)?.toLocaleString("en-US")}
                                <span className='night'> night</span>
                            </span>
                        </div>
                        <div className='checkin-out-container'>
                            <div style={{ paddingLeft: '1em' }} className='checkin-out-words'>
                                Check-in date
                            </div>
                            <div className='checkin-out-words'>
                                Check-out date
                            </div>
                        </div>
                        <div className='datepicker-container'>
                            <div className='left-input'>
                                <DatePicker
                                    className='left-input-radius'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    minDate={addDays(new Date(), 1)}
                                    excludeDateIntervals={[{ start: new Date(), end: new Date() }, ...bookings]}
                                    placeholderText='mm/dd/yyyy'
                                />
                            </div>
                            <div className='right-input'>
                                <DatePicker
                                    className='right-input-radius'
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    minDate={addDays(startDate, 1)}
                                    excludeDateIntervals={bookings}
                                    placeholderText='mm/dd/yyyy'
                                />
                            </div>
                        </div>
                        <div className='long-reserve-container'>
                            <button onClick={openSummary} className='long-reserve-button'>Summary</button>
                        </div>
                    </div>
                </div>
                {showSummary && (
                    <div className='total-container'>
                        <div className='total-card-top-container'>
                            <div className='top-card-img-container'>
                                <img
                                    className='small-image'
                                    src={spot?.images[0]?.url ? spot?.images[0]?.url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                    alt='spot-pic'
                                />
                            </div>
                            <div className='top-card-wording-container'>
                                <span className='entire'>Entire villa</span>
                                <span className='name'>{spot?.name}</span>
                            </div>
                        </div>
                        <div className='total-price-details-container'>
                            <p className='price-details-word'>Price details</p>
                            <div className='price-x-nights-container'>
                                <span className='price-x-nights'>
                                    {spot?.price?.toLocaleString("en-US", { style: 'currency', currency: 'USD' })} x {numDays(new Date(startDate), new Date(endDate))} {numDays(new Date(startDate), new Date(endDate)) <= 1 ? "night" : "nights"}
                                </span>
                                <span className='price-x-nights-total'>
                                    {(spot?.price * numDays(new Date(startDate), new Date(endDate))).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                </span>
                            </div>
                            <div className='price-x-nights-container2'>
                                <span className='price-x-nights'>Cleaning fee</span>
                                <span className='price-x-nights-total'>{(200 * numDays(new Date(startDate), new Date(endDate))).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                            </div>
                            <div className='price-x-nights-container2'>
                                <span className='price-x-nights'>Taxes and fees</span>
                                <span className='price-x-nights-total'>{((spot?.price * numDays(new Date(startDate), new Date(endDate))) * .1275).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                            </div>
                            <div className='price-x-nights-container2'>
                                <span className='total-amt-word'>Total(USD)</span>
                                <span className='total-amt'>
                                    {(spot?.price * numDays(new Date(startDate), new Date(endDate)) + (200 * numDays(new Date(startDate), new Date(endDate))) + ((spot?.price * numDays(new Date(startDate), new Date(endDate))) * .1275)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                </span>
                            </div>
                            <div className='long-reserve-container2'>
                                <button
                                    onClick={handleEditBooking}
                                    className='long-reserve-button'
                                    disabled={disabled}
                                >{confirmButton}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )

}

export default MyEditBookingCalendar
