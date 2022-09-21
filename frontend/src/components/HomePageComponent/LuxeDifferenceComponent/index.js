import './LuxeDifference.css'

const LuxeDifferenceComponent = () => {
    return (
        <div className='luxe-difference-container'>
            <div className='luxe-difference'>
                <span>The LUXE difference</span>
            </div>
            <div className='amenities'>
                <div className='amenities-box'>
                    <div className="fa-solid fa-trophy fa-xl amenities-box-content"></div>
                    <div style={{ fontWeight: '600' }} className='amenities-box-words'>Expertly designed</div>
                    <div className='amenities-box-words'>Statement-making homes with exceptionally styled interiors</div>
                </div>
                <div className='amenities-box'>
                    <div className="fa-solid fa-user-tie fa-xl amenities-box-content"></div>
                    <div style={{ fontWeight: '600' }} className='amenities-box-words'>Luxury amenities</div>
                    <div className='amenities-box-words'>Fully equipped to meet your needs, with ample space and privacy</div>
                </div>
                <div className='amenities-box'>
                    <div className="fa-solid fa-clipboard-list fa-xl amenities-box-content"></div>
                    <div style={{ fontWeight: '600' }} className='amenities-box-words'>Custom itineraries</div>
                    <div style={{ width: '100%' }} className='amenities-box-words'>Your trip designer can plan every last detail and make sure everything is just right</div>
                </div>
            </div>
            <div style={{ paddingTop: '2em' }} className='amenities'>
                <div className='amenities-box'>
                    <div className="fa-solid fa-check-double fa-xl amenities-box-content"></div>
                    <div style={{ fontWeight: '600' }} className='amenities-box-words'>300-point inspection and vetting</div>
                    <div className='amenities-box-words'>Statement-making homes with exceptionally styled interiors</div>
                </div>
                <div className='amenities-box'>
                    <div className="fa-solid fa-plane-circle-check fa-xl amenities-box-content"></div>
                    <div style={{ fontWeight: '600' }} className='amenities-box-words'>Effortless arrivals</div>
                    <div className='amenities-box-words'>Statement-making homes with exceptionally styled interiors</div>
                </div>
                <div className='amenities-box'>
                    <div className="fa-solid fa-kitchen-set fa-xl amenities-box-content"></div>
                    <div style={{ fontWeight: '600' }} className='amenities-box-words'>Tailored services</div>
                    <div className='amenities-box-words'>Statement-making homes with exceptionally styled interiors</div>
                </div>
            </div>
        </div>
    )
}

export default LuxeDifferenceComponent
