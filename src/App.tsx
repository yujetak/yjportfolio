import "./App.css";
import architectureP4rag from "./assets/architecture-p4rag.png";
import architectureStocklab from "./assets/architecture-stocklab.png";
import lockerImage from "./assets/locker-image.png";
import neo4jAuraDB from "./assets/neo4j-auraDB.png";

interface Project {
  id: number;
  title: string;
  period: string;
  role: string;
  techStack: string[];
  highlights: string[];
  description: string;
  imageUrl: string;
  videoUrl?: string;
  isTeam?: number;
  achievement?: string;
  review?: string;
  links?: { label: string; url: string; icon?: string }[];
  category: "research" | "team" | "personal"; // 카테고리 추가
  isFeatured?: boolean; // 메인 노출 여부
}

const projects: Project[] = [
  {
    id: 1,
    title: "한국연구재단 석사과정생연구장려금지원사업 연구과제",
    period: "2024.07 - 2025.06",
    role: "연구책임자 (PI)",
    techStack: ["Python", "Langchain", "RAG", "Prompt Engineering", "HuggingFace", "Faiss", "P4"],
    highlights: [
      "연구개발과제명: 대규모 언어 모델 기반 네트워크 설정 자동화 시스템 개발",
      "연구지원사업: 한국연구재단(NRF)주관 석사과정생 연구장려금 지원사업 선정 및 연구 수행",
      "연구개발목표: 검색증강생성(RAG) 기술을 활용하여, P4 언어 기반 네트워크 기능 설계 코드 템플릿을 생성한다",
    ],
    description:
      "대규모 언어 모델이 네트워크 도메인 특화 언어 P4에 대한 지식이 적거나 최신 문법 코드 생성 품질이 낮다는 점에 기인하여, RAG를 활용하여 P4_16 버전의 코드 템플릿을 생성하는 시스템을 구축하였다.",
    imageUrl: architectureP4rag,
    isTeam: 1,
    achievement: "2025 한국컴퓨터종합학술대회(KCC) 우수발표논문상 수상, 2026 정보과학회 컴퓨팅의 실제 논문지 5월 개제",
    links: [
      { label: "포스터 논문", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318586" },
      { label: "논문지", url: "https://www.kiise.or.kr/e_journal/2026/5/KTCP/06.pdf" },
    ],
    category: "research",
    isFeatured: true,
  },

  {
    id: 2,
    title: "StockLab - 실시간 시세 기반 모의투자 플랫폼",
    period: "2026.03.20 - 2026.03.27",
    role: "프로젝트 리더 (PL), Full-Stack",
    techStack: ["Python", "Flask", "MariaDB", "Redis", "Jinja2 + HTML", "KIS API", "Flask-Socket IO", "APScheduler"],
    highlights: [
      "한국투자증권(KIS) REST, Websocket API - 종목 정보·실시간 시세 수집 후 Mariadb 및 Redis 저장",
      "APScheduler cron, interval 설정 - 토큰 자동발급, 장 종료 후 당일 시가·종가·최고가·최저가 수집 및 저장",
      "관리자 페이지 풀스택 개발 - JWT 토큰 기반 권한 확인, 사용자 데이터 집계, 토큰 TTL 확인 후 상태 표시",
    ],
    description:
      "한국투자증권(KIS) API 연동, 종목 검색 및 현재가 REST API, 실시간 시세 WebSocket 수신 및 Redis 캐싱, 관리자 대시보드 풀스택 개발",
    imageUrl: architectureStocklab,
    videoUrl: "https://drive.google.com/file/d/12bjb25smulFk0pToGRW_bGzWJmy8Kb5g/preview",
    isTeam: 6,
    review:
      "예외 처리의 중요성을 알게 되었습니다. 처음에는 API 응답값이 당연히 정상적으로 들어올 것이라 가정하였으나, \
    오류 발생 시 원인을 파악하기 어려운 경우가 있었습니다. \
    try-except로 예외를 잡고 print문으로 출력을 정리하니 문제 지점을 빠르게 좁혀나갈 수 있었고, \
    디버깅 효율이 크게 달라진다는 것을 알게 되었습니다.",
    links: [{ label: "GitHub", url: "https://github.com/human13th2team/StockLab" }],
    category: "team",
  },

  {
    id: 3,
    title: "네모의 꿈 - 과사물함 대여 서비스",
    period: "2023.06 - 2023.08(웹서비스 개발), 2023.11 - 2023.12(쿠버네티스 배포)",
    role: "프로젝트 리더 (PL), Full-stack",
    techStack: ["React", "Recoil", "Node.js", "Express", "MySQL", "Docker", "AWS EC2", "AWS RDS", "Kubernetes", "GKE"],
    highlights: [
      "Full-Stack: 사물함 생성·조회·대여·반납 전체 플로우를 React + Express REST API로 풀스택 개발",
      "Cloud: AWS EC2/RDS/Load Balancer/Route 53으로 백엔드 배포, HTTP/HTTPS 충돌 문제 해결",
      "K8s: GKE 기반 프론트엔드 Kubernetes 배포 — Deployment, LoadBalancer Service, ConfigMap으로 환경변수 관리",
    ],
    description: "학생회의 엑셀 기반 사물함 관리를 웹 서비스로 전환한 프로젝트.",
    imageUrl: lockerImage,
    isTeam: 3,
    achievement: "2023 성신여자대학교 소프트웨어경진대회 금상 수상, 2023 클라우드컴퓨팅 A+ 학점 취득",
    links: [
      { label: "GitHub", url: "https://github.com/cl0ud4" },
      { label: "보고서", url: "https://drive.google.com/file/d/1HSRrzWgYqQ97IpBODIyCgSPapB0OLk4w/view?usp=sharing" },
    ],
    category: "team",
  },
  {
    id: 4,
    title: "성신마인 09번지: 공동구매 웹서비스",
    period: "2023.04 - 2023.06",
    role: "Full-Stack Developer / Documentation",
    techStack: ["EJS", "CSS", "Node.js", "Express", "MySQL", "Sequelize", "Socket.io", "JWT", "GCP"],
    highlights: [
      "Full-Stack: 공동구매방 생성부터 입금폼 제작·작성·제출·계좌 확인·결과 통계까지 전체 플로우 풀스택 개발",
      "DB Design: 입금폼–문항–답변자–답변의 1:N:N:N 관계를 속성 타입 변경으로 1:N으로 최적화",
      "Documentation: 회의록·노션·보고서 등 팀 협업 문서화 총괄 담당",
    ],
    description: "여러 플랫폼에 분산된 대학 공동구매 절차를 하나의 웹 서비스로 통합한 프로젝트. GCP VM 인스턴스 분리 배포.",
    imageUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5f778d1217-063fddd80026e6f1f44d.png",
    videoUrl: "https://drive.google.com/file/d/1xIXnIA_WUBP7qKNPv5tAYdQefDVrvd4w/preview",
    isTeam: 5,
    achievement: "2023 서버시스템 구축실습 A+ 학점 취득",
    links: [
      { label: "프로젝트 보고서", url: "https://drive.google.com/file/d/1gw25uzH57JO2R9mc7Ru3MwAudj7QUeof/view?usp=sharing" },
      { label: "GitHub", url: "https://github.com/SungshinMine09/sungshin-mine-09?tab=readme-ov-file" },
      { label: "Notion", url: "https://www.notion.so/9b143de9312b485db13055ae2a097927?pvs=25" },
    ],
    category: "team",
  },
  {
    id: 5,
    title: "DNN 기반 신용점수 예측 및 RAG 챗봇 서비스",
    period: "2026. 04. 13 - 2026. 04. 17",
    role: "DL / RAG Engineering",
    techStack: [
      "Python",
      "DNN",
      "XGBoost",
      "RAG",
      "MLflow",
      "Pandas",
      "Numpy",
      "Scikit-learn",
      "Tensorflow",
      "SMOGN",
      "Gradio",
      "HuggingFace",
    ],
    description:
      "신용관리 진입장벽을 낮추고자, 입력값에 따라 신용점수를 예측하는 딥러닝 모델 개발 및 예측 결과 상담 RAG 챗봇 웹 서비스 구현",
    highlights: [
      "DNN 하이퍼파라미터 최적화 및 XGBoost와 성능 비교",
      "Feature Engineering으로 데이터 편향 개선",
      "딥러닝 데이터셋(AIHub 금융 합성 데이터), RAG 참조문서(KCB 개인신용평가체계 공시자료) 활용",
    ],
    imageUrl: "https://lh3.googleusercontent.com/d/1QXnBx6xIH12GIwK8bRNNtWBEICq19A19",
    videoUrl: "https://drive.google.com/file/d/11u1rULYc-r8U9QiWAsTWvnvXOvqhSUwl/preview",
    category: "personal",
    links: [
      { label: "보고서", url: "https://drive.google.com/file/d/1K_-9yepnzzGjPctqOBehYIiK-txTgkAh/view?usp=sharing" },
      { label: "서비스", url: "https://huggingface.co/spaces/dev-yuje/gardio_test" },
    ],
    isFeatured: true,
  },
  {
    id: 6,
    title: "BiLSTM 기반 경기도 상권매출 예측 AI 서비스",
    period: "2026. 04. 04 - 2026. 04. 09",
    role: "DL Engineer",
    techStack: ["Python", "RNN", "LSTM", "BiLSTM", "GRU", "Pandas", "Numpy", "Scikit-learn", "Tensorflow", "Streamlit"],
    description: "자영업자들을 위한 경기도 상권매출 예측 웹 서비스 구현",
    highlights: [
      "시계열 모델 학습 및 BiLSTM 하이퍼파라미터 최적화",
      "주기성을 갖는 월(month) 속성 Cyclic Encoding 적용",
      "RNN, LSTM, BiLSTM, GRU 성능 비교 및 최적 모델(BiLSTM) 선정",
    ],
    imageUrl: "https://lh3.googleusercontent.com/d/16nxkjC-2oCorcGDh9YzbQ60b_esNBnj3",
    videoUrl: "https://drive.google.com/file/d/15zsOwGYMBPIpZGjmiexjKhdo7Q27lhN6/preview",
    category: "personal",
    links: [
      { label: "보고서", url: "https://drive.google.com/file/d/16Ama5qcEKbUMKesOf8gD9unqgY2r2vhG/view?usp=sharing" },
      { label: "서비스", url: "https://gyeonggi-do-sales-prediction.streamlit.app/" },
    ],
  },
  {
    id: 7,
    title: "Random Forest 분류 모델 기반 투자 성향 예측 AI 서비스",
    period: "2026. 03. 30 - 2026. 04. 03",
    role: "ML Engineer",
    techStack: ["Python", "Decision Tree", "Random Forest Classifier", "XGBClassifier", "KNN", "SVM", "Pandas", "Numpy", "Scikit-learn"],
    highlights: [
      "자연어 기반 투자 성향 카테고리를 인코딩하여 Permutation Importance 추출",
      "정확도 평가 결과: Random Forest Classifier(79%), Decision Tree(77%), XGBClassifier(77%), KNN(77%), SVM(72%)",
      "Kaggle Finance_trends 2020-2025 데이터셋 활용(인도개인투자자 12,000명 설문조사)",
    ],
    description: "투자 성향 다각화에 따른 분석 어려움 문제를 해결하기 위한, AI 기반 투자 성향 분류 모델 구현",
    imageUrl: "https://lh3.googleusercontent.com/d/1dquXj4nTthVGMSfJHIeibkjOlJjclQMf",
    videoUrl: "https://drive.google.com/file/d/1gfps8-CPCH22-qURooAjM1hNNZTUopAs/preview",
    links: [{ label: "보고서", url: "https://drive.google.com/file/d/1mBAxYd0IW4pGEPZu0hJWIXVUaXjDCBPk/view?usp=sharing" }],
    category: "personal",
  },
  {
    id: 8,
    title: "FinGraph / GraphRAG 기반 뉴스 질의응답 챗봇",
    period: "2026. 05. 18 - 2026. 05. 20",
    role: "AI / GraphRAG Engineer",
    techStack: ["Python", "GraphRAG", "Neo4j", "Cypher", "ToolsRetriever", "LangGraph", "LangChain", "Selenium", "Docker", "OpenAI API", "HuggingFace", "Gradio"],
    highlights: [
      "Neo4j ToolsRetriever를 통해 VectorCypher(의미 기반)와 Text2Cypher(구조적 집계)를 결합한 하이브리드 검색 구현",
      "Selenium 기반 네이버 뉴스 동적 크롤링부터 GPT-4o를 활용한 지식 그래프(Entity/Relation) 추출 및 Neo4j Aura DB 적재까지 전 과정 파이프라인 자동화",
      "Harness Engineering 및 Pre-commit Hook(Ruff, MyPy) 도입으로 AI 기반 코드 구현의 무결성 확보",
    ],
    description: "뉴스 기사에서 기업, 기술 등의 엔티티와 관계를 추출해 지식 그래프를 구축하고, Multi-hop 추론 및 하이브리드 검색으로 맥락 있는 답변을 제공하는 챗봇 서비스",
    imageUrl: neo4jAuraDB,
    videoUrl: "https://drive.google.com/file/d/1h1GffW--dmUVMNLcgEXi_J3s3K_ZXIQC/preview",
    review: "Harness Engineering을 통해 개발 가이드라인과 금지 규칙을 정의하여 AI 에이전트 기반 개발의 병목을 최소화했습니다. 또한, Pre-commit Hook을 도입해 로컬에서 정적 타입 및 린트 검사를 강제함으로써 깃허브 액션에서의 무의미한 빌드 실패를 방지했습니다. 이 과정에서 GraphRAG의 구조적 설계뿐만 아니라, 시스템적 안전망(Guardrail)이 개발 생산성에 미치는 큰 영향을 체감했습니다.",
    links: [
      { label: "GitHub", url: "https://github.com/yujetak/FinGraph" },
      { label: "보고서", url: "https://drive.google.com/file/d/1OZ3eDOakx-wsGV8B5-pTKEaou_BlWaRh/view?usp=drive_link" },
      { label: "서비스", url: "https://huggingface.co/spaces/dev-yuje/FinGraph" },
      { label: "참고자료", url: "https://github.com/gongwon-nayeon/graphrag-tools-retriever" }
    ],
    category: "personal",
  },
  {
    id: 9,
    title: "Nexus - 올인원 창업지원 서비스",
    period: "2026.03.27 - 2026.05.13",
    role: "창업 시뮬레이션 기능 개발, 예측 모델 개발 및 인프라 배포",
    techStack: [
      "React",
      "Next.js",
      "Spring Boot",
      "FastAPI",
      "Python",
      "Java",
      "PostgreSQL",
      "XGBoost",
      "CatBoost",
      "Docker",
      "Kubernetes"
    ],
    highlights: [
      "공공데이터 상업용 부동산 실거래가 API 기반 매매가 조회, 벡터 검색 기반 업종별 필수 설비 매핑",
      "카카오지도 API·소상공인 365 API 기반 실시간 업소수 지도 영역 표시",
      "XGBoost·CatBoost 기반 창업 성공 예측 모델 개발",
      "Render(BE)·Huggingface(BE)·CloudType(Redis) 배포 및 WSL·Docker·Kubernetes 클라우드화"
    ],
    description:
      "[AI 기반 창업 지원 플랫폼] 예비 창업자를 위해 '창업 시뮬레이션 - 브랜딩 - 행정 분석 - 매장 운영'의 전 과정을 AI가 가이드하는 웹 프로젝트입니다. 프론트엔드는 React, 백엔드는 Java 기반 Spring Boot와 Python 기반 FastAPI를 사용해 서버를 구축하고, Docker로 배포했습니다.",
    imageUrl: "https://raw.githubusercontent.com/human13th2team/nexus/main/assets/Simulation.png",
    videoUrl: "https://drive.google.com/file/d/10jzluNJcvNDLESfXqC8NdckSsfC1crrM/preview",
    isTeam: 5,
    isFeatured: true,
    links: [
      { label: "보고서", url: "https://drive.google.com/file/d/1Vi0U_Vm62JZ2iniUKFIOUyiQ1nxdpeZH/view?usp=sharing" },
      { label: "시연 영상", url: "https://drive.google.com/file/d/10jzluNJcvNDLESfXqC8NdckSsfC1crrM/view?usp=drive_link" },
      { label: "GitHub", url: "https://github.com/human13th2team/nexus" },
      { label: "GitHub (K8s)", url: "https://github.com/yujetak/nexus" }
    ],
    category: "team",
  },
];

function Header() {
  return (
    <header className="header-glass">
      <div className="container nav-inner">
        <div className="logo-text">YJ TAK.</div>
        <nav className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#featured" className="nav-link">
            Featured
          </a>
          <a href="#team" className="nav-link">
            Team Projects
          </a>
          <a href="#personal" className="nav-link">
            Personal Projects
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="badge fade-in">
        <span className="badge-dot"></span>
        AI IT 분야 채용 가능
      </div>
      <h1 className="hero-title fade-in" style={{ animationDelay: "0.2s" }}>
        SW로 길을 찾고
        <br /> AI로 시야를 넓히다
      </h1>
      <p className="hero-subtitle fade-in" style={{ animationDelay: "0.4s" }}>
        컴퓨터공학과 네트워크 연구를 기반으로 AI 서비스 개발까지 확장한 융합형 엔지니어입니다. 제약 속에서도 끝까지 결과로 증명하는 개발자를 지향합니다.
      </p>
      <div className="fade-in" style={{ animationDelay: "0.6s" }}>
        <a href="#featured" className="btn">
          프로젝트 둘러보기
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card fade-in">
      <div className="project-media">
        {project.videoUrl ? (
          <div className="video-container">
            <iframe
              src={project.videoUrl}
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={project.title}
              style={{ border: "none" }}
            ></iframe>
          </div>
        ) : (
          <img src={project.imageUrl} alt={project.title} />
        )}
      </div>

      <div className="project-info">
        <div className="project-meta">
          <div className="role-badge">{project.role}</div>
          <div className="project-period">
            {project.period}
            {project.isTeam && project.isTeam > 1 && ` • 팀 (${project.isTeam}인)`}
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="results-section">
          <h4 className="section-title">Key Highlights</h4>
          <div className="results-list">
            {project.highlights.map((point, idx) => (
              <div key={idx} className="result-item simple">
                {point.includes(":") ? point.split(":")[1].trim() : point}
              </div>
            ))}
          </div>
        </div>

        <div className="tech-tags">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {project.links && (
          <div className="project-actions">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-link-btn ${link.label.toLowerCase().includes("github") ? "github" : "primary"}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {project.achievement && (
          <div className="footer-extra">
            <div className="achievement-section">
              {project.achievement.split(",").map((item, idx) => (
                <span key={idx} className="achievement-tag">
                  🏆 {item.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />

        <section id="featured" className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.0rem", color: "var(--primary)" }}>Featured Work</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>가장 역량을 잘 보여줄 수 있는 대표 프로젝트들입니다.</p>
          <div className="project-list" style={{ marginBottom: "6rem" }}>
            {projects
              .filter((p) => p.isFeatured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>

        <section id="team" className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.0rem", color: "var(--primary)" }}>Team Projects</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>협업 기반 팀프로젝트 활동 결과입니다</p>
          <div className="project-list" style={{ marginBottom: "6rem" }}>
            {projects
              .filter((p) => p.category === "team")
              .sort((a, b) => {
                const dateA = a.period.split(" - ")[0].replace(/\s+/g, "");
                const dateB = b.period.split(" - ")[0].replace(/\s+/g, "");
                return dateB.localeCompare(dateA);
              })
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>

        <section id="personal" className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.0rem", color: "var(--primary)" }}>Personal Projects</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>개인적인 기술 탐구와 성취가 담긴 프로젝트들입니다</p>
          <div className="project-list">
            {projects
              .filter((p) => p.category === "personal")
              .sort((a, b) => {
                const dateA = a.period.split(" - ")[0].replace(/\s+/g, "");
                const dateB = b.period.split(" - ")[0].replace(/\s+/g, "");
                return dateB.localeCompare(dateA);
              })
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>

        <section id="experience" className="container" style={{ borderTop: "1px solid var(--border)", marginTop: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--primary)" }}>Experience</h2>
          <div
            className="experience-item"
            style={{ padding: "2rem", background: "#fff", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "1.5rem" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Graduate Research Assistant @ Network Lab</h3>
              <span style={{ color: "var(--text-secondary)", fontWeight: "500" }}>2024.03 - 2026.02</span>
            </div>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>Master's Degree Candidate</p>
            <p>프로그래머블 네트워크(P4, SmartNIC) 도메인에 최적화된 LLM 기반 네트워크 설정 자동화 및 고성능 패킷 처리 시스템 연구 수행</p>
          </div>

          <div
            className="experience-item"
            style={{ padding: "2rem", background: "#f8f9fa", borderRadius: "12px", border: "1px solid var(--border)" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>Undergraduate Researcher @ Network Lab</h3>
              <span style={{ color: "var(--text-secondary)", fontWeight: "500" }}>2023.07 - 2024.02</span>
            </div>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>Internship</p>
            <p>네트워크 기초 연구 및 실험 환경 구축 지원. P4 언어 기반 기초 패킷 포워딩 로직 연구 참여.</p>
          </div>
        </section>

        <section id="contact" className="container" style={{ textAlign: "center", padding: "var(--spacing-xl) 0" }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>Ready for the Next Challenge.</h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--text-secondary)",
              marginBottom: "3.5rem",
              maxWidth: "600px",
              margin: "0 auto 3.5rem",
            }}
          >
            SW 엔지니어링의 기본기 위에 AI 기술을 녹여낼 줄 아는 융합형 엔지니어로, 실제 비즈니스 환경에서 견고하게 작동하는 시스템을 만들 기회를 찾고 있습니다.
          </p>
          <a href="mailto:tech.yuje@gmail.com" className="btn">
            tech.yuje@gmail.com
          </a>
        </section>
      </main>

      <footer style={{ padding: "2rem 0", textAlign: "center", borderTop: "1px solid var(--border)", color: "var(--text-secondary)" }}>
        <p>© 2026 YJ TAK. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;