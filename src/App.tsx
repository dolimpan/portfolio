import Home from "./pages/Home"
import About from "./pages/About"
import ProjectDetail from "./pages/ProjectDetail"
import Navbar from "./components/layout/Navbar"
import { RouteProvider } from "./router/RouteProvider"
import { useRoute } from "./router/routeContext"
import PageTransition from "./router/PageTransition"
import { useEffect, useRef } from "react"
import { getProjectBySlug } from "./data/projects"
import { getProjectDetailExtra } from "./data/projectDetails"
import "./pages/Contact.css"

const PROJECT_PATH_PREFIX = "/projects/";

function resolvePage(path: string) {
    if (path.startsWith(PROJECT_PATH_PREFIX)) {
        const slug = path.slice(PROJECT_PATH_PREFIX.length);
        const project = getProjectBySlug(slug);
        const extra = getProjectDetailExtra(slug);
        if (project && extra) {
            return <ProjectDetail project={project} extra={extra} />;
        }
        return <Home />;
    }

    if (path === "/about") {
        return <About />;
    }

    if (path === "/contact") {
        return <Contact />;
    }

    return <Home />;
}

function CurrentPage() {
    const { path, navigate } = useRoute();
    const lastNavigation = useRef(0);

    useEffect(() => {
        if (path !== "/") return;
        const scrollArea = document.querySelector<HTMLElement>(".page-transition");
        if (!scrollArea) return;

        let layoutReady = false;
        let settleTimer = 0;
        const settleLayout = () => {
            layoutReady = false;
            window.clearTimeout(settleTimer);
            settleTimer = window.setTimeout(() => {
                const imagesLoaded = Array.from(scrollArea.querySelectorAll("img")).every((image) => image.complete);
                if (imagesLoaded) layoutReady = true;
                else settleLayout();
            }, 60);
        };

        const resizeObserver = new ResizeObserver(settleLayout);
        resizeObserver.observe(scrollArea);
        const pageContent = scrollArea.querySelector<HTMLElement>(".page-transition__page--entering");
        if (pageContent) resizeObserver.observe(pageContent);
        const images = Array.from(scrollArea.querySelectorAll("img"));
        images.forEach((image) => image.addEventListener("load", settleLayout));
        images.forEach((image) => image.addEventListener("error", settleLayout));
        settleLayout();

        let touchStartY: number | null = null;
        let touchStartedAtBottom = false;

        const moveToAbout = () => {
            if (Date.now() - lastNavigation.current < 900 || !layoutReady) return;
            lastNavigation.current = Date.now();
            navigate("/about");
        };

        const onWheel = (event: WheelEvent) => {
            if (event.deltaY < 18 || Date.now() - lastNavigation.current < 900 || !layoutReady) return;
            const atBottom = scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight - 2;
            if (!atBottom) return;
            event.preventDefault();
            moveToAbout();
        };

        const onTouchStart = (event: TouchEvent) => {
            touchStartY = event.touches[0]?.clientY ?? null;
            touchStartedAtBottom = scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight - 2;
        };

        const onTouchEnd = (event: TouchEvent) => {
            if (touchStartY === null) return;
            const delta = (event.changedTouches[0]?.clientY ?? touchStartY) - touchStartY;
            if (delta < -48 && touchStartedAtBottom) moveToAbout();
            touchStartY = null;
        };

        scrollArea.addEventListener("wheel", onWheel, { passive: false });
        scrollArea.addEventListener("touchstart", onTouchStart, { passive: true });
        scrollArea.addEventListener("touchend", onTouchEnd, { passive: true });
        return () => {
            scrollArea.removeEventListener("wheel", onWheel);
            scrollArea.removeEventListener("touchstart", onTouchStart);
            scrollArea.removeEventListener("touchend", onTouchEnd);
            resizeObserver.disconnect();
            window.clearTimeout(settleTimer);
            images.forEach((image) => image.removeEventListener("load", settleLayout));
            images.forEach((image) => image.removeEventListener("error", settleLayout));
        };
    }, [navigate, path]);

    return (
        <>
            <Navbar />
            <PageTransition pageKey={path}>{resolvePage(path)}</PageTransition>
        </>
    );
}

function Contact() {
    return (
        <div className="border-frame">
            <span className="border-frame__rail" aria-hidden="true" />
            <main className="border-frame__content content-page contact-page">
                <div className="card section-header">
                    <h1 className="section-header__title">Contact</h1>
                    <span className="section-header__index">01</span>
                </div>
                <section className="card contact-page__body">
                    <div className="contact-page__intro">
                        <h2>열정 있고 성실한 개발자 구재민입니다.</h2>
                    </div>
                    <dl className="contact-page__details">
                        <div className="contact-page__item">
                            <dt>Email</dt>
                            <dd><a href="mailto:jmku2004@naver.com">jmku2004@naver.com</a></dd>
                        </div>
                        <div className="contact-page__item">
                            <dt>Address</dt>
                            <dd>경기도 수원시</dd>
                        </div>
                        <div className="contact-page__item">
                            <dt>GitHub</dt>
                            <dd><a href="https://github.com/dolimpan" target="_blank" rel="noreferrer">github.com/dolimpan ↗</a></dd>
                        </div>
                    </dl>
                </section>
            </main>
            <span className="border-frame__rail" aria-hidden="true" />
        </div>
    );
}

function App() {
    return (
        <RouteProvider>
            <CurrentPage />
        </RouteProvider>
    );
}

export default App
