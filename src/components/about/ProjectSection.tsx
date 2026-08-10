import { projects } from "../../data/projects"
import ProjectCard from "./ProjectCard"
import "./ProjectSection.css"

function ProjectSection() {
    return (
        <div className="card project-section">
            <h2 className="project-section__title">프로젝트</h2>
            <div className="project-section__grid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;
