import "./ProfileIntroduction.css"

function ProfileIntroduction() {
    return (
        <div className="card profile-intro">
            <h2 className="profile-intro__name">구재민</h2>
            <div className="profile-intro__content">
                <p className="profile-intro__role">소프트웨어 개발자</p>
                <p className="profile-intro__bio">
                    웹 백엔드 개발을 중심으로                     
                    
                    다양한 서비스를 <br />직접 만들어왔습니다.
                    <br />
                    기획부터 개발, 배포까지 경험하며
                    
                    꾸준히 성장하는 <br />개발자를 목표로 합니다.
                </p>
            </div>
        </div>
    );
}

export default ProfileIntroduction;
