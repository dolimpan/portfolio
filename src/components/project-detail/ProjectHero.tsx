import type { ProjectLink } from "../../data/projectDetails"
import "./ProjectHero.css"

interface ProjectHeroProps {
    icon?: string;
    title: string;
    tagline: string;
    links?: ProjectLink[];
    video?: string;
    images?: string[];
}

function ProjectHero({ icon, title, tagline, links, video, images }: ProjectHeroProps) {
    return (
        <div className="project-hero">
            {icon && (
                <div className="project-hero__icon">
                    <img src={icon} alt="" />
                </div>
            )}
            <h1 className="project-hero__title">{title}</h1>
            <p className="project-hero__tagline">{tagline}</p>
            {links && links.length > 0 && (
                <div className="project-hero__links">
                    {links.map((link) => (
                        <a
                            className="project-hero__link"
                            href={link.url}
                            key={`${link.label}-${link.url}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.label}<span aria-hidden="true">↗</span>
                        </a>
                    ))}
                </div>
            )}
            {video && (
                <video
                    className="project-hero__video"
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    aria-label={`${title} 데모 영상`}
                />
            )}
            {images && images.length > 0 && (
                <div className="project-hero__images">
                    {images.map((image, index) => (
                        <div className="project-hero__image" key={`${image}-${index}`}>
                            <img src={image} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectHero;
