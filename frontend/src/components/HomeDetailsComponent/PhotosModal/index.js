import React, { useState } from 'react'
import PicModal from './Modal'
import './Modal.css'

const PhotosModal = ({ images, setNavBar }) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
        setNavBar(false)
    }

    return (
        <div className='photos-modal-container'>
            <button className='all-photos-button' onClick={openModal}>Show all photos</button>
            <PicModal setNavBar={setNavBar} showModal={showModal} setShowModal={setShowModal} images={images} />
            {/* <GlobalStyle /> */}
        </div>
    )
}

export default PhotosModal
