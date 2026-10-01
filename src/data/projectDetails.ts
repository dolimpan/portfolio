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
    description?: string;
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

export interface ProjectRoleGroup {
    category: string;
    tasks: string[];
}

export type TechSection =
    | { type: "architecture"; title: string; diagrams: ArchitectureDiagram[] }
    | { type: "erd"; title: string; image: string }
    | { type: "api"; title: string; rows: ApiRow[] }
    | { type: "techStack"; title: string; rows: TechStackRow[]; columnLabels?: [string, string] };

export interface AccordionEntry {
    title: string;
    detail: string;
}

export interface TroubleshootingEntry {
    title: string;
    problem: string;
    solution: string;
    lesson: string;
}

export interface ProjectLink {
    label: string;
    url: string;
}

export interface ProjectDetailExtra {
    slug: string;
    number: string;
    heroImages?: string[];
    heroVideo?: string;
    overview?: ProjectOverview;
    team?: TeamMember[];
    myRole?: string[];
    roleGroups?: ProjectRoleGroup[];
    features?: FeatureRow[];
    techSections?: TechSection[];
    troubleshooting?: TroubleshootingEntry[];
    retrospective?: AccordionEntry[];
    improvements?: AccordionEntry[];
    links?: ProjectLink[];
}

export const projectDetails: ProjectDetailExtra[] = [
    {
        slug: "shotudy",
        number: "01",
        heroImages: [
            "/images/projects/shotudy/hero-1.png",
            "/images/projects/shotudy/hero-2.png",
            "/images/projects/shotudy/hero-3.png",
        ],
        overview: {
            description: "군 복무 중 '개인정비시간을 보다 의미 있게 활용할 방법은 없을까?'라는 질문에서 본 프로젝트를 시작했다. \n 병사들이 개인정비시간에 OTT 콘텐츠를 자주 시청한다는 점에 착안해, \n좋아하는 콘텐츠를 즐기면서 자연스럽게 언어를 학습할 수 있는 환경을 제공하고자 하였다. \n\n이를 바탕으로 사용자가 콘텐츠 화면을 캡처하면 OCR로 텍스트를 추출하고, \nLLM이 단어장과 퀴즈 등 학습 콘텐츠를 자동 생성하는 AI 언어 학습 서비스 Shotudy를 개발했다. \n\n이 프로젝트는 제14회 육군 창업경진대회에서 창의상을, 2026 pre-국방 Start-up 챌린지에서 최우수상을 수상했다.",
            phases: [
                { label: "기획 및 설계", period: "2025.07 ~ 2026.03" },
                { label: "MVP 개발", period: "2026.04 ~ 2026.06" },
            ],
        },
        team: [
            { name: "구재민", affiliation: "홍익대학교 컴퓨터공학과", role: "Backend · Server" },
            { name: "강O제", affiliation: "동국대학교 경영학과 · 컴퓨터공학 복수전공", role: "PM · Frontend · 기획" },
            { name: "황O택", affiliation: "홍익대학교 자율전공학부", role: "Backend · Content" },
            { name: "이O준", affiliation: "경희대학교 컴퓨터공학과", role: "Frontend · Strategy" },
            { name: "김O현", affiliation: "서울대학교 소비자아동학부", role: "Planning · Strategy" },
        ],
        roleGroups: [
            { category: "Authentication", tasks: ["Google OAuth 로그인 구현", "JWT 기반 인증 시스템 구축"] },
            { category: "OCR", tasks: ["이미지 업로드 API 구현", "OCR 파이프라인 구현", "OCR 결과 전처리 및 후처리"] },
            { category: "AI", tasks: ["OpenAI API 연동", "Prompt Engineering", "모델 성능 비교 및 검증", "LLM 응답 후처리"] },
            { category: "API", tasks: ["Django REST Framework 기반 API 구현", "Serializer를 활용한 Request/Response 처리"] },
            { category: "Feature", tasks: ["단어장 CRUD API 개발"] },
            { category: "Infrastructure", tasks: ["AWS EC2 서버 배포", "Nginx · Gunicorn 운영", "GitHub Actions + AWS SSM 기반 CI/CD 구축", "HTTPS(SSL) 적용", "도메인 구매 및 연결"] },
            { category: "Database", tasks: ["Django ORM 기반 PostgreSQL 데이터 모델 구현"] },
        ],
        features: [
            { name: "OCR 기반 대사 추출", description: "콘텐츠 화면을 업로드하면 OCR로 텍스트를 추출 및 후처리 진행", status: "O" },
            { name: "AI 학습 콘텐츠 생성", description: "추출된 대사에서 핵심 단어를 추출하고 LLM이 뜻, 예문, 유의어 등 학습 콘텐츠를 자동 생성", status: "O" },
            { name: "AI 단어장 생성", description: "생성된 단어를 기반으로 자동·수동 단어장을 생성하고 에피소드 단위로 관리", status: "O" },
            { name: "퀴즈 및 학습 관리", description: "생성된 단어를 퀴즈로 학습하고 학습 여부를 기록 및 관리", status: "O" },
        ],
        techSections: [
            {
                type: "architecture",
                title: "시스템 아키텍처",
                diagrams: [
    { image: "/images/projects/shotudy/arch-overall.png", caption: "서비스 아키텍처" },
    { image: "/images/projects/shotudy/arch-deploy.png", caption: "배포 아키텍처" },
    { image: "/images/projects/shotudy/arch-ocr.png", caption: "OCR 아키텍처" },
                ],
            },
            { type: "erd", title: "ERD", image: "/images/projects/shotudy/erd.png" },
            {
                type: "api",
                title: "API 명세",
                rows: [
                    { domain: "Auth", method: "POST", endpoint: "/login", description: "Google OAuth 로그인 및 JWT 발급" },
                    { domain: "Media", method: "POST", endpoint: "/medias", description: "미디어 및 에피소드 등록" },
                    { domain: "Analyze", method: "POST", endpoint: "/analyze", description: "OCR, AI 분석, WordCard 저장 통합 처리" },
                    { domain: "Wordbook", method: "GET", endpoint: "/wordbooks", description: "단어장 조회" },
                    { domain: "Wordbook", method: "POST", endpoint: "/wordbooks", description: "단어장 생성" },
                    { domain: "Wordbook", method: "PATCH", endpoint: "/wordbooks/{id}", description: "단어장 수정" },
                    { domain: "Wordbook", method: "DELETE", endpoint: "/wordbooks/{id}", description: "단어장 삭제" },
                    { domain: "Learning", method: "PATCH", endpoint: "/wordcards/{id}", description: "학습 상태 업데이트" },
                ],
            },
            {
                type: "techStack",
                title: "기술 선정 이유",
                rows: [
                    { name: "Django REST Framework", description: "REST API를 빠르게 구축할 수 있고, Serializer와 ORM을 활용해 데이터 처리 로직을 효율적으로 작성" },
                    { name: "PostgreSQL", description: "대용량 데이터를 안정적으로 처리하고 관리" },
                    { name: "Tesseract OCR", description: "서버에서 직접 OCR을 수행해 응답 지연을 최소화\n모바일 스크린샷 기반 서비스 특성상 Tesseract만으로도 충분한 인식 정확도 확보\n오픈소스 라이브러리로 별도의 API 비용 없이 사용" },
                    { name: "OpenAI API (4o-mini)", description: "OCR로 추출한 텍스트를 구조화하고 핵심 단어 및 학습 콘텐츠를 생성\nAPI 비용 대비 출력 품질과 응답 안정성이 가장 우수" },
                    { name: "AWS EC2", description: "Tesseract OCR 실행에 필요한 서버 환경을 구성하고, 실제 서비스와 유사한 배포 환경을 구축" },
                    { name: "GitHub Actions", description: "배포 자동화(CI/CD)를 구현" },
                ],
            },
        ],
        troubleshooting: [
            {
                title: "API 호출 구조 개선",
                problem: "기존에는 OCR, AI 분석, WordCard 저장을 각각 별도의 API로 구현했다. \n이에 수정사항 발생 시 프론트, 백 모두 수정을 해야하는 유지보수 상 불편함이 발생했다.",
                solution: "/analyze API를 추가하여 OCR부터 WordCard 저장까지 하나의 요청으로 처리하도록 변경했다.",
                lesson: "API는 기능 단위가 아니라 클라이언트가 사용하는 단위로 설계해야 한다는 점을 배웠다.",
            },
            {
                title: "프론트엔드·백엔드 도메인 분리",
                problem: "백엔드 API 주소를 shotudy.site/api/...에서 api.shotudy.site/...로 변경하게 되었다.\n 기존 프론트엔드는 shotudy.site/api/...를 호출하도록 구현되어 API 주소를 모두 수정해야 했다.",
                solution: "Nginx Reverse Proxy를 설정하여 shotudy.site/api/* 요청을 api.shotudy.site/*로 전달하도록 구성했다.",
                lesson: "Reverse Proxy를 활용하면 클라이언트 수정 없이 API 주소를 변경할 수 있다는 점을 알게 되었다.",
            },
            {
                title: "GitHub Actions 배포 실패에도 성공으로 표시",
                problem: "SSM은 명령을 서버에 전달하기만 하면 성공 처리되기 때문에, \n실제 배포가 실패해도 GitHub Actions는 성공(✔)으로 표시됐다. \n결과를 확인하려면 매번 서버에 직접 접속해야 했다.",
                solution: "send-command의 Command ID로 get-command-invocation을 호출해 실행 결과를 조회하고,\n gunicorn 로그도 함께 출력해 Actions 로그에서 바로 확인할 수 있게 했다.",
                lesson: "CI/CD는 자동화뿐 아니라 결과를 확인할 수 있는 가시성도 중요하다는 걸 배웠다.",
            },
            {
                title: "DB 단어 중복 저장",
                problem: "사용자가 단어장을 생성할 때 apple, Apple, applE처럼 대소문자만 다른 동일한 단어가 \n서로 다른 데이터로 저장되는 문제가 발생했다.",
                solution: "저장 시 모든 단어를 소문자로 변환하여 저장하는 기준을 적용했다.\n 또한 소문자로 변환한 값을 기준으로 중복 여부를 검사하도록 수정했다.",
                lesson: "사용자 입력은 다양한 형태로 들어오기 때문에, 저장 전에 표준화(Normalization) 과정을 거쳐 \n데이터의 일관성을 유지하는 것이 중요하다는 점을 배웠다.",
            },
        ],
        retrospective: [
            {
                title: "개발 환경의 제약 극복 경험",
                detail: [
                    "군대 사이버 정보 지식방에서 개발을 진행했는데, 보안 정책으로 인해 Visual Studio 설치와 커맨드 창 사용이 제한되어 있었다.\n",
                    "이에 GitHub Codespaces를 개발 환경으로 활용하고, SSH 대신 AWS Systems Manager(SSM)를 통해 서버에 접속했다. \n이를 통해 환경 제약 속에서도 개발을 지속할 수 있었으며, 클라우드 기반 개발 환경과 AWS 관리 도구를 활용하는 경험을 쌓았다.",
                ].join(" "),
            },
            {
                title: "이벤트 로그는 출시 전에 설계해야 한다",
                detail: [
                    "베타테스트를 진행한 후에야 사용자 행동 데이터를 수집하지 않았다는 점을 깨달았다.",
                    "\n그 결과 데이터베이스에 저장된 이미지 개수와 같은 단순 정량 데이터만 확인할 수 있었고,\n 로그인 시간대, 사용자 이탈 지점, 기능 사용 패턴 등 서비스 개선에 필요한 정보를 분석할 수 없었다.",
                    "\n이 경험을 통해 이벤트 로그는 출시 전에 분석 목적에 맞춰 미리 설계하고 구현해야 한다는 점을 배웠다.",
                ].join(" "),
            },
            {
                title: "AI를 활용하더라도 코드에 대한 이해는 필수다",
                detail: [
                    "ERD를 충분히 이해하지 않은 상태에서 AI를 활용해 구현을 진행했다.",
                    "\n초기에는 빠르게 개발할 수 있었지만, 기능을 추가하거나 버그를 수정하는 과정에서\n 테이블 간 관계와 데이터 흐름을 직접 이해해야 하는 상황이 반복되었다.",
                    "\n이 경험을 통해 AI는 구현 속도를 높여주는 도구일 뿐이며, \n유지보수와 확장을 위해서는 개발자가 설계와 코드의 동작 원리를 직접 이해하고 있어야 한다는 점을 배웠다.",
                ].join(" "),
            },
            {
                title: "실제 구현보다 사전 설계가 더 중요하다",
                detail: [
                    "LLM의 발전으로 구현 자체의 진입장벽은 크게 낮아졌다. \n전체적인 구조만 이해하고 있다면 처음 접하는 언어라도 짧은 시간 안에 기능을 구현할 수 있다.\n 하지만 AI는 구현의 속도를 높여줄 뿐, 잘못된 설계를 보완해 주지는 못한다. \n프로젝트를 진행하며 초기 설계의 중요성을 여러 번 체감했다.\n",
                    "1. 이벤트 로그를 사전에 설계하지 않아 베타테스트 동안 사용자 행동 데이터를 수집하지 못했고, 서비스 개선에 활용할 중요한 정보를 모두 놓쳤다.",
                    "\n2. 원본 이미지를 저장하지 않는 구조로 설계하여, 이후 이미지 재활용 기능을 추가하면서 MEDIA_ROOT, MEDIA_URL, save_image(), Sentence 모델, save_sentences() 등 여러 계층의 코드를 수정해야 했다.",
                    "\n3. Sentence 모델이 Episode만 참조하도록 설계했으나, 이후 사용자별 데이터 조회와 권한 관리가 필요해지면서 User와의 관계를 추가해야 했다. 이 변경은 모델뿐 아니라 마이그레이션, 서비스 로직, Serializer, API까지 연쇄적인 수정으로 이어졌다.",
                ].join(" "),
            },
        ],
        improvements: [
            {
                title: "플로팅 버튼 기반 학습 기능 추가",
                detail: "영상 시청 중 플로팅 버튼으로 원하는 장면을 바로 저장하고, \n시청이 끝난 후 저장한 장면을 한 번에 학습할 수 있는 기능 구현을 하고자 한다",
            },
            {
                title: "이벤트 로그 및 분석 시스템 구축",
                detail: "로그인, OCR 완료율, LLM 응답 시간, 사용자 이탈 지점 등의 이벤트 로그 수집 대시보드를 구축하여 \n실제 사용자 데이터를 기반으로 서비스 개선하고자 한다",
            },
            {
                title: "비동기 처리 및 작업 큐 도입",
                detail: "OCR과 LLM 호출을 Celery + Redis 기반으로 비동기 처리하여 사용자 대기 시간 감소를 이루고자 한다",
            },
            {
                title: "Docker 기반 배포 환경 구축",
                detail: "Docker를 활용하여 개발 환경과 운영 환경을 동일하게 구성하고 배포 환경을 개선하고자 한다",
            },
        ],
        links: [{ label: "GitHub", url: "https://github.com/dolimpan/shotudy-back" }],
    },
    {
        slug: "msmg",
        number: "02",
        heroImages: [
            "/images/projects/msmg/hero-1.jpg",
            "/images/projects/msmg/hero-2.jpg",
            "/images/projects/msmg/hero-3.jpg",
        ],
        overview: {
            description: "만수무강은 건강 사각지대에 놓인 노인들의 자발적인 운동 참여를 돕기 위해 개발된 안드로이드 애플리케이션이다.\n 전국 대학 연합 동아리 UMC 7기 최종 프로젝트로 진행되었으며, \n운동 기록, 만보기, 건강 일기 등 다양한 기능을 통해 사용자가 꾸준한 운동 습관을 형성할 수 있도록 보조한다.",
            phases: [
                { label: "기획 및 설계 / 기술 학습", period: "2024.09 ~ 2024.12" },
                { label: "MVP 개발", period: "2025.01 ~ 2025.02" },
            ],
        },
        team: [
            { name: "구재민", affiliation: "홍익대학교 컴퓨터공학과", role: "Frontend" },
            { name: "최O정", affiliation: "연세대학교 컴퓨터과학과", role: "PM" },
            { name: "남O서", affiliation: "연세대학교 컴퓨터과학과", role: "PM" },
            { name: "손O민", affiliation: "이화여자대학교 컴퓨터과학과", role: "Backend" },
            { name: "한O정", affiliation: "이화여자대학교 컴퓨터과학과", role: "Backend" },
            { name: "이O윤", affiliation: "이화여자대학교 컴퓨터과학과", role: "Backend" },
            { name: "양O주", affiliation: "이화여자대학교 컴퓨터과학과", role: "Backend" },
            { name: "박O은", affiliation: "연세대학교 컴퓨터과학과", role: "Frontend" },
            { name: "성O모", affiliation: "연세대학교 컴퓨터과학과", role: "Frontend" },
            { name: "이O연", affiliation: "홍익대학교 시각디자인과", role: "Design" },
        ],
        myRole: [
            "Android 프론트엔드 개발",
            "Kakao OAuth 및 전화번호 기반 일반 로그인 구현, 서버 인증 API 연동",
            "Google Maps SDK와 Android Location Services를 활용한 위치 기반 공원 탐색 및 보상 기능 구현",
            "Android SpeechRecognizer로 음성 답변을 텍스트로 변환하고 OpenAI API로 운동 능력을 분석해 상·중·하 등급으로 분류",
            "Figma 와이어프레임을 기반으로 Fragment와 ViewBinding을 활용한 Android UI 구현",
            "TYPE_STEP_COUNTER로 실시간 걸음 수를 측정하고 날짜별 걸음 수를 관리하는 만보기 기능 구현",
        ],
        features: [
            { name: "Kakao 계정 / 전화번호 기반 회원가입 및 로그인", status: "O" },
            { name: "음성 인식과 ChatGPT를 활용한 개인별 운동 능력 진단", status: "O" },
            { name: "운동 능력에 따른 맞춤형 영상 추천", status: "O" },
            { name: "실시간 걸음 수 측정 및 날짜별 만보기 관리", status: "O" },
            { name: "위치 기반 공원 탐색 및 보상 기능", status: "O" },
        ],
        techSections: [
            {
                type: "architecture",
                title: "시스템 아키텍처",
                diagrams: [
                    { image: "/images/projects/msmg/arch-overall.png", caption: "전체 아키텍처" },
                    { image: "/images/projects/msmg/arch-GPT.png", caption: "ChatGPT 운동 능력 진단 프로세스" },
                    { image: "/images/projects/msmg/arch-sensor.png", caption: "만보기 프로세스" },
                    { image: "/images/projects/msmg/arch-walk.png", caption: "주변 공원 찾기 프로세스" },
                ],
            },
            {
                type: "api",
                title: "API 명세",
                rows: [
                    { domain: "Auth", method: "GET", endpoint: "/api/auth/login/kakao", description: "카카오 OAuth 로그인" },
                    { domain: "Auth", method: "PATCH", endpoint: "/api/users/signup-info", description: "회원가입 추가 정보 저장" },
                    { domain: "User", method: "GET", endpoint: "/api/users/user-info", description: "회원 정보 조회" },
                    { domain: "User", method: "PUT / DELETE", endpoint: "/api/users/{userId}", description: "회원 정보 수정 및 탈퇴" },
                    { domain: "Workout", method: "GET", endpoint: "/api/workouts", description: "운동 카테고리 조회" },
                    { domain: "Workout", method: "POST", endpoint: "/api/workouts/log", description: "운동 기록 저장" },
                    { domain: "Step", method: "GET / PUT", endpoint: "/api/steps/{userId}", description: "걸음 수 조회 및 갱신" },
                    { domain: "Point", method: "GET", endpoint: "/api/points/my-point", description: "포인트 조회" },
                    { domain: "History", method: "GET", endpoint: "/api/histories/summary", description: "운동 통계 조회" },
                    { domain: "Notification", method: "GET / POST", endpoint: "/api/notifications", description: "알림 조회 및 생성" },
                ],
            },
            {
                type: "techStack",
                title: "기술 선정 이유",
                rows: [
                    { name: "Kotlin", description: "Android 네이티브 앱 개발" },
                    { name: "Google Maps SDK", description: "지도 및 마커, Polyline 시각화" },
                    { name: "Google Places API", description: "현재 위치 기반 주변 공원 검색" },
                    { name: "Retrofit2", description: "REST API 통신" },
                    { name: "Gson", description: "JSON 직렬화 및 역직렬화" },
                    { name: "SharedPreferences", description: "신체 정보 등 사용자 개인정보 저장" },
                    { name: "OpenAI API", description: "초기 가입 시 사용자 신체 능력 진단" },
                ],
            },
        ],
        troubleshooting: [
            {
                title: "앱 지원 Android 버전과 데모 기기의 Android 버전 불일치",
                problem: "앱의 Android 지원 버전과 데모 기기의 Android 버전이 맞지 않아 앱을 실행할 수 없었다.",
                solution: "데모 기기는 펌웨어 업데이트를 지원하지 않았고 개발 완료 시점에서 minSdkVersion 버전을 변경하기 어려워, \n호환 가능한 Android 버전의 기기를 별도로 준비해 시연을 진행했다.",
                lesson: "프로젝트 시작 단계에서 Target SDK 버전을 명확히 결정하고 \n데모 환경 및 목표 사용자층의 기기 사양을 함께 고려해야 한다는 점을 배웠다. \n특히 고연령층 사용자는 구형 기기를 사용하는 비율이 높으므로 지원 Android 버전을 사전에 검토하는 것이 중요하다고 느꼈다.",
            },
            {
                title: "ChatGPT API의 출력 형식 정제 어려움",
                problem: "ChatGPT API가 지정된 형식인 상·중·하 대신 문장이나 영어 등 다양한 형태로 응답해 예외가 발생했다.",
                solution: "출력 형식을 명확히 제한하도록 프롬프트를 개선하고 System Role을 추가해 모델의 역할과 응답 규칙을 구체적으로 정의했다.",
                lesson: "LLM을 서비스에 적용할 때는 API를 호출하는 것만으로 충분하지 않았다. 프롬프트 엔지니어링뿐 아니라 System Role 설계, 출력 형식 제어, 예외 상황을 고려한 후처리까지 함께 설계해야 안정적인 서비스를 구현할 수 있다는 점을 배웠다.",
            },
            {
                title: "지도 접근 시 NullPointerException 발생",
                problem: "GoogleMap이 초기화되기 전에 지도 객체에 접근해 NullPointerException이 발생했다.",
                solution: "지도 초기화가 완료되는 onMapReady() 이후에만 지도 관련 로직을 실행하도록 수정했다.",
                lesson: "Android에서는 비동기적으로 초기화되는 객체가 많으므로 객체의 생명주기(Lifecycle)와 초기화 시점을 고려해\n 로직을 작성해야 한다는 점을 배웠다.",
            },
            {
                title: "GPS 위치 오차로 인해 이벤트가 발생하지 않음",
                problem: "GPS 위치 오차로 사용자가 목적지에 도착했음에도 위치 기반 이벤트가 정상적으로 실행되지 않았다.",
                solution: "GPS 오차를 고려해 이벤트가 발생하는 거리 허용 범위를 확대했다.",
                lesson: "GPS는 오차를 포함하는 센서 데이터이므로 실제 사용 환경을 고려한 허용 범위를 함께 설계하는 것이 중요하다는 점을 배웠다.",
            },
        ],
        retrospective: [
            {
                title: "UI는 서비스의 신뢰와 전문성을 결정한다",
                detail: "UMC 개발 발표회에서 다른 팀들의 서비스를 직접 사용해 보며 UI의 중요성을 체감했다. \n사용자는 백엔드나 서버 구조보다 먼저 UI를 접하기 때문에 첫인상이 서비스의 신뢰도와 완성도에 큰 영향을 미쳤다. \n실제 기능이 우수하더라도 UI 완성도가 낮은 서비스는 만족도가 떨어졌고, 반대로 직관적이고 완성도 높은 UI는 서비스에 대한 신뢰와 기대감을 높여 주었다.",
            },
            {
                title: "UX(User Experience)의 중요성을 체감했다",
                detail: "앱 시연 과정에서 1초 정도의 로딩 지연이나 불편한 UI 배치만으로도 \n사용자의 흥미와 관심이 빠르게 감소하는 모습을 직접 경험했다. \n이를 통해 기능의 완성도뿐 아니라 로딩 속도, 화면 구성, 사용 흐름 등 사용자 경험이\n 서비스 만족도에 큰 영향을 미친다는 점을 깨달았다. \n대체 서비스가 많은 환경에서는 작은 불편함도 사용자 이탈로 이어질 수 있으므로 \n앞으로는 기능 구현뿐 아니라 최적화와 UX까지 함께 고려하며 개발해야 한다는 점을 배웠다.",
            },
            {
                title: "프론트엔드와 백엔드의 역할을 이해하게 되었다",
                detail: "당시에는 필요한 데이터를 얻기 위해 외부 API를 프론트엔드에서 직접 연동하고\n 백엔드와의 협의 없이 인터페이스를 설계하기도 했다.\n 이후 Django와 DRF를 학습하면서 비즈니스 로직과 외부 API 연동은 백엔드에서 담당하고\n 프론트엔드는 API 명세를 기반으로 화면을 구현하는 것이 일반적인 협업 방식임을 이해하게 되었다.",
            },
        ],
        improvements: [
            {
                title: "OpenAI API 호출 구조 개선",
                detail: "현재는 Android → OpenAI API 구조로 클라이언트에서 직접 OpenAI API를 호출하고 있다. \n이를 Android → Backend → OpenAI API 구조로 개선해 API Key를 서버에서 안전하게 관리하고 프롬프트를 중앙에서 관리하고자 한다.",
            },
            {
                title: "MVVM 아키텍처 적용",
                detail: "현재 프로젝트는 MVVM이나 MVC와 같은 아키텍처를 적용하지 않아\n 화면, 비즈니스 로직, 데이터 처리가 여러 Fragment에 나뉘어 있다. \n향후 MVVM 아키텍처를 적용해 View는 UI, ViewModel은 UI 상태 및 비즈니스 로직, \nRepository는 데이터 및 API 통신을 담당하도록 계층을 분리하고자 한다.",
            },
            {
                title: "예외 처리 보완",
                detail: "현재 프로젝트는 OpenAI API 호출 실패, 네트워크 연결 오류, 타임아웃 등 예외 상황에 대한 처리가 충분하지 않다.\n 향후 API 호출 실패 시 재시도 기능을 추가하고 오류 원인에 맞는 사용자 안내 메시지와 로딩 상태를 제공해 사용자 경험을 향상시키고자 한다.",
            },
        ],
        links: [{ label: "GitHub", url: "https://github.com/dolimpan/MSMG/tree/main" }],
    },
    {
        slug: "mhdl",
        number: "03",
        heroVideo: "/images/projects/mhdl/데모 플레이.mp4",
        overview: {
            description: "무한동력은 멸망한 지구에서 살아남아 무한동력을 개발하려는 주인공 김경남의 여정을 담은 2D 탑뷰 싱글플레이어 공포 게임이다. \n플레이어는 몬스터의 공격을 피하고 퀘스트를 수행하며 재료를 모은다. \n경남 마이미 게임잼 해커톤에서 무박 3일 동안 팀원들과 기획부터 개발까지 진행했다.",
            phases: [{ label: "기획 및 개발", period: "2024.07" }],
        },
        team: [
            { name: "구재민", affiliation: "홍익대학교 컴퓨터공학과", role: "PM · Unity 게임 개발" },
            { name: "이O혁", affiliation: "홍익대학교 컴퓨터공학과", role: "Unity 게임 개발" },
            { name: "고O현", affiliation: "홍익대학교 컴퓨터공학과", role: "Unity 게임 개발" },
            { name: "최O은", affiliation: "홍익대학교 시각디자인과", role: "아트" },
        ],
        myRole: [
            "PM 및 Unity 게임 개발",
            "플레이어 이동 및 입력 처리 구현",
            "손전등 시스템 구현",
            "몬스터 3종의 행동 패턴 및 기믹 구현",
            "게임 진행 상태를 관리하는 GameManager 구현",
            "플레이어를 추적하는 카메라 시스템 구현",
        ],
        features: [
            { name: "플레이어 이동 및 카메라 추적", status: "O" },
            { name: "손전등 기반 탐색 시스템", status: "O" },
            { name: "몬스터 3종 행동 패턴 및 기믹", status: "O" },
            { name: "퀘스트 및 NPC 대화 시스템", status: "O" },
            { name: "인벤토리 및 아이템 조합 시스템", status: "△" },
        ],
        techSections: [
            {
                type: "architecture",
                title: "아키텍처 및 상태 흐름도",
                diagrams: [
                    { image: "/images/projects/mhdl/arch_overall.png", caption: "서비스 아키텍처" },
                    { image: "/images/projects/mhdl/arch_boss.png", caption: "보스 몬스터 아키텍처" },
                    { image: "/images/projects/mhdl/arch_cat.png", caption: "고양이 몬스터 아키텍처" },
                    { image: "/images/projects/mhdl/arch_bat.png", caption: "박쥐 몬스터 아키텍처" },
                ],
            },
            {
                type: "techStack",
                title: "기술 스택",
                columnLabels: ["구분", "기술"],
                rows: [
                    { name: "게임 엔진", description: "Unity" },
                    { name: "프로그래밍 언어", description: "C#" },
                    { name: "IDE", description: "Visual Studio Code" },
                    { name: "UI/UX 디자인", description: "Figma" },
                    { name: "문서화", description: "Notion, Google Docs" },
                    { name: "버전 관리", description: "Unity Version Control" },
                ],
            },
        ],
        troubleshooting: [
            {
                title: "발표 직전 최종 피드백으로 방향을 재정립",
                problem: "발표를 앞두고 멘토에게 게임 전반에 대한 피드백을 받았다.\n 게임의 색깔과 조작감, 기믹, 서사가 뚜렷하지 않아 강점이 잘 드러나지 않는다는 평가였다.",
                solution: "팀의 방향을 공포로 다시 정하고, 남은 시간에 맞춰 맵 디자인과 연출을 공포 분위기 중심으로 정리했다. \n팀원들과 우선순위를 공유하고 바로 실행할 수 있는 작업으로 나누었다.",
                lesson: "제한된 시간에는 세부 완성도보다 게임의 핵심 재미와 대회의 평가 기준을 먼저 맞춰야 한다는 점을 배웠다.\n 갑작스러운 피드백을 실행 가능한 단계로 정리하고 팀이 움직일 수 있도록 돕는 것도 팀장의 역할임을 알게 되었다.",
            },
            {
                title: "캐릭터 히트박스가 지형에 걸리는 문제",
                problem: "캐릭터와 지형의 히트박스가 겹치면서 캐릭터가 벽에 끼는 문제가 발생했다.",
                solution: "캐릭터의 히트박스를 실제 비주얼보다 작게 조정해 벽이나 지형 모서리에 걸리는 상황을 줄였다.",
                lesson: "충돌 판정은 캐릭터의 외형 크기에 맞추기보다 플레이어가 느끼는 조작감에 맞춰야 한다. \n게임에서는 논리적으로 정확한 크기보다 직관적인 움직임이 더 중요할 수 있다는 점을 배웠다.",
            },
            {
                title: "공포 분위기가 충분히 전달되지 않는 문제",
                problem: "공포 게임으로 기획했지만 초기 버전에서는 긴장감이 부족해 공포스러운 분위기가 잘 형성되지 않았다.",
                solution: "배경음악과 효과음을 보강하고 화면 노이즈와 필터를 적용해 시각·청각 연출을 강화했다.",
                lesson: "게임의 분위기와 몰입감은 개발 기능만으로 완성되지 않는다. 사운드와 아트 연출이 플레이 경험에 큰 영향을 준다는 점을 체감하며 다양한 직군의 협업이 필요한 이유를 알게 되었다.",
            },
        ],
        retrospective: [
            {
                title: "대회의 의도를 먼저 파악하자",
                detail: "게임잼은 제한된 시간 안에 게임의 핵심 아이디어와 알고리즘을 빠르게 구현해 가능성을 보여주는 자리였다.\n 완성도 높은 게임 전체를 만드는 데 집중하기보다 참신한 아이디어가 담긴 핵심 모델을 먼저 구현했어야 했다.\n 우리는 디자인, 배경음악, 캐릭터 모델링 등 세부 요소에 시간을 많이 썼고, 그만큼 핵심 아이디어를 검증하는 시간이 부족했다.",
            },
            {
                title: "컨디션 관리도 개발의 일부다",
                detail: "잠을 줄여가며 개발을 이어갔지만 피로가 쌓이면서 판단력과 작업 효율이 떨어졌다. \n잠시라도 충분히 자고 다시 작업했을 때 문제를 보는 시야와 집중력이 달라지는 것을 느꼈다. \n무작정 작업 시간을 늘리기보다 휴식 시간을 포함해 일정을 계획하는 것이 결과적으로 더 나은 개발로 이어진다는 점을 배웠다.",
            },
            {
                title: "팀장은 팀원의 멘탈도 살펴야 한다",
                detail: "마감 8시간 전, 멘토의 피드백을 받고 팀 분위기가 크게 가라앉았다.\n 게임의 색깔과 조작감, 기믹, 서사가 뚜렷하지 않다는 평가를 받은 상황에서 남은 시간은 짧았고 팀원들도 지쳐 있었다. \n팀장으로서 팀원들을 격려하고 공포라는 방향을 다시 세운 뒤, 남은 작업을 구체적인 단계로 나누어 진행했다. \n위기 상황에서는 방향을 정하는 것뿐 아니라 팀원이 다시 집중할 수 있도록 돕는 일도 중요하다는 점을 배웠다.",
            },
        ],
        improvements: [
            {
                title: "저사양 기기를 위한 그래픽 옵션 추가",
                detail: "후처리 효과를 적용한 뒤 사양이 낮은 환경에서 화면이 끊기는 현상이 있었다.\n 후처리 효과를 끄거나 품질을 낮출 수 있는 옵션을 제공해 다양한 사양의 기기에서도 쾌적하게 실행할 수 있도록 개선하고자 한다.",
            },
        ],
        links: [{ label: "GitHub", url: "https://github.com/dolimpan/mhdl" }],
    },
    {
        slug: "kiwicoke",
        number: "04",
        heroImages: [
            "/images/projects/kiwicoke/hero-1.png",
            "/images/projects/kiwicoke/hero-2.png",
            "/images/projects/kiwicoke/hero-3.png",
        ],
        overview: {
            description:
                "'콕'은 홍익대학교 컴퓨터공학과 배드민턴 학회이다. Color My Tree 웹서비스의 익명 메시지 전달 방식을 참고하여, 신입 동아리원 간 익명 편지 플랫폼을 기획, 개발하였다. 아이디어 및 기획은 팀원 전원이 함께 진행했다.",
            phases: [
                { label: "기획 및 설계 / 기술 학습", period: "2023.09 ~ 2023.11" },
                { label: "MVP 개발", period: "2023.12 ~ 2024.01" },
            ],
        },
        team: [
            { name: "구재민", affiliation: "홍익대학교 컴퓨터공학과", role: "Backend · Server" },
            { name: "이 O", affiliation: "홍익대학교 컴퓨터공학과", role: "PM · Frontend" },
            { name: "강O제", affiliation: "홍익대학교 컴퓨터공학과", role: "Frontend" },
            { name: "곽O민", affiliation: "홍익대학교 컴퓨터공학과", role: "Backend" },
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
                title: "시스템 아키텍처",
                diagrams: [
                    { image: "/images/projects/kiwicoke/arch-service.png", caption: "서비스 아키텍처" },
                    { image: "/images/projects/kiwicoke/arch-deploy.png", caption: "배포 아키텍처" },
                ],
            },
            {
                type: "erd",
                title: "ERD",
                image: "/images/projects/kiwicoke/erd.png",
            },
            {
                type: "api",
                title: "API 명세",
                rows: [
                    { domain: "Auth", method: "POST", endpoint: "/api/login", description: "로그인" },
                    { domain: "Auth", method: "POST", endpoint: "/api/signup", description: "회원가입" },
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
                title: "기술 선정 이유",
                rows: [
                    { name: "Django", description: "Python 기반 프레임워크로, 익숙한 언어를 활용한 빠른 개발을 위해 선정" },
                    { name: "SQLite", description: "별도의 외부 DB 구축 없이 개발 환경을 간소화" },
                    { name: "Google OAuth 2.0", description: "사용자에게 신뢰성 부여 및 자체 회원가입 구현 대비 개발시간 단축" },
                    { name: "AWS EC2", description: "외부에서 접속 가능한 서버 환경을 구축" },
                    { name: "GitHub Actions", description: "배포 자동화를 통해 운영 효율성 향상" },
                ],
            },
        ],
        troubleshooting: [
            {
                title: "장기간 부재 상황에서의 서버 대응",
                problem: "개인 AWS 계정으로 운영하던 EC2 서버에 장애가 발생했지만, 당시 여행 중이어서 서버에 직접 접속할 수 없었다.",
                solution: "지인의 도움으로 원격 접속 환경을 확보해 임시 조치했다.",
                lesson: "장기간 자리를 비우는 상황을 고려해 원격 접속 환경을 미리 준비할 필요가 있음을 알게 되었다. 이후 TeamViewer와 같은 원격 접속 도구를 미리 준비하고, 장기간 부재 시 팀원들과 장애 대응 방법을 공유하게 되었다.",
            },
            {
                title: "테스트 서버에 개발 브랜치를 바로 배포",
                problem: "main 브랜치에서 모든 작업을 수행해 커밋된 코드에 문제가 있으면 서버에 바로 오류가 발생했다.",
                solution: "오류 발생 이전의 안정적인 커밋으로 복원한 뒤 main과 develop 브랜치를 분리했다.",
                lesson: "main과 develop 브랜치를 분리해 검증된 코드만 운영 환경에 배포하는 브랜치 전략의 중요성을 이해했다.",
            },
        ],
        retrospective: [
            {
                title: "MVP를 최소한으로 설정하자",
                detail: "첫 프로젝트에서 서비스의 핵심인 익명 편지보다 위키, 교수 평가, 커뮤니티 등 다양한 부가 기능을 먼저 설계하며 개발 범위를 과도하게 확장했다. 그 결과 프로젝트 방향성이 흐려지고 개발이 지연되어 핵심 기능인 익명 편지 서비스조차 완성하지 못했다. 서비스의 본질을 먼저 정의하고 최소 기능(MVP)을 우선 구현한 뒤 부가 기능을 점진적으로 확장하는 것이 효율적이라는 점을 배웠다.",
            },
            {
                title: "프로젝트는 매일 조금씩 진행하는 것이 중요하다",
                detail: "주 2회 정기 회의를 중심으로 프로젝트를 진행하고 개발도 회의가 있는 날에 집중하다 보니 작업 공백이 길어졌고, 이전 작업을 다시 파악하는 데 시간이 많이 들었다. 팀장의 제안으로 매일 개발 내용과 회고를 카카오톡 단체방에 공유하기 시작했다. 꾸준히 기록하면서 프로젝트 흐름을 파악하고 팀원들의 진행 상황을 보며 동기부여를 얻을 수 있었다. 많은 양을 한 번에 개발하기보다 작은 단위라도 꾸준히 진행하고 공유하는 것이 중요하다는 점을 배웠다.",            },
            {
                title: "마일스톤을 구체적으로 세워라",
                detail: "‘구글 로그인 개발 완료’처럼 범위가 넓은 마일스톤은 진행 상황을 객관적으로 파악하기 어렵고 완료까지 오래 걸려 성취감을 느끼기 어려웠다. 앞으로는 로그인 기능을 DB 설계, DB 연동, JWT 발급, 로그인 API 구현처럼 세부 작업으로 나누어 마일스톤을 설정하고, 필요한 학습 내용과 진행 상황을 직관적으로 관리하고자 한다.",
            },
        ],
        improvements: [
            {
                title: "JWT 적용",
                detail: "현재는 Google OAuth 로그인만 구현되어 있고 인증 정보를 관리하는 별도의 토큰 기반 인증 구조는 적용되지 않았다. JWT를 도입해 REST API 환경에 적합한 인증 방식을 적용하고자 한다.",
            },
            {
                title: "Service Layer 분리",
                detail: "현재 View에서 요청 처리와 비즈니스 로직을 함께 수행하고 있다. View는 요청과 응답만 담당하도록 하고 핵심 비즈니스 로직을 Service Layer로 분리해 유지보수성과 코드 재사용성을 높이고자 한다.",
            },
            {
                title: "ERD 개선",
                detail: "데이터베이스 설계 경험이 부족해 일부 관계를 문자열로 관리했다. receiver와 writer 등을 User와 외래 키(Foreign Key)로 연결하고 중복 데이터를 줄이는 방향으로 ERD를 개선하고자 한다.",
            },
            {
                title: "미구현 서비스 완성",
                detail: "프로젝트 기간의 한계로 Google 로그인 기능을 우선 구현했고 편지 작성·조회 등 일부 기능은 완성하지 못했다. 향후 기획했던 기능을 구현하고 사용자 경험을 개선해 서비스를 완성하고자 한다.",
            },
        ],
        links: [{ label: "GitHub", url: "https://github.com/dolimpan/kiwimail-Backend" }],
    },
];

export function getProjectDetailExtra(slug: string) {
    return projectDetails.find((project) => project.slug === slug);
}
