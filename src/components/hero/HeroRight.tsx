import "./HeroRight.css"

const FILLER_TEXT = "lorem ipsum dolor sit amet consectetur adipiscing elit "
    .repeat(40)
    .trim();

function HeroRight() {
    return (
        <p className="hero-right__filler" aria-hidden="true">
            {FILLER_TEXT}
        </p>
    );
}

export default HeroRight;
