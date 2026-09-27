import { useEffect, useLayoutEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import "./PageTransition.css"

// Must match the CSS animation duration in PageTransition.css.
const TRANSITION_DURATION_MS = 760;

interface PageEntry {
    key: string;
    node: ReactNode;
}

interface PageTransitionProps {
    pageKey: string;
    children: ReactNode;
}

function PageTransition({ pageKey, children }: PageTransitionProps) {
    const [current, setCurrent] = useState<PageEntry>({ key: pageKey, node: children });
    const [leaving, setLeaving] = useState<PageEntry | null>(null);
    const previousPageKey = useRef(pageKey);

    // current.node is only ever refreshed when pageKey changes, which is fine
    // here since the page content is fully determined by the route path.
    if (pageKey !== current.key) {
        setLeaving(current);
        setCurrent({ key: pageKey, node: children });
    }

    useLayoutEffect(() => {
        if (previousPageKey.current === pageKey) return;
        previousPageKey.current = pageKey;
        const scrollArea = document.querySelector<HTMLElement>(".page-transition");
        if (scrollArea) scrollArea.scrollTop = 0;
        window.scrollTo(0, 0);
    }, [pageKey]);

    useEffect(() => {
        if (!leaving) return;
        const timeoutId = window.setTimeout(() => setLeaving(null), TRANSITION_DURATION_MS);
        return () => window.clearTimeout(timeoutId);
    }, [leaving]);

    return (
        <div className={leaving ? "page-transition page-transition--animating" : "page-transition"}>
            {leaving && (
                <div key={leaving.key} className="page-transition__page page-transition__page--leaving">
                    {leaving.node}
                </div>
            )}
            <div key={current.key} className="page-transition__page page-transition__page--entering">
                {current.node}
            </div>
        </div>
    );
}

export default PageTransition;
