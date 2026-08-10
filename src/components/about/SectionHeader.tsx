import "./SectionHeader.css"

interface SectionHeaderProps {
    title: string;
    index: string;
}

function SectionHeader({ title, index }: SectionHeaderProps) {
    return (
        <div className="card section-header">
            <h1 className="section-header__title">{title}</h1>
            <span className="section-header__index">{index}</span>
        </div>
    );
}

export default SectionHeader;
