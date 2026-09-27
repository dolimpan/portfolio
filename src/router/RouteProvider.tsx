import { useCallback, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { RouteContext } from "./routeContext"

function getPath() {
    return window.location.pathname;
}

function resetPageScroll() {
    const pageScroll = document.querySelector<HTMLElement>(".page-transition");
    if (!pageScroll) return;
    pageScroll.style.setProperty("--leaving-scroll-offset", `${-pageScroll.scrollTop}px`);
}

interface RouteProviderProps {
    children: ReactNode;
}

export function RouteProvider({ children }: RouteProviderProps) {
    const [path, setPath] = useState(getPath());

    useEffect(() => {
        const onPopState = () => {
            resetPageScroll();
            setPath(getPath());
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    const navigate = useCallback((to: string) => {
        if (to === getPath()) return;
        window.history.pushState({}, "", to);
        resetPageScroll();
        setPath(to);
    }, []);

    return (
        <RouteContext.Provider value={{ path, navigate }}>
            {children}
        </RouteContext.Provider>
    );
}
