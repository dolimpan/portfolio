import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"
import ScrollIndicator from "./ScrollIndicator"
import "./HeroSection.css"

function HeroSection() {
    return (
        <section className="hero">
            <HeroLeft />
            <HeroRight />
            <ScrollIndicator />
        </section>
    );
}

export default HeroSection;
