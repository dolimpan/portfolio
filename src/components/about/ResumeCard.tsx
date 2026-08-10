import type { ReactNode } from "react"
import "./ResumeCard.css"

interface ResumeCardProps {
    title: string;
    grow: number;
    children: ReactNode;
}

function ResumeCard({ title, grow, children }: ResumeCardProps) {
    return (
        <div className="card resume-card" style={{ flexGrow: grow, flexBasis: 0 }}>
            <h2 className="resume-card__title">{title}</h2>
            <div className="resume-card__body">{children}</div>
        </div>
    );
}

export default ResumeCard;
