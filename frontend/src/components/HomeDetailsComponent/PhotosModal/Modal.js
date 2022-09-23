import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';


const PicModal = ({ showModal, setShowModal }) => {
    const modalRef = useRef()

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

    return (
        <>
            {showModal ? (
                <div className='photos-modal-background' ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <div className='modal-wrapper'>
                            <img className='photos-modal-img' src={'http://2.bp.blogspot.com/-6puRWRY2UGY/UeeGtTaUACI/AAAAAAAAAto/hmFQyMpD0d8/s1600/luxury+homes4.jpg'} alt='preview' />
                            <div className='photos-modal-content'>
                                <h1>Testing new modal</h1>
                                <p>Make me work</p>
                                <button>IT WORKS</button>
                            </div>
                            <button className='fa solid fa-x close-button' aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}></button>
                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    )
}

export default PicModal
