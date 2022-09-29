import React, { useState } from 'react';
import { EditSpotModal } from '../../context/Modal';
import EditSpotForm from './EditSpotForm';

function EditSpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='update-button' onClick={() => setShowModal(true)}>Host a spot</button>
            {showModal && (
                <EditSpotModal onClose={() => setShowModal(false)}>
                    <EditSpotForm setShowModal={setShowModal} />
                </EditSpotModal>
            )}
        </>
    );
}

export default EditSpotFormModal;
