import React, { useState } from 'react';
import { CreateSpotModal } from '../../context/Modal';
import CreateSpotForm from './CreateSpotForm';

function CreateSpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='update-button' style={{ marginLeft: '-1.3em' }} onClick={() => setShowModal(true)}>Host a spot</button>
            {showModal && (
                <CreateSpotModal onClose={() => setShowModal(false)}>
                    <CreateSpotForm />
                </CreateSpotModal>
            )}
        </>
    );
}

export default CreateSpotFormModal;
