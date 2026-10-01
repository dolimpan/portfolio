import BorderFrame from "../components/layout/BorderFrame"
import SectionHeader from "../components/about/SectionHeader"
import ProfileSection from "../components/about/ProfileSection"
import ProjectSection from "../components/about/ProjectSection"
import ResumeSection from "../components/about/ResumeSection"

function About() {
    return (
        <BorderFrame>
            <div className="content-page">
                <SectionHeader title="About" index="01" />
                <ProfileSection />
                <ProjectSection />
                <ResumeSection />
            </div>
        </BorderFrame>
    );
}

export default About;
