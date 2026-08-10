import type { ReactNode } from "react"
import "./BorderFrame.css"

interface BorderFrameProps {
    children: ReactNode;
}

function BorderFrame({ children }: BorderFrameProps) {
    return (
        <div className="border-frame">
            <span className="border-frame__rail" aria-hidden="true" />
            <div className="border-frame__content">{children}</div>
            <span className="border-frame__rail" aria-hidden="true" />
        </div>
    );
}

export default BorderFrame;
