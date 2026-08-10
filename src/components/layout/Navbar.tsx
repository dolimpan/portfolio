import "./Navbar.css"

const NAV_ITEMS = ["Home", "About", "Projects", "Contact"]

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {NAV_ITEMS.map((item) => (
                    <li key={item}>
                        <a
                            href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                            className={
                                item === "Home"
                                    ? "navbar__link navbar__link--active"
                                    : "navbar__link"
                            }
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
