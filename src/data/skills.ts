export interface SkillItem {
    label: string;
    icon: string;
}

export interface SkillCategory {
    name: string;
    items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: "Languages",
        items: [
            { label: "C++", icon: "/images/skills/cpp.png" },
            { label: "Python", icon: "/images/skills/python.png" },
            { label: "Kotlin", icon: "/images/skills/kotlin.png" },
        ],
    },
    {
        name: "Backend",
        items: [
            { label: "Django\nDRF", icon: "/images/skills/django.png" },
        ],
    },
    {
        name: "DevOps",
        items: [
            { label: "Amazon\nEC2", icon: "/images/skills/ec2.png" },
            { label: "Nginx", icon: "/images/skills/nginx.png" },
            { label: "GitHub\nActions", icon: "/images/skills/github-actions.png" },
        ],
    },
    {
        name: "Tools",
        items: [
            { label: "Git", icon: "/images/skills/git.png" },
            { label: "Notion", icon: "/images/skills/notion.png" },
            { label: "Figma", icon: "/images/skills/figma.png" },
        ],
    },
];
