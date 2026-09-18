import './Profile.css'
import myPic from '../assets/MyPic.jpg'

function Profile() {
    return (
        <div className="profile">
            <img className="profile__avatar" src={myPic} alt="Omar Nagy" />
            <span className="profile__name">Omar Nagy</span>
            <p className="profile__bio">
                Third-year Computer Engineering student at Cairo University, building everything
                from real-time full-stack and mobile apps to custom embedded systems — including a
                5-stage RISC processor and an autonomous vehicle that placed 4th of 48 teams.
            </p>
        </div>
    )
}

export default Profile
