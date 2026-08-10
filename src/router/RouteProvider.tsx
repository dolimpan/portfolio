import { useCallback, useEffect, useState } from "react"
import type { ReactNode } from "react"
import { RouteContext } from "./routeContext"

function getPath() {
    return window.location.pathname;
}

interface RouteProviderProps {
    children: ReactNode;
}

export function RouteProvider({ children }: RouteProviderProps) {
    const [path, setPath] = useState(getPath());

    useEffect(() => {
        const onPopState = () => setPath(getPath());
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    const navigate = useCallback((to: string) => {
        if (to === getPath()) return;
        window.history.pushState({}, "", to);
        setPath(to);
        window.scrollTo(0, 0);
    }, []);

    return (
        <RouteContext.Provider value={{ path, navigate }}>
            {children}
        </RouteContext.Provider>
    );
}
