import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showMenu, setShowMenu] = useState(false);


    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/');
    };

    return (
        <>
            <button onClick={openMenu}>
                <i className="fas fa-user-circle" />
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
