import type { Project } from "../../data/projects"
import "./ProjectCard.css"

function ProjectCard({ title, period, description, icon, tags }: Project) {
    return (
        <article className="project-card">
            <div className="project-card__top">
                <div className="project-card__icon">
                    {icon && <img src={icon} alt="" />}
                </div>
                <span className="project-card__period">{period}</span>
            </div>
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__description">{description}</p>
            <ul className="project-card__tags">
                {tags.map((tag) => (
                    <li
                        key={tag.label}
                        className={`tag ${tag.variant === "role" ? "tag--primary" : "tag--secondary"}`}
                    >
                        {tag.label}
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default ProjectCard;
