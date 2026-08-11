export interface ProjectPhase {
    label: string;
    period: string;
}

export interface ProjectOverview {
    description: string;
    phases?: ProjectPhase[];
}

export interface TeamMember {
    name: string;
    affiliation: string;
    role: string;
}

export interface FeatureRow {
    name: string;
    status: string;
}

export interface ArchitectureDiagram {
    image: string;
    caption: string;
}

export interface ApiRow {
    domain: string;
    method: string;
    endpoint: string;
    description: string;
}

export interface TechStackRow {
    name: string;
    description: string;
}

export type TechSection =
    | { type: "architecture"; title: string; diagrams: ArchitectureDiagram[] }
    | { type: "erd"; title: string; image: string }
    | { type: "api"; title: string; rows: ApiRow[] }
    | { type: "techStack"; title: string; rows: TechStackRow[] };

export interface AccordionEntry {
    title: string;
    detail: string;
}

export interface ProjectLink {
    label: string;
    url: string;
}

export interface ProjectDetailExtra {
    slug: string;
    number: string;
    heroImages?: string[];
    overview?: ProjectOverview;
    team?: TeamMember[];
    myRole?: string[];
    features?: FeatureRow[];
    techSections?: TechSection[];
    troubleshooting?: AccordionEntry[];
    retrospective?: AccordionEntry[];
    improvements?: AccordionEntry[];
    links?: ProjectLink[];
}

