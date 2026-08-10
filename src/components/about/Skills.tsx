import { skillCategories } from "../../data/skills"
import "./Skills.css"

function Skills() {
    return (
        <div className="card skills">
            <h2 className="skills__title">스킬</h2>
            <div className="skills__categories">
                {skillCategories.map((category) => (
                    <div className="skills__category" key={category.name}>
                        <h3 className="skills__category-name">{category.name}</h3>
                        <div className="skills__items">
                            {category.items.map((item) => (
                                <div className="skill-item" key={item.label}>
                                    <div className="skill-item__icon">
                                        <img src={item.icon} alt={item.label.replace("\n", " ")} />
                                    </div>
                                    <span className="skill-item__label">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
