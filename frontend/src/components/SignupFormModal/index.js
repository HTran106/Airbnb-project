import React, { useState } from 'react';
import { SignUpModal } from '../../context/Modal';
import SignupForm from './SignupForm';


function SignupFormModal({ setOpenMenu }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='signout-button-container'>
                <button className='signout-button' onClick={() => setShowModal(true)}>Sign Up</button>
            </div>
            {showModal && (
                <SignUpModal onClose={() => {
                    setShowModal(false)
                    setOpenMenu(false)
                }}>
                    <SignupForm />
                </SignUpModal>
            )
            }
        </>
    );
}

export default SignupFormModal;
