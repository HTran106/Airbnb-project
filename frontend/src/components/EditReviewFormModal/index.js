import React, { useState } from 'react';
import { EditReviewModal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';

function EditReviewFormModal({ review }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className='edit-delete-buttons'
                style={{ backgroundColor: 'transparent', border: 'none', marginLeft: '-1.3em' }}
                onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <EditReviewModal onClose={() => setShowModal(false)}>
                    <EditReviewForm setShowModal={setShowModal} review={review} />
                </EditReviewModal>
            )}
        </>
    );
}

export default EditReviewFormModal;
