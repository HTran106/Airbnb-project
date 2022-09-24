import './BookingComponent.css';
import Calendar from 'react-calendar';
import './Datepicker.css';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookingsForSpot } from '../../../store/bookings';
import { subDays, addDays } from 'date-fns';

const BookingComponent = ({ spot }) => {
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(startDate), 1));
    const [showSummary, setShowSummary] = useState(false);

    let bookings = Object.values(useSelector(state => state.bookings));

    bookings = bookings?.map(booking => {
        return {
            start: subDays(new Date(booking.startDate), 1),
            end: addDays(new Date(booking.endDate), 1)
        }
    })


    const numDays = (startDate, endDate) => {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
        return diffDays;
    }

    const openSummary = e => {
        e.preventDefault();
        setShowSummary(true);
    }

    useEffect(() => {
        dispatch(fetchBookingsForSpot(spot?.id));
    }, [dispatch, spot?.id])


    return (
        <>
            <div id='calendar' className="booking-component-container">
                <div style={showSummary ? { justifyContent: 'center' } : null} className="booking-card-container">
                    <div className='booking-card'>
                        <div className='title'>
                            <span className='price'>
                                ${(spot?.price)?.toLocaleString("en-US")}
                                <span className='night'> night</span>
                            </span>
                            <div className='fa-solid fa-star review-star fa-sm booking-reviews'>
                                <span className='avg-review'>{spot?.avgStarRatings} ·
                                    <a className='all-reviews' href={`/spots/${spot?.id}/reviews`}>{spot?.numReviews} reviews</a>
                                </span>
                            </div>
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
                                    minDate={new Date()}
                                    excludeDateIntervals={bookings}
                                    placeholderText='mm/dd/yy'
                                />
                            </div>
                            <div className='right-input'>
                                <DatePicker
                                    className='right-input-radius'
                                    selected={addDays(startDate, 1)}
                                    onChange={date => setEndDate(date)}
                                    minDate={addDays(startDate, 1)}
                                    excludeDateIntervals={bookings}
                                    placeholderText='mm/dd/yy'
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
                                <img className='small-image' src={spot?.images[0]?.url}>
                                </img>
                            </div>
                            <div className='top-card-wording-container'>
                                <span className='entire'>Entire villa</span>
                                <span className='name'>{spot?.name}</span>
                                <span className='fa-solid fa-star fa-xs booking-star'>
                                    <span className='booking-star-words'>
                                        {spot?.avgStarRatings}
                                        <span style={{ color: 'rgb(179, 174, 174)' }}> ({spot?.numReviews} reviews)
                                        </span>
                                    </span>
                                </span>
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
                                <button className='long-reserve-button'>Reserve</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <h1>hey</h1>
            <h1>hey</h1>
            <h1>hey</h1>
            <h1>hey</h1>
            <h1>hey</h1>
        </>
    )
}

export default BookingComponent
