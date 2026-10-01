import type { ReactNode } from "react"
import "./ProjectInfoSection.css"

interface ProjectInfoSectionProps {
    number: number;
    title: string;
    children: ReactNode;
    className?: string;
}

function ProjectInfoSection({ number, title, children, className }: ProjectInfoSectionProps) {
    return (
        <section className={`card project-info-section${className ? ` ${className}` : ""}`}>
            <h2 className="project-info-section__title">
                {number}. {title}
            </h2>
            <div className="project-info-section__body">{children}</div>
        </section>
    );
}

export default ProjectInfoSection;
