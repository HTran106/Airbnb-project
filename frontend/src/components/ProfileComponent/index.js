import ProfileCard from './ProfileCard'
import './ProfileComponent.css'

const ProfileComponent = () => {
    return (
        <div className="profile-component-container">
            <div className='profile-component-inside-container'>
                <ProfileCard />
                <h1>HELLO</h1>
            </div>
        </div>
    )
}

export default ProfileComponent
