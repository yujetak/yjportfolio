import './App.css';
import architectureP4rag from './assets/architecture-p4rag.png';
import architectureStocklab from './assets/architecture-stocklab.png';

interface Project {
  id: number;
  title: string;
  period: string;
  role: string;
  techStack: string[];
  highlights: string[];
  description: string;
  imageUrl: string;
  videoUrl?: string; // 영상 링크 추가
  isTeam?: number;
  achievement?: string;
  review?: string;
  links?: { label: string; url: string; icon?: string }[];
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

    description: "프롬프트 엔지니어링을 통해 자연어 기반의 네트워크 기능 요구사항을 이해하고, 최신 도메인 지식을 참조하여 P4 코드 템플릿을 자동 생성한다",
    imageUrl: architectureP4rag,
    isTeam: 1,
    achievement: "2025 한국컴퓨터종합학술대회(KCC) 우수발표논문상 수상, 2026 정보과학회 컴퓨팅의 실제 논문지 게재 예정(심사완료)",
    links: [
      { label: "포스터 논문", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318586" }
    ]
  },

  {
    id: 2,
    title: "StockLab - 실시간 시세 기반 모의투자 플랫폼",
    period: "2026.03.20 - 2026.03.27",
    role: "프로젝트 리더 (PL), Full-Stack",
    techStack: ["Python", "Flask", "MariaDB", "Redis", "Jinja2 + HTML", "KIS API", "Flask-Socket IO", "APScheduler"],
    highlights: [
      "한국투자증권(KIS) REST, Websocket API - 종목 정보·실시간 시세 수집 후 Mariadb 및 Redis 저장",
      "APscheduler cron, interval 설정 - 토큰 자동발급, 장 종료 후 당일 시가·종가·최조가·최저가 수집 및 저장",
      "관리자 페이지 풀스택 개발 - JWT 토큰 기반 권한 확인, 사용자 데이터 집계, 토큰 TTL 확인 후 상태 표시"
    ],
    description: "KIS API 연동(Redis 토큰 관리), 종목 검색 및 현재가 REST API, 실시간 시세 WebSocket 수신 및 Redis 캐싱, 관리자 대시보드 풀스택 개발",
    imageUrl: architectureStocklab,
    isTeam: 6,
    review: "예외 처리의 중요성을 알게 되었습니다. 처음에는 API 응답값이 당연히 정상적으로 들어올 것이라 가정하였으나, \
    오류 발생 시 원인을 파악하기 어려운 경우가 있었습니다. \
    try-except로 예외를 잡고 print문으로 출력을 정리하니 문제 지점을 빠르게 좁혀나갈 수 있었고, \
    디버깅 효율이 크게 달라진다는 것을 알게 되었습니다.",
    links: [
      { label: "GitHub", url: "https://github.com/human13th2team/StockLab" }
    ],
  },

  {
    id: 3,
    title: "네모의 꿈 - 과사물함 대여 서비스",
    period: "2023.06 - 2023.08(웹서비스 개발), 2023.11 - 2023.12(쿠버네티스 배포)",
    role: "프로젝트 리더 (PL), Full-stac",
    techStack: ["React", "Recoil", "Express", "MySQL", "Docker", "AWS EC2", "AWS RDS", "Kubernetes", "GKE"],
    highlights: [
      "Full-Stack: 사물함 생성·조회·대여·반납 전체 플로우를 React(Recoil) + Express REST API로 풀스택 개발",
      "Cloud: AWS EC2/RDS/Load Balancer/Route 53으로 백엔드 배포, HTTPS Mixed Content 문제 해결",
      "K8s: GKE 기반 프론트엔드 Kubernetes 배포 — Deployment(replica 2), LoadBalancer Service, ConfigMap으로 환경변수 관리"
    ],
    description: "학생회의 엑셀 기반 사물함 관리를 웹 서비스로 전환한 프로젝트.",
    imageUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5f778d1217-063fddd80026e6f1f44d.png",
    videoUrl: "https://drive.google.com/file/d/1aCIvmrIYaSELHxPKExo7DfUVaRkCf0s3/preview",
    isTeam: 3,
    achievement: "2023 성신여자대학교 소프트웨어경진대회 금상 수상, 2023 클라우드컴퓨팅 A+ 학점 취득",
    links: [
      { label: "GitHub", url: "https://github.com/cl0ud4" }
    ]
  },
  {
    id: 4,
    title: "성신마인 09번지: 공동구매 웹서비스",
    period: "2023.04 - 2023.06",
    role: "Full-Stack Developer / Documentation",
    techStack: ["EJS", "CSS", "Node.js", "Express", "MySQL", "Sequelize", "Socket.io", "JWT", "GCP"],
    highlights: [
      "Full-Stack: 공동구매방 생성부터 입금폼 제작·작성·제출·계좌 확인·결과 통계까지 전체 플로우 풀스택 개발",
      "DB Design: 입금폼–문항–답변자–답변의 1:N:N:N 약한 개체 관계를 DB 재설계로 해결(1:N)",
      "Documentation: 회의록·노션·보고서 등 팀 협업 문서화 총괄 담당"
    ],
    description: "여러 플랫폼에 분산된 대학 공동구매 절차를 하나의 웹 서비스로 통합한 프로젝트. GCP VM 인스턴스 분리 배포.",
    imageUrl: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5f778d1217-063fddd80026e6f1f44d.png",
    videoUrl: "https://drive.google.com/file/d/1xIXnIA_WUBP7qKNPv5tAYdQefDVrvd4w/preview",
    isTeam: 5,
    achievement: "2023 서버시스템 구축실습 A+ 학점 취득",
    links: [
      { label: "GitHub", url: "https://github.com/SungshinMine09/sungshin-mine-09?tab=readme-ov-file" },
      { label: "Notion", url: "https://www.notion.so/9b143de9312b485db13055ae2a097927?pvs=25" },
      { label: "프로젝트 보고서", url: "https://docs.google.com/document/d/1hPW3Lu_mcUo-SwI0rRQvvo2v7UJczQ8OOJbo9Rlear0/edit?usp=sharing" }
    ]
  }
];

