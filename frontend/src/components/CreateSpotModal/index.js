import React, { useState } from 'react';
import { CreateSpotModal } from '../../context/Modal';
import CreateSpotForm from './CreateSpotForm';

function CreateSpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='update-button' onClick={() => setShowModal(true)}>Host a spot</button>
            {showModal && (
                <CreateSpotModal onClose={() => setShowModal(false)}>
                    <CreateSpotForm setShowModal={setShowModal} />
                </CreateSpotModal>
            )}
        </>
    );
}

export default CreateSpotFormModal;
