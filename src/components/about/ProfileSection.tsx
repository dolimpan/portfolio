import ProfileImage from "./ProfileImage"
import ProfileIntroduction from "./ProfileIntroduction"
import Skills from "./Skills"
import "./ProfileSection.css"

function ProfileSection() {
    return (
        <div className="profile-section">
            <ProfileImage />
            <ProfileIntroduction />
            <Skills />
        </div>
    );
}

export default ProfileSection;
