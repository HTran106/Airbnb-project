import React, { useState } from 'react';
import { AddReviewModal } from '../../context/Modal';
import AddReviewForm from './AddReviewForm';
import { useSelector } from 'react-redux';

function AddReviewFormModal({ spot }) {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user)

    return (
        <>
            {user && <button id='add-review' className='update-button' style={{ marginLeft: '-1.3em' }} onClick={() => setShowModal(true)}>Add Review</button>}
            {showModal && (
                <AddReviewModal onClose={() => setShowModal(false)}>
                    <AddReviewForm spot={spot} />
                </AddReviewModal>
            )}
        </>
    );
}

export default AddReviewFormModal;
