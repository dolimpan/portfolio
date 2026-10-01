import ResumeCard from "./ResumeCard"
import "./ResumeSection.css"

function ResumeSection() {
    return (
        <div className="resume-section">
            <ResumeCard title="이력" grow={539}>
                <p>
                    홍익대학교 컴퓨터공학과 3학년 휴학
                    <br />
                    84학점 이수; 전체 3.99 / 전공 4.14
                    <br />
                    육군 제 7보병사단 병장 만기 전역
                </p>
            </ResumeCard>
            <ResumeCard title="어학능력" grow={362}>
                <p>
                    OPIc 영어 AL
                    <br />
                    TOEIC 940
                    <br />
                    방글라데시 국제학교 3년 재학
                </p>
            </ResumeCard>
            <ResumeCard title="경험 / 수상" grow={797}>
                <p>
                    <span className="resume-card__date">24.9–25.3</span>ㅣ전국연합 개발동아리 UMC
                    7기 안드로이드 수료
                    <br />
                    <span className="resume-card__date">25.7–26.6</span>ㅣ육군 창업경진대회
                    창의상 수상 (Shotudy 서비스)
                    <br />
                    2026 pre-국방 Start-up 챌린지 최우수상 수상 (Shotudy 서비스)
                </p>
            </ResumeCard>
        </div>
    );
}

export default ResumeSection;
