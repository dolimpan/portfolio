import Home from "./pages/Home"
import About from "./pages/About"
import { RouteProvider } from "./router/RouteProvider"
import { useRoute } from "./router/routeContext"

function CurrentPage() {
    const { path } = useRoute();

    if (path === "/about") {
        return <About />;
    }
    return <Home />;
}

function App() {
    return (
        <RouteProvider>
            <CurrentPage />
        </RouteProvider>
    );
}

export default App
