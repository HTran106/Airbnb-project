import './IncludedComponent.css';

export const images = [
    "https://airbnb-files.s3.us-west-1.amazonaws.com/bartender.jpeg Bartender",
    "https://airbnb-files.s3.us-west-1.amazonaws.com/butler.jpeg Butler",
    "https://airbnb-files.s3.us-west-1.amazonaws.com/chef.jpeg Chef",
    "https://airbnb-files.s3.us-west-1.amazonaws.com/childcare.jpeg Childcare",
    "https://airbnb-files.s3.us-west-1.amazonaws.com/driver.jpeg Driver",
    "https://airbnb-files.s3.us-west-1.amazonaws.com/housekeeping.jpeg Housekeeping",
    "https://airbnb-files.s3.us-west-1.amazonaws.com/security.jpeg Security",
    "https://airbnb-files.s3.us-west-1.amazonaws.com/spa.jpeg Spa",
]

const IncludedComponent = () => {
    return (
        <>
            <div className='included-container'>
                <div className='included-with-home-container'>
                    <span className='included-with-home-word'>Included with this home</span>
                </div>
                <div className='included-with-home-container'>
                    <span className='included-essentials'>Helpful essentials you can expect when booking this home</span>
                </div>
                <div className='images'>
                    {images?.map((imgSrc, i) => (
                        <div key={i} className='image-container'>
                            <img className='image' src={imgSrc.split(" ")[0]} alt='included' />
                            <span className='amenity-word'>{imgSrc.split(" ")[1]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default IncludedComponent;
