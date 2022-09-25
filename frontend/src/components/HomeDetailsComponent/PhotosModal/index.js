import React, { useState } from 'react'
import PicModal from './Modal'
import './Modal.css'

const PhotosModal = ({ images, setNavBar }) => {
    const [showModal, setShowModal] = useState(false)
    const [i, setI] = useState(0)

    const openModal = () => {
        setShowModal(prev => !prev)
        setNavBar(false)
        setI(0)
    }


    return (
        <div className='photos-modal-container'>
            <button className='all-photos-button' onClick={openModal}>Show all photos</button>
            <PicModal i={i} setI={setI} setNavBar={setNavBar} showModal={showModal} setShowModal={setShowModal} images={images} />
        </div>
    )
}

export default PhotosModal
