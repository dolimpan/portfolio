import type { TechSection } from "../../data/projectDetails"
import ProjectInfoSection from "./ProjectInfoSection"
import DataTable from "./DataTable"
import "./TechSectionBlock.css"

interface TechSectionBlockProps {
    number: number;
    section: TechSection;
}

function TechSectionBlock({ number, section }: TechSectionBlockProps) {
    if (section.type === "architecture") {
        return (
            <ProjectInfoSection number={number} title={section.title}>
                <div className="architecture-grid">
                    {section.diagrams.map((diagram) => (
                        <figure className="architecture-grid__item" key={diagram.image}>
                            <img src={diagram.image} alt={diagram.caption} />
                            <figcaption>&lt;{diagram.caption}&gt;</figcaption>
                        </figure>
                    ))}
                </div>
            </ProjectInfoSection>
        );
    }

    if (section.type === "erd") {
        return (
            <ProjectInfoSection number={number} title={section.title}>
                <div className="tech-image">
                    <img src={section.image} alt={section.title} />
                </div>
            </ProjectInfoSection>
        );
    }

    if (section.type === "api") {
        return (
            <ProjectInfoSection number={number} title={section.title}>
                <div className="data-table-scroll">
                    <DataTable
                        columns={[
                            { key: "domain", label: "Domain", width: "0.8fr" },
                            { key: "method", label: "Method", width: "0.8fr" },
                            { key: "endpoint", label: "Endpoint", width: "1.4fr" },
                            { key: "description", label: "Description", width: "1.4fr" },
                        ]}
                        rows={section.rows}
                    />
                </div>
            </ProjectInfoSection>
        );
    }

    return (
        <ProjectInfoSection number={number} title={section.title}>
            <div className="data-table-scroll">
                <DataTable
                    columns={[
                        { key: "name", label: "스택", width: "1fr" },
                        { key: "description", label: "설명", width: "2fr" },
                    ]}
                    rows={section.rows}
                />
            </div>
        </ProjectInfoSection>
    );
}

export default TechSectionBlock;
