import './BookingComponent.css';
import './Datepicker.css';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { subDays, addDays } from 'date-fns';
import { createBooking } from '../../../store/bookings';

const BookingComponent = ({ bookings, spot }) => {
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showSummary, setShowSummary] = useState(false);
    const [confirmButton, setConfirmButton] = useState('Reserve')
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (startDate && endDate) {
            if (new Date(startDate) <= new Date(endDate)) {
                setDisabled(false)
            } else {
                setDisabled(true)
            }
        }
    }, [startDate, endDate])


    const excludedDates = bookings?.map(booking => {
        return {
            start: subDays(new Date(booking?.startDate), 1),
            end: addDays(new Date(booking?.endDate), 1)
        }
    })

    console.log(excludedDates)


    const numDays = (startDate, endDate) => {
        if (startDate <= endDate) {
            const oneDay = 24 * 60 * 60 * 1000;
            const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
            return diffDays;
        } else {
            return 0
        }
    }



    const openSummary = e => {
        e.preventDefault();
        setShowSummary(true);
    }

    const handleBooking = e => {
        e.preventDefault();
        dispatch(createBooking({ startDate, endDate }, spot?.id))
            .then(() => {
                setDisabled(true)
                setConfirmButton('Confirmed ✓')
                // dispatch(fetchBookingsForSpot(spot?.id))
                bookings.push({ start: new Date(startDate), end: new Date(endDate) })
            })
    }

    return (
        <>
            <div className="booking-component-container">
                <div style={showSummary ? { justifyContent: 'center' } : null} className="booking-card-container">
                    <div className='booking-card'>
                        <div className='title'>
                            <span className='price'>
                                ${(spot?.price)?.toLocaleString("en-US")}
                                <span className='night'> night</span>
                            </span>
                            <div className='fa-solid fa-star review-star fa-sm booking-reviews'>
                                <span className='avg-review'>{spot?.avgStarRatings !== 'NaN' ? spot?.avgStarRatings : null} ·
                                    <a className='all-reviews' href={`#reviews`}>{spot?.numReviews} reviews</a>
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
                                    minDate={addDays(new Date(), 1)}
                                    excludeDateIntervals={excludedDates}
                                    placeholderText='mm/dd/yyyy'
                                />
                            </div>
                            <div className='right-input'>
                                <DatePicker
                                    className='right-input-radius'
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    minDate={addDays(startDate, 1)}
                                    excludeDateIntervals={excludedDates}
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
                                    alt='house-pic'
                                />
                            </div>
                            <div className='top-card-wording-container'>
                                <span className='entire'>Entire villa</span>
                                <span className='name'>{spot?.name}</span>
                                <span className='fa-solid fa-star fa-xs booking-star'>
                                    <span className='booking-star-words'>
                                        {spot?.avgStarRatings !== 'NaN' ? spot?.avgStarRatings : null}
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
                                <button
                                    onClick={handleBooking}
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

export default BookingComponent
