import type { ReactNode } from "react"
import "./ProjectInfoSection.css"

interface ProjectInfoSectionProps {
    number: number;
    title: string;
    children: ReactNode;
}

function ProjectInfoSection({ number, title, children }: ProjectInfoSectionProps) {
    return (
        <section className="card project-info-section">
            <h2 className="project-info-section__title">
                {number}. {title}
            </h2>
            <div className="project-info-section__body">{children}</div>
        </section>
    );
}

export default ProjectInfoSection;