function Header() {
  return (
    <header className="header-glass">
      <div className="container nav-inner">
        <div className="logo-text">YJ TAK.</div>
        <nav className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
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
        Available for Financial Tech Roles
      </div>
      <h1 className="hero-title fade-in" style={{ animationDelay: '0.2s' }}>
        Reliable Solutions for <br /> Future Finance.
      </h1>
      <p className="hero-subtitle fade-in" style={{ animationDelay: '0.4s' }}>
        Result-driven developer focusing on performance, security, and scalability in financial systems.
        Experienced in building high-frequency data pipelines and secure banking infrastructures.
      </p>
      <div className="fade-in" style={{ animationDelay: '0.6s' }}>
        <a href="#projects" className="btn">Explore Projects</a>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card fade-in">
      <div className="project-header">
        <div className="header-left">
          <div className="role-badge">{project.role}</div>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <div className="header-right">
          <div className="project-period">{project.period}</div>
          {project.isTeam && project.isTeam > 1 && (
            <div className="team-info">팀 프로젝트 ({project.isTeam}인)</div>
          )}
        </div>
      </div>

      <div className="project-content">
        <div className="project-media">
          {project.videoUrl ? (
            <div className="video-container">
              <iframe
                src={project.videoUrl}
                width="100%"
                height="100%"
                allow="autoplay"
                title={project.title}
              ></iframe>
            </div>
          ) : (
            <img
              src={project.imageUrl}
              alt={project.title}
            />
          )}
        </div>

        <div className="project-details">
          <p className="project-description">{project.description}</p>

          <div className="results-section">
            <h4 className="section-title">Key Highlights</h4>
            <ul className="results-list">
              {project.highlights.map((point, idx) => {
                const parts = point.split(':');
                if (parts.length > 1) {
                  return (
                    <li key={idx} className="result-item">
                      <span className="item-label">{parts[0].trim()}</span>
                      <span className="item-content">{parts.slice(1).join(':').trim()}</span>
                    </li>

                  );
                }
                return (
                  <li key={idx} className="result-item simple">
                    {point}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="project-footer">
        <div className="footer-top">
          <div className="tech-tags">
            {project.techStack.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>

          {project.links && (
            <div className="project-links">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-link-btn ${link.label.toLowerCase().includes('github') ? 'github' : 'primary'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {(project.achievement || project.review) && (
          <div className="footer-extra">
            {project.achievement && (
              <div className="achievement-section">
                {project.achievement.split(',').map((item, idx) => (
                  <span key={idx} className="achievement-tag">
                    🏆 {item.trim()}
                  </span>
                ))}
              </div>
            )}
            {project.review && (
              <div className="review-box">
                {project.review}
              </div>
            )}
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

        <section id="research" className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.0rem', color: 'var(--primary)' }}>Research</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>국가연구과제 수행 및 학술 활동 성과입니다.</p>
          <div className="project-list" style={{ marginBottom: '6rem' }}>
            {projects.filter(p => p.id === 1).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="projects" className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.0rem', color: 'var(--primary)' }}>Team Projects</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>다양한 협업을 통해 해결한 기술적 도전들입니다.</p>
          <div className="project-list">
            {projects
              .filter(p => p.id !== 1)
              .sort((a, b) => {
                const dateA = a.period.split(" - ")[0];
                const dateB = b.period.split(" - ")[0];
                return dateB.localeCompare(dateA);
              })
              .map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </section>

        <section id="experience" className="container" style={{ borderTop: '1px solid var(--border)', marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>Experience</h2>
          <div style={{ padding: '2rem', background: '#fff', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Graduate Research Assistant @ Network Lab</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>2023 - Present</p>
            <p>네트워크 보안 및 고성능 패킷 처리 시스템 연구. 다수의 국내외 학술 대회 발표 및 논문 게재.</p>
          </div>
        </section>

        <section id="contact" className="container" style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready for the Next Challenge.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
            I am currently looking for opportunities where I can apply my skills in secure system design and performant data processing.
          </p>
          <a href="mailto:contact@example.com" className="btn">Get In Touch</a>
        </section>
      </main>

      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
        <p>© 2024 YJ TAK. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
