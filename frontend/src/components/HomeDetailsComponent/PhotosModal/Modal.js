import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';


const PicModal = ({ showModal, setShowModal, images, setNavBar, i, setI }) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const handleRight = e => {
        e.preventDefault()
        setI(prev => prev + 1)
    }

    const handleLeft = e => {
        e.preventDefault()
        setI(prev => prev - 1)
    }


    return (
        <>
            {showModal ? (
                <div className='photos-modal-background' ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <div className='modal-wrapper'>
                            <div className='photos-modal-content'>
                                {i !== 0 ? (
                                    <div className='arrow-container'>
                                        <button onClick={handleLeft} className='fa-solid fa-angle-left arrow-button'>
                                        </button></div>)
                                    : (<div></div>)}
                                <div className='current-image'>
                                    <img
                                        className='mid-image'
                                        src={images[i].url ? images[i].url : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                                        alt='preview' />
                                </div>
                                {i !== images.length - 1 ? (
                                    <div className='arrow-container'>
                                        <button onClick={handleRight} className='fa-solid fa-angle-right arrow-button'>
                                        </button>
                                    </div>)
                                    : (<div></div>)}
                            </div>
                            <button className='fa solid fa-x close-button' aria-label='Close modal' onClick={() => {
                                setNavBar(true)
                                setShowModal(prev => !prev)
                            }}></button>
                        </div>
                    </animated.div>
                </div >
            ) : null}
        </>
    )
}

export default PicModal
