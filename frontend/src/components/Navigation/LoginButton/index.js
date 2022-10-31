import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SignupFormModal from '../../SignupFormModal'
import { logout, login } from '../../../store/session'
import './LoginButton.css'
import LoginFormModal from '../../LoginFormModal'
import { useHistory } from 'react-router-dom'
import CreateSpotFormModal from '../CreateSpotModal'


const LoginButton = ({ openPopup }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [openMenu, setOpenMenu] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)


    const handleOnClick = e => {
        e.preventDefault()
        setOpenMenu(!openMenu)
    }

    const handleLogout = e => {
        e.preventDefault()
        dispatch(logout())
        setOpenMenu(!openMenu)
        history.push('/')
    }

    const handleLogin = e => {
        e.preventDefault()
        dispatch(login({ credential: 'demo@user.io', password: 'password' }))
        openPopup()
        setOpenMenu(!openMenu)
    }

    const handleAccountBtn = () => {
        setOpenMenu(!openMenu)
        setShowModal(false)
        history.push('/my/account')
    }

    if (sessionUser) {
        return (
            <div className='login-button-container'>
                <button onClick={handleOnClick} className="login-button fa-solid fa-bars">
                    <span className='profile-pic fa-solid fa-circle-user fa-2xl'></span>
                </button>
                {openMenu && (
                    <div className='opened-menu-container'>
                        <div onClick={handleAccountBtn}>Account</div>
                        <div onClick={() => {
                            setOpenMenu(!openMenu)
                            setShowModal(true)
                        }}>Host a spot</div>
                        <div onClick={handleLogout}>Logout</div>
                    </div>
                )}
                {showModal && (
                    <CreateSpotFormModal setOpenMenu={setOpenMenu} setShowModal={setShowModal} />
                )}
            </div>
        )
    } else {
        return (
            <div className='login-button-container'>
                <button onClick={handleOnClick} className="login-button fa-solid fa-bars"><span className='profile-pic fa-solid fa-circle-user fa-2xl'></span></button>
                {openMenu && (
                    <div className='logged-out-opened-menu-container'>
                        <div>
                            <LoginFormModal />
                        </div>
                        <div onClick={handleLogin}>Demo Login</div>
                        <SignupFormModal setOpenMenu={setOpenMenu} />
                    </div>
                )}
            </div>
        )
    }
}

export default LoginButton
