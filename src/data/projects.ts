export interface ProjectTag {
    label: string;
    variant: "role" | "tech";
}

export interface Project {
    title: string;
    period: string;
    description: string;
    icon?: string;
    tags: ProjectTag[];
}

export const projects: Project[] = [
    {
        title: "Shotudy",
        period: "25. 07 ~ 26. 03",
        description: "스크린샷 기반 AI 언어 학습 웹",
        icon: "/images/projects/shotudy.png",
        tags: [
            { label: "백엔드", variant: "role" },
            { label: "서버", variant: "role" },
            { label: "Django", variant: "tech" },
            { label: "AWS", variant: "tech" },
        ],
    },
    {
        title: "만수무강",
        period: "24. 09 ~ 25. 02",
        description: "노인 건강 증진을 위한 Android 앱",
        icon: "/images/projects/mansu.png",
        tags: [
            { label: "프론트", variant: "role" },
            { label: "Kotlin", variant: "tech" },
            { label: "Android", variant: "tech" },
        ],
    },
    {
        title: "무한동력",
        period: "24. 07",
        description: "2D 탑뷰 공포 어드벤처 게임",
        tags: [
            { label: "게임", variant: "role" },
            { label: "C#", variant: "tech" },
            { label: "Unity", variant: "tech" },
        ],
    },
    {
        title: "키위콕",
        period: "23. 12 ~ 24. 01",
        description: "익명 편지 전달 웹 서비스",
        icon: "/images/projects/kiwikok.png",
        tags: [
            { label: "백엔드", variant: "role" },
            { label: "서버", variant: "role" },
            { label: "AWS", variant: "tech" },
            { label: "Django", variant: "tech" },
        ],
    },
];
