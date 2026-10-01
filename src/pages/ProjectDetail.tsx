import { Fragment } from "react"
import type { ReactNode } from "react"
import BorderFrame from "../components/layout/BorderFrame"
import SectionHeader from "../components/about/SectionHeader"
import ProjectHero from "../components/project-detail/ProjectHero"
import ProjectInfoSection from "../components/project-detail/ProjectInfoSection"
import TechSectionBlock from "../components/project-detail/TechSectionBlock"
import AccordionList from "../components/project-detail/AccordionList"
import DataTable from "../components/project-detail/DataTable"
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
                <ProjectInfoSection number={number} title="프로젝트 개요" className="project-info-section--full">
                    <p className="project-detail__overview">{overview.description}</p>
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
                <ProjectInfoSection number={number} title="팀원" className="project-info-section--full">
                    <div className="data-table-scroll data-table-scroll--fit">
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

    if (extra.myRole || extra.roleGroups) {
        const myRole = extra.myRole;
        gridSections.push({
            key: "role",
            render: (number) => (
                <ProjectInfoSection number={number} title="담당 역할" className="project-info-section--full">
                    {extra.roleGroups ? (
                        <div className="project-detail__role-groups">
                            {extra.roleGroups.map((group) => (
                                <div className="project-detail__role-group" key={group.category}>
                                    <h3>{group.category}</h3>
                                    <ul className="project-detail__role-list">
                                        {group.tasks.map((task) => <li key={task}>{task}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <ul className="project-detail__role-list">
                            {myRole?.map((role) => <li key={role}>{role}</li>)}
                        </ul>
                    )}
                </ProjectInfoSection>
            ),
        });
    }

    if (extra.features) {
        const features = extra.features;
        const featureColumns = [
            { key: "name" as const, label: "기능", width: "1fr" },
            ...(features.some((feature) => feature.description)
                ? [{ key: "description" as const, label: "설명", width: "2fr" }]
                : []),
            { key: "status" as const, label: "구현 여부", width: "0.6fr", align: "center" as const },
        ];
        gridSections.push({
            key: "features",
            render: (number) => (
                <ProjectInfoSection number={number} title="주요 기능" className="project-info-section--full">
                    <div className="data-table-scroll data-table-scroll--fit">
                        <DataTable
                            columns={featureColumns}
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
                <ProjectInfoSection number={number} title="트러블슈팅">
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
                <ProjectInfoSection number={number} title="개선 방안">
                    <AccordionList items={improvements} />
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
                    links={extra.links}
                    video={extra.heroVideo}
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
