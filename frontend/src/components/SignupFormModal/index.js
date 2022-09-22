import React, { useState } from 'react';
import { SignUpModal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <SignUpModal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </SignUpModal>
            )}
        </>
    );
}

export default SignupFormModal;
