import { createContext, useContext } from "react"

export interface RouteContextValue {
    path: string;
    navigate: (to: string) => void;
}

export const RouteContext = createContext<RouteContextValue | null>(null);

export function useRoute() {
    const ctx = useContext(RouteContext);
    if (!ctx) {
        throw new Error("useRoute must be used within a RouteProvider");
    }
    return ctx;
}
