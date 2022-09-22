// import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginButton from './LoginButton';
import './Navigation.css';
import { useState } from 'react';

document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

function Navigation({ isLoaded }) {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    const [location, setLocation] = useState(window.location.pathname)

    const homeButtonOnClick = e => {
        e.preventDefault()
        history.push('/')
    }

    let sessionLinks;
    sessionLinks = (
        <div className={location === '/' ? 'navbar-container' : 'navbar-container-not-home'}>
            <div className='logo-container'>
                <span onClick={homeButtonOnClick} className={location ==='/' ? 'luxe' : 'luxe2'}>Luxe</span>
                <span className={location ==='/' ? 'EVENTS' : 'EVENTS2'}>EVENTS</span>
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
