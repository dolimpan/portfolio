import Home from "./pages/Home"
import About from "./pages/About"
import ProjectDetail from "./pages/ProjectDetail"
import Navbar from "./components/layout/Navbar"
import { RouteProvider } from "./router/RouteProvider"
import { useRoute } from "./router/routeContext"
import PageTransition from "./router/PageTransition"
import { useEffect, useRef } from "react"
import { getProjectBySlug, projects } from "./data/projects"
import { getProjectDetailExtra } from "./data/projectDetails"

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
        const orderedPaths = ["/", "/about", ...projects.map((project) => `/projects/${project.slug}`), "/contact"];
        let layoutReady = false;
        let settleTimer = 0;
        const scrollArea = document.querySelector<HTMLElement>(".page-transition");
        if (!scrollArea) return;

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
        scrollArea.querySelectorAll("img").forEach((image) => image.addEventListener("load", settleLayout));
        scrollArea.querySelectorAll("img").forEach((image) => image.addEventListener("error", settleLayout));
        settleLayout();

        let touchStartY: number | null = null;
        let touchStartedAtTop = false;
        let touchStartedAtBottom = false;

        const moveToAdjacentPage = (direction: number) => {
            if (Date.now() - lastNavigation.current < 900 || !layoutReady) return;
            const currentIndex = orderedPaths.indexOf(path);
            const targetIndex = currentIndex + direction;
            if (currentIndex < 0 || targetIndex < 0 || targetIndex >= orderedPaths.length) return;
            lastNavigation.current = Date.now();
            navigate(orderedPaths[targetIndex]);
        };

        const onWheel = (event: WheelEvent) => {
            if (Math.abs(event.deltaY) < 18 || Date.now() - lastNavigation.current < 900 || !layoutReady) return;
            const atTop = scrollArea.scrollTop <= 2;
            const atBottom = scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight - 2;
            const direction = event.deltaY > 0 && atBottom ? 1 : event.deltaY < 0 && atTop ? -1 : 0;
            if (direction === 0 || orderedPaths.indexOf(path) + direction < 0 || orderedPaths.indexOf(path) + direction >= orderedPaths.length) return;
            event.preventDefault();
            moveToAdjacentPage(direction);
        };

        const onTouchStart = (event: TouchEvent) => {
            touchStartY = event.touches[0]?.clientY ?? null;
            touchStartedAtTop = scrollArea.scrollTop <= 2;
            touchStartedAtBottom = scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight - 2;
        };

        const onTouchEnd = (event: TouchEvent) => {
            if (touchStartY === null || !layoutReady) return;
            const delta = (event.changedTouches[0]?.clientY ?? touchStartY) - touchStartY;
            if (delta < -48 && touchStartedAtBottom) moveToAdjacentPage(1);
            else if (delta > 48 && touchStartedAtTop) moveToAdjacentPage(-1);
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
            scrollArea.querySelectorAll("img").forEach((image) => image.removeEventListener("load", settleLayout));
            scrollArea.querySelectorAll("img").forEach((image) => image.removeEventListener("error", settleLayout));
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
                    <span className="section-header__index">06</span>
                </div>
                <section className="card contact-page__body">
                    <h2>함께 좋은 서비스를 만들어가고 싶습니다.</h2>
                    <p>프로젝트나 협업에 관해 이야기 나누고 싶다면 편하게 연락해 주세요.</p>
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
