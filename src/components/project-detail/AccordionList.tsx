import { useState } from "react"
import "./AccordionList.css"

export interface AccordionListItem {
    title: string;
    detail: string;
}

interface AccordionListProps {
    items: AccordionListItem[];
}

function AccordionList({ items }: AccordionListProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="accordion-list">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={item.title} className="accordion-item">
                        <button
                            type="button"
                            className="accordion-item__header"
                            aria-expanded={isOpen}
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                        >
                            <span className="accordion-item__title">
                                {index + 1}. {item.title}
                            </span>
                            <svg
                                className={
                                    isOpen
                                        ? "accordion-item__chevron accordion-item__chevron--open"
                                        : "accordion-item__chevron"
                                }
                                width="12"
                                height="12"
                                viewBox="0 0 14 14"
                                aria-hidden="true"
                            >
                                <path d="M0 0 L14 0 L7 12 Z" fill="currentColor" />
                            </svg>
                        </button>
                        <div
                            className={
                                isOpen ? "accordion-item__panel accordion-item__panel--open" : "accordion-item__panel"
                            }
                        >
                            <div className="accordion-item__panel-inner">
                                <p className="accordion-item__detail">{item.detail}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default AccordionList;
