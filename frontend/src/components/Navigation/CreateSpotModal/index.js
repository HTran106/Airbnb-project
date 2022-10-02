import React from 'react';
import { CreateSpotModal } from '../../../context/Modal';
import CreateSpotForm from './CreateSpotForm';

function CreateSpotFormModal({ setOpenMenu, setShowModal }) {

    return (
        <>
            <CreateSpotModal onClose={() => setShowModal(false)}>
                <CreateSpotForm setShowModal={setShowModal} />
            </CreateSpotModal>
        </>
    );
}

export default CreateSpotFormModal;
