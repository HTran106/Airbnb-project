import React, { useState } from 'react';
import { EditSpotModal } from '../../context/Modal';
import EditSpotForm from './EditSpotForm';

function EditSpotFormModal({ spot }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <span className='edit-delete-buttons' onClick={() => setShowModal(true)}>Edit</span>
            {showModal && (
                <EditSpotModal onClose={() => setShowModal(false)}>
                    <EditSpotForm spot={spot} setShowModal={setShowModal} />
                </EditSpotModal>
            )}
        </>
    );
}

export default EditSpotFormModal;
