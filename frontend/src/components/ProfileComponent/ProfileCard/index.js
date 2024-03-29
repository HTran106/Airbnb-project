import './ProfileCard.css'
import { useSelector} from 'react-redux'


const ProfileCard = () => {
    const user = useSelector(state => state.session.user)

    return (
        <>
            <div className='whole-card'>
                <div className="profile-card-container">
                    <div className='profile-card-image-container'>
                        <img
                            src={user?.profileImage ? user?.profileImage : 'https://tse2.mm.bing.net/th?id=OIP.hV6MoBaE8NYeMCugmhd7_QHaEo&pid=Api&P=0'}
                            alt="profile" />
                    </div>
                    <div className='shield-check'>
                        <span className='fa-solid fa-shield-halved fa-xl'>
                        </span>
                        <div>
                            <span className='identity-words'>Identity verified</span>
                        </div>
                    </div>
                    <div className='confirm-container'>
                        <h2>{user?.firstName} confirmed</h2>
                        <div className='check-identity'>
                            <span className='fa-solid fa-check'>
                            </span>
                            <div>
                                <span className='identity-words'>Identity</span>
                            </div>
                        </div>
                        <div className='check-identity'>
                            <span className='fa-solid fa-check'>
                            </span>
                            <div>
                                <span className='identity-words'>Email</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard
