import "./HeroRight.css"

const CODE_SAMPLE = `const developer = {
    name: "JAEMIN KU",
    major: "Computer Engineering",
    focus: ["Backend", "Server", "AI"],
};

while (1) {
    learn();
    build();
    solve();
}

$ git status
projects/
experience/
skills/
contact/

return 0;`;

function HeroRight() {
    return (
        <pre className="hero-right__filler">{CODE_SAMPLE}</pre>
    );
}

export default HeroRight;
