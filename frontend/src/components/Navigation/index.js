import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import LoginButton from './LoginButton';
import './Navigation.css';

document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});


function Navigation({ isLoaded }) {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);

    const homeButtonOnClick = e => {
        e.preventDefault()
        history.push('/')
    }

    let sessionLinks;
    sessionLinks = (
        <div className='navbar-container'>
            <div className='logo-container'>
                <span onClick={homeButtonOnClick} className='luxe'>Luxe</span>
                <span className='EVENTS'>EVENTS</span>
            </div>
            <LoginButton />
        </div>
    );
    return (
        <>
            {isLoaded && sessionLinks}
        </>

    );
}

export default Navigation;
