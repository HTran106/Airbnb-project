import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';


const PicModal = ({ showModal, setShowModal, images }) => {
    const modalRef = useRef()
    const [i, setI] = useState(0)

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    console.log(images)

    return (
        <>
            {showModal ? (
                <div className='photos-modal-background' ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <div className='modal-wrapper'>
                            {/* <img className='photos-modal-img' src={'http://2.bp.blogspot.com/-6puRWRY2UGY/UeeGtTaUACI/AAAAAAAAAto/hmFQyMpD0d8/s1600/luxury+homes4.jpg'} alt='preview' /> */}
                            <div className='photos-modal-content'>
                                {i !== 1 ? (<div className='arrow-container'><button className='fa-solid fa-angle-left arrow-button'></button></div>) : (<div></div>)}
                                <div className='current-image'>
                                    <img className='mid-image' src={images[i].url} alt='preview' />
                                </div>
                                {i !== images.length - 1 ? (<div className='arrow-container'><button className='fa-solid fa-angle-right arrow-button'></button></div>) : (<div></div>)}
                            </div>
                            <button className='fa solid fa-x close-button' aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}></button>
                        </div>
                    </animated.div>
                </div >
            ) : null}
        </>
    )
}

export default PicModal
