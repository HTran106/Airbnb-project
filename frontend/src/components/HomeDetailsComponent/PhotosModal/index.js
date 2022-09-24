import React, { useState } from 'react'
import PicModal from './Modal'
import './Modal.css'

const PhotosModal = ({ images }) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        <div className='photos-modal-container'>
            <button className='all-photos-button' onClick={openModal}>Show all photos</button>
            <PicModal showModal={showModal} setShowModal={setShowModal} images={images} />
            {/* <GlobalStyle /> */}
        </div>
    )
}

export default PhotosModal
