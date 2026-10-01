import type { TechSection } from "../../data/projectDetails"
import ProjectInfoSection from "./ProjectInfoSection"
import DataTable from "./DataTable"
import { useEffect, useState } from "react"
import "./TechSectionBlock.css"

interface TechSectionBlockProps {
    number: number;
    section: TechSection;
}

function TechSectionBlock({ number, section }: TechSectionBlockProps) {
    const [expandedDiagram, setExpandedDiagram] = useState<{ image: string; caption: string } | null>(null)

    useEffect(() => {
        if (!expandedDiagram) return
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setExpandedDiagram(null)
        }
        window.addEventListener("keydown", closeOnEscape)
        return () => window.removeEventListener("keydown", closeOnEscape)
    }, [expandedDiagram])

    const lightbox = expandedDiagram && (
        <div
            className="architecture-lightbox"
            role="presentation"
            onClick={() => setExpandedDiagram(null)}
        >
            <div
                className="architecture-lightbox__content"
                role="dialog"
                aria-modal="true"
                aria-label={`${expandedDiagram.caption} 전체 이미지`}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className="architecture-lightbox__close"
                    type="button"
                    onClick={() => setExpandedDiagram(null)}
                    aria-label="이미지 닫기"
                >×</button>
                <img src={expandedDiagram.image} alt={expandedDiagram.caption} />
                <p>{expandedDiagram.caption}</p>
            </div>
        </div>
    )

    if (section.type === "architecture") {
        return (
            <ProjectInfoSection number={number} title={section.title}>
                <div className="architecture-grid">
                    {section.diagrams.map((diagram, index) => (
                        <figure
                            className="architecture-grid__item"
                            key={`${diagram.caption}-${index}`}
                        >
                            <button
                                className="architecture-grid__image-button"
                                type="button"
                                onClick={() => setExpandedDiagram({ image: diagram.image, caption: diagram.caption })}
                                aria-label={`${diagram.caption} 전체 이미지 보기`}
                            >
                                <img src={diagram.image} alt={diagram.caption} />
                            </button>
                            <figcaption>&lt;{diagram.caption}&gt;</figcaption>
                        </figure>
                    ))}
                </div>
                {lightbox}
            </ProjectInfoSection>
        );
    }

    if (section.type === "erd") {
        return (
            <ProjectInfoSection number={number} title={section.title}>
                <div className="tech-image">
                    <button
                        className="architecture-grid__image-button tech-image__button"
                        type="button"
                        onClick={() => setExpandedDiagram({ image: section.image, caption: section.title })}
                        aria-label={`${section.title} 전체 이미지 보기`}
                    >
                        <img src={section.image} alt={section.title} />
                    </button>
                </div>
                {lightbox}
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
                        { key: "name", label: section.columnLabels?.[0] ?? "스택", width: "1fr" },
                        { key: "description", label: section.columnLabels?.[1] ?? "설명", width: "2fr" },
                    ]}
                    rows={section.rows}
                />
            </div>
        </ProjectInfoSection>
    );
}

export default TechSectionBlock;
