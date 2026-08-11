import Home from "./pages/Home"
import About from "./pages/About"
import ProjectDetail from "./pages/ProjectDetail"
import Navbar from "./components/layout/Navbar"
import { RouteProvider } from "./router/RouteProvider"
import { useRoute } from "./router/routeContext"
import PageTransition from "./router/PageTransition"
import { getProjectBySlug } from "./data/projects"
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

    return <Home />;
}

function CurrentPage() {
    const { path } = useRoute();

    return (
        <>
            <Navbar />
            <PageTransition pageKey={path}>{resolvePage(path)}</PageTransition>
        </>
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
