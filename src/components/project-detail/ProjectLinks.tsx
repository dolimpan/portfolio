import type { ProjectLink } from "../../data/projectDetails"
import "./ProjectLinks.css"

interface ProjectLinksProps {
    links: ProjectLink[];
}

function ProjectLinks({ links }: ProjectLinksProps) {
    return (
        <ul className="project-links">
            {links.map((link) => (
                <li key={link.label}>
                    <a className="project-links__item" href={link.url} target="_blank" rel="noreferrer">
                        <span aria-hidden="true">↗</span>
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default ProjectLinks;