export const projectDetails: ProjectDetailExtra[] = [
    {
        slug: "shotudy",
        number: "01",
        overview: {
            description: "스크린샷 기반 AI 언어 학습 웹 서비스입니다.",
        },
        myRole: ["백엔드", "서버"],
    },
    {
        slug: "mansu",
        number: "02",
        overview: {
            description: "노인 건강 증진을 위한 Android 앱입니다.",
        },
        myRole: ["프론트"],
    },
    {
        slug: "muhandongryeok",
        number: "03",
        overview: {
            description: "2D 탑뷰 공포 어드벤처 게임입니다.",
        },
        myRole: ["게임"],
    },
    {
        slug: "kiwikok",
        number: "04",
        heroImages: [
            "/images/projects/kiwikok/hero-1.png",
            "/images/projects/kiwikok/hero-2.png",
            "/images/projects/kiwikok/hero-3.png",
        ],
        overview: {
            description:
                "'콕'은 홍익대학교 컴퓨터공학과 배드민턴 학회이다. Color My Tree 웹서비스의 익명 메시지 전달 방식을 참고하여, 신입 동아리원 간 익명 편지 플랫폼을 기획, 개발하였다.",
            phases: [
                { label: "기획 및 설계 / 기술 학습", period: "2023.09 ~ 2023.11" },
                { label: "MVP 개발", period: "2023.12 ~ 2024.1" },
            ],
        },
        team: [
            { name: "구재민", affiliation: "홍익대학교 컴퓨터공학과", role: "Backend, Server" },
            { name: "이 O", affiliation: "홍익대학교 컴퓨터공학과", role: "PM, Frontend" },
            { name: "강O제", affiliation: "홍익대학교 컴퓨터공학과", role: "Backend" },
            { name: "곽O민", affiliation: "홍익대학교 컴퓨터공학과", role: "Frontend" },
        ],
        myRole: [
            "Django 기반 백엔드 개발",
            "Google OAuth 로그인 기능 개발",
            "ERD 설계",
            "AWS EC2 서버 구축 및 운영",
            "GitHub Actions 기반 CI/CD 파이프라인 구축",
        ],
        features: [
            { name: "Google OAuth 로그인", status: "O" },
            { name: "사용자 편지함 생성", status: "O" },
            { name: "익명 편지 작성", status: "△" },
            { name: "익명 편지 조회", status: "△" },
            { name: "편지함 BGM", status: "X" },
        ],
        techSections: [
            {
                type: "architecture",
                title: "시스템 아키텍쳐",
                diagrams: [
                    { image: "/images/projects/kiwikok/arch-service.png", caption: "서비스 아키텍쳐" },
                    { image: "/images/projects/kiwikok/arch-deploy.png", caption: "배포 아키텍쳐" },
                ],
            },
            {
                type: "erd",
                title: "ERD",
                image: "/images/projects/kiwikok/erd.png",
            },
            {
                type: "api",
                title: "API 명세",
                rows: [
                    { domain: "Auth", method: "POST", endpoint: "/api/login", description: "(기존 유저) 구글 로그인" },
                    { domain: "Auth", method: "POST", endpoint: "/api/login", description: "(신규 가입) 회원가입" },
                    { domain: "Post", method: "GET", endpoint: "/api/{user_id}/post", description: "편지 목록 조회" },
                    { domain: "Post", method: "GET", endpoint: "/api/{user_id}/post/{id}", description: "편지 상세 조회" },
                    { domain: "Post", method: "POST", endpoint: "/api/{user_id}/post", description: "편지 작성" },
                    { domain: "Instagram", method: "POST", endpoint: "/api/insta", description: "인스타그램 ID 등록" },
                    { domain: "Instagram", method: "PATCH", endpoint: "/api/insta", description: "인스타그램 ID 수정" },
                    { domain: "Instagram", method: "DELETE", endpoint: "/api/insta/{user_id}", description: "인스타그램 ID 삭제" },
                ],
            },
            {
                type: "techStack",
                title: "기술스택",
                rows: [
                    { name: "Django", description: "Python 기반 프레임워크로, 익숙한 언어를 활용한 빠른 개발을 위해 선정" },
                    { name: "SQLite", description: "별도의 외부 DB 구축 없이 개발 환경을 간소화" },
                    { name: "Google OAuth 2.0", description: "사용자에게 신뢰성 부여 및 자체 회원가입 구현 대비 개발시간 단축" },
                    { name: "AWS EC2", description: "외부에서 접속 가능한 서버 환경을 구축" },
                    { name: "Github Actions", description: "배포 자동화를 통해 운영 효율성 향상" },
                ],
            },
        ],
        troubleshooting: [
            {
                title: "장기간 부재 상황에서의 서버 대응",
                detail: "서비스 운영 중 자리를 오래 비워야 하는 상황에서도 서버가 안정적으로 유지되도록 대응했습니다.",
            },
            {
                title: "테스트 서버에 개발 브랜치를 바로 배포",
                detail: "개발 브랜치를 테스트 서버에 바로 배포하는 흐름을 만들어 QA 속도를 높였습니다.",
            },
        ],
        retrospective: [
            {
                title: "MVP를 최소한으로 설정하자",
                detail: "일정 안에서 완성도를 높이려면 MVP 범위를 더 보수적으로 잡았어야 한다고 느꼈습니다.",
            },
            {
                title: "프로젝트는 매일 조금씩 진행하는 것이 중요하다",
                detail: "몰아서 작업하기보다 매일 꾸준히 진행하는 편이 결과물의 완성도에 더 도움이 되었습니다.",
            },
            {
                title: "마일스톤을 구체적으로 세워라",
                detail: "막연한 목표보다 구체적인 마일스톤을 세울수록 진행 상황을 파악하기 쉬웠습니다.",
            },
        ],
        improvements: [
            {
                title: "JWT 적용",
                detail: "세션 기반 인증을 JWT 기반으로 개선해 인증 구조를 확장 가능하게 만들 계획입니다.",
            },
            {
                title: "Service Layer 분리",
                detail: "View에 몰려 있던 로직을 Service Layer로 분리해 유지보수성을 높일 계획입니다.",
            },
            {
                title: "ERD 개선",
                detail: "초기 설계 이후 추가된 요구사항을 반영해 ERD를 다시 정리할 계획입니다.",
            },
        ],
        links: [{ label: "GitHub", url: "#" }],
    },
];

export function getProjectDetailExtra(slug: string) {
    return projectDetails.find((project) => project.slug === slug);
}
