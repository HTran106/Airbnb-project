import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SignupFormModal from '../../SignupFormModal'
import { logout, login } from '../../../store/session'
import './LoginButton.css'


const LoginButton = () => {
    const dispatch = useDispatch()
    const [openMenu, setOpenMenu] = useState(false)
    const sessionUser = useSelector(state => state.session.user)


    const handleOnClick = e => {
        e.preventDefault()
        setOpenMenu(!openMenu)
    }

    const handleLogout = e => {
        e.preventDefault()
        dispatch(logout())
        setOpenMenu(!openMenu)
    }

    const handleLogin = e => {
        e.preventDefault()
        dispatch(login({ credential: 'demo@user.io', password: 'password' }))
        setOpenMenu(!openMenu)
    }

    if (sessionUser) {
        return (
            <div className='login-button-container'>
                <button onClick={handleOnClick} className="login-button fa-solid fa-bars"><span className='profile-pic fa-solid fa-circle-user fa-2xl'></span></button>
                {openMenu && (
                    <div className='opened-menu-container'>
                        <div>Host an event</div>
                        <div onClick={handleLogout}>Logout</div>
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div className='login-button-container'>
                <button onClick={handleOnClick} className="login-button fa-solid fa-bars"><span className='profile-pic fa-solid fa-circle-user fa-2xl'></span></button>
                {openMenu && (
                    <div className='logged-out-opened-menu-container'>
                        <div onClick={handleLogin}>Demo Login</div>
                        <SignupFormModal />
                    </div>
                )}
            </div>
        )
    }
}

export default LoginButton
