import React, { useState } from 'react';
import { SignUpModal } from '../../context/Modal';
import SignupForm from './SignupForm';
import { useSpring, animated } from 'react-spring'

function SignupFormModal({ setOpenMenu }) {
    const [showModal, setShowModal] = useState(false);

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

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
