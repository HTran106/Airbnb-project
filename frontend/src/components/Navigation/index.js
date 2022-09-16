import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import LoginButton from './LoginButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    sessionLinks = (
        <div className='navbar-container'>
            <div className='logo-container'>
                <span className='luxe'>Luxe</span>
                <span className='EVENTS'>EVENTS</span>
            </div>
            <LoginButton />
        </div>
        // <>
        //     <ProfileButton user={sessionUser} />

        // </>
    );
    return (
        <>
            {isLoaded && sessionLinks}
        </>

    );
}

export default Navigation;
