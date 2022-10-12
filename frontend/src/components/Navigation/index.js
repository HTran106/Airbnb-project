import { useHistory } from 'react-router-dom';
import LoginButton from './LoginButton';
import './Navigation.css';


document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

function Navigation({ isLoaded, location }) {
    const history = useHistory()


    const homeButtonOnClick = e => {
        history.push('/')
    }


    let sessionLinks;
    sessionLinks = (
        <div className={location === '/' ? 'navbar-container' : 'navbar-container-not-home'}>
            <div className='logo-container'>
                <span onClick={homeButtonOnClick} className={location === '/' ? 'luxe' : 'luxe2'}>Luxe</span>
                <span className={location === '/' ? 'EVENTS' : 'EVENTS2'}>EVENTS</span>
            </div>
            <div className='github-linked'>
                <a href='https://github.com/htran106'>
                    <button className='github-button'>
                        <img
                            className='github-logo'
                            src="https://airbnb-files.s3.us-west-1.amazonaws.com/github-logo.png"
                            alt='github' />
                    </button>
                </a>
                <div className='linkedin-container'>
                </div>
                <a href='https://www.linkedin.com/in/huydu-tran/'>
                    <button className='linkedin-button'>
                        <img
                            className='linkedin-logo'
                            src="https://airbnb-files.s3.us-west-1.amazonaws.com/linklogo.png"
                            alt='github' />
                    </button>
                </a>
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
