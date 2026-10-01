import type { MouseEvent } from "react"
import { useRoute } from "../../router/routeContext"
import { getProjectBySlug } from "../../data/projects"
import "./Navbar.css"

const NAV_ITEMS = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects/shotudy" },
    { label: "Contact", path: "/contact" },
];

function isNavItemActive(itemPath: string, currentPath: string) {
    const projectPrefix = "/projects/";
    const project = currentPath.startsWith(projectPrefix)
        ? getProjectBySlug(currentPath.slice(projectPrefix.length))
        : undefined;
    const isKnownPath = currentPath === "/" || currentPath === "/about" || currentPath === "/contact" || Boolean(project);

    if (itemPath === "/") return currentPath === "/" || !isKnownPath;
    if (itemPath === currentPath) return true;
    // "Projects" has no listing page of its own yet, but should still read as
    // active while viewing any /projects/:slug detail page.
    if (itemPath.startsWith(projectPrefix)) return Boolean(project);
    return false;
}

function Navbar() {
    const { path, navigate } = useRoute();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>, to: string) => {
        event.preventDefault();
        navigate(to);
    };

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.path}
                            onClick={(event) => handleClick(event, item.path)}
                            className={
                                isNavItemActive(item.path, path)
                                    ? "navbar__link navbar__link--active"
                                    : "navbar__link"
                            }
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
