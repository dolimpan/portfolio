import "./ScrollIndicator.css"

function ScrollIndicator() {
    return (
        <div className="scroll-indicator">
            <svg
                className="scroll-indicator__icon"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
            >
                <path d="M0 0 L14 0 L7 12 Z" fill="currentColor" />
            </svg>
            <span className="scroll-indicator__label">SCROLL</span>
        </div>
    );
}

export default ScrollIndicator;
