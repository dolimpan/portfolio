import HeroSection from "../components/hero/HeroSection"
import BorderFrame from "../components/layout/BorderFrame"
import Navbar from "../components/layout/Navbar"

function Home() {
    return (
        <>
            <Navbar />
            <BorderFrame>
                <HeroSection />
            </BorderFrame>
        </>
    );
}

export default Home;
