import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}



export function SignUpModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="signup-modal">
            <div id="signup-modal-background" onClick={onClose} />
            <div id="signup-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}


export function AddReviewModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="add-review-modal">
            <div id="add-review-modal-background" onClick={onClose} />
            <div id="add-review-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}

export function EditReviewModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="edit-review-modal">
            <div id="edit-review-modal-background" onClick={onClose} />
            <div id="edit-review-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}

export function EditReviewModalProfile({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="edit-review-modal-profile">
            <div id="edit-review-modal-background-profile" onClick={onClose} />
            <div id="edit-review-modal-content-profile">
                {children}
            </div>
        </div>,
        modalNode
    );
}

export function CreateSpotModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="edit-review-modal">
            <div id="create-spot-modal-background" onClick={onClose} />
            <div id="create-spot-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}

export function EditSpotModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="edit-spot-modal">
            <div id="edit-spot-modal-background" onClick={onClose} />
            <div id="edit-spot-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}
