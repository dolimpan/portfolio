import type { MouseEvent } from "react"
import { useRoute } from "../../router/routeContext"
import "./Navbar.css"

const NAV_ITEMS = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "#projects" },
    { label: "Contact", path: "#contact" },
];

function Navbar() {
    const { path, navigate } = useRoute();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>, to: string) => {
        if (to.startsWith("#")) return;
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
                                item.path === path
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
