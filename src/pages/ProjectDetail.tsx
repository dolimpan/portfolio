import { Fragment } from "react"
import type { ReactNode } from "react"
import BorderFrame from "../components/layout/BorderFrame"
import SectionHeader from "../components/about/SectionHeader"
import ProjectHero from "../components/project-detail/ProjectHero"
import ProjectInfoSection from "../components/project-detail/ProjectInfoSection"
import TechSectionBlock from "../components/project-detail/TechSectionBlock"
import AccordionList from "../components/project-detail/AccordionList"
import DataTable from "../components/project-detail/DataTable"
import ProjectLinks from "../components/project-detail/ProjectLinks"
import type { Project } from "../data/projects"
import type { ProjectDetailExtra } from "../data/projectDetails"
import "./ProjectDetail.css"

interface ProjectDetailProps {
    project: Project;
    extra: ProjectDetailExtra;
}

interface NumberedSection {
    key: string;
    render: (number: number) => ReactNode;
}

function ProjectDetail({ project, extra }: ProjectDetailProps) {
    const heroTitle = `${project.title} 프로젝트`;

    const gridSections: NumberedSection[] = [];

    if (extra.overview) {
        const overview = extra.overview;
        gridSections.push({
            key: "overview",
            render: (number) => (
                <ProjectInfoSection number={number} title="프로젝트 개요">
                    <p>{overview.description}</p>
                    {overview.phases && (
                        <ul className="project-detail__phase-list">
                            {overview.phases.map((phase) => (
                                <li key={phase.label}>
                                    <span>{phase.label}</span>
                                    <span>ㅣ{phase.period}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </ProjectInfoSection>
            ),
        });
    }

    if (extra.team) {
        const team = extra.team;
        gridSections.push({
            key: "team",
            render: (number) => (
                <ProjectInfoSection number={number} title="팀원">
                    <div className="data-table-scroll">
                        <DataTable
                            columns={[
                                { key: "name", label: "이름", width: "0.8fr" },
                                { key: "affiliation", label: "소속", width: "1.6fr" },
                                { key: "role", label: "담당", width: "1.2fr" },
                            ]}
                            rows={team}
                        />
                    </div>
                </ProjectInfoSection>
            ),
        });
    }

    if (extra.myRole) {
        const myRole = extra.myRole;
        gridSections.push({
            key: "role",
            render: (number) => (
                <ProjectInfoSection number={number} title="담당역할">
                    <ul className="project-detail__role-list">
                        {myRole.map((role) => (
                            <li key={role}>{role}</li>
                        ))}
                    </ul>
                </ProjectInfoSection>
            ),
        });
    }

    if (extra.features) {
        const features = extra.features;
        gridSections.push({
            key: "features",
            render: (number) => (
                <ProjectInfoSection number={number} title="주요기능">
                    <div className="data-table-scroll">
                        <DataTable
                            columns={[
                                { key: "name", label: "기능", width: "1fr" },
                                { key: "status", label: "구현여부", width: "0.6fr", align: "center" },
                            ]}
                            rows={features}
                        />
                    </div>
                </ProjectInfoSection>
            ),
        });
    }

    const trailingSections: NumberedSection[] = [];

    (extra.techSections ?? []).forEach((section) => {
        trailingSections.push({
            key: section.title,
            render: (number) => <TechSectionBlock number={number} section={section} />,
        });
    });

    if (extra.troubleshooting) {
        const troubleshooting = extra.troubleshooting;
        trailingSections.push({
            key: "troubleshooting",
            render: (number) => (
                <ProjectInfoSection number={number} title="트러블 슈팅">
                    <AccordionList items={troubleshooting} />
                </ProjectInfoSection>
            ),
        });
    }

    if (extra.retrospective) {
        const retrospective = extra.retrospective;
        trailingSections.push({
            key: "retrospective",
            render: (number) => (
                <ProjectInfoSection number={number} title="회고">
                    <AccordionList items={retrospective} />
                </ProjectInfoSection>
            ),
        });
    }

    if (extra.improvements) {
        const improvements = extra.improvements;
        trailingSections.push({
            key: "improvements",
            render: (number) => (
                <ProjectInfoSection number={number} title="개선방안">
                    <AccordionList items={improvements} />
                </ProjectInfoSection>
            ),
        });
    }

    if (extra.links && extra.links.length > 0) {
        const links = extra.links;
        trailingSections.push({
            key: "links",
            render: (number) => (
                <ProjectInfoSection number={number} title="링크">
                    <ProjectLinks links={links} />
                </ProjectInfoSection>
            ),
        });
    }

    return (
        <BorderFrame>
            <div className="content-page project-detail">
                <SectionHeader title="Projects" index={extra.number} />

                <ProjectHero
                    icon={project.icon}
                    title={heroTitle}
                    tagline={project.description}
                    tags={project.tags}
                    images={extra.heroImages}
                />

                <div className="project-detail__grid">
                    {gridSections.map((section, index) => (
                        <Fragment key={section.key}>{section.render(index + 1)}</Fragment>
                    ))}
                </div>

                {trailingSections.map((section, index) => (
                    <Fragment key={section.key}>
                        {section.render(gridSections.length + index + 1)}
                    </Fragment>
                ))}
            </div>
        </BorderFrame>
    );
}

export default ProjectDetail;
