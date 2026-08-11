import type { ProjectTag } from "../../data/projects"
import "./ProjectHero.css"

interface ProjectHeroProps {
    icon?: string;
    title: string;
    tagline: string;
    tags: ProjectTag[];
    images?: string[];
}

function ProjectHero({ icon, title, tagline, tags, images }: ProjectHeroProps) {
    return (
        <div className="project-hero">
            {icon && (
                <div className="project-hero__icon">
                    <img src={icon} alt="" />
                </div>
            )}
            <h1 className="project-hero__title">{title}</h1>
            <p className="project-hero__tagline">{tagline}</p>
            <ul className="project-hero__tags">
                {tags.map((tag) => (
                    <li
                        key={tag.label}
                        className={`tag ${tag.variant === "role" ? "tag--primary" : "tag--secondary"}`}
                    >
                        {tag.label}
                    </li>
                ))}
            </ul>
            {images && images.length > 0 && (
                <div className="project-hero__images">
                    {images.map((image) => (
                        <div className="project-hero__image" key={image}>
                            <img src={image} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectHero;
