import heroImage from './assets/Image_home.png'
import './App.css'

const services = [
  {
    accent: 'cyan',
    icon: 'app',
    title: 'Aplicativos sob medida',
    subtitle: 'iOS e Android',
    items: [
      'Apps modernos para lojas, atendimento e operações internas.',
      'Performance, boa experiência de uso e publicação nas stores.',
      'Projetos institucionais, e-commerce e soluções sob demanda.',
    ],
    techs: ['react', 'typescript', 'shield', 'mongodb', 'css'],
  },
  {
    accent: 'green',
    icon: 'web',
    title: 'Desenvolvimento web',
    subtitle: 'Sistemas inteligentes',
    items: [
      'Sites institucionais, dashboards e plataformas seguras.',
      'Interfaces integradas a APIs, automações e bancos de dados.',
      'Painel administrativo para acompanhar tudo em tempo real.',
    ],
    techs: ['nodejs', 'javascript', 'css', 'mysql', 'tailwind'],
  },
  {
    accent: 'orange',
    icon: 'design',
    title: 'Identidade visual',
    subtitle: 'Design de interface',
    items: [
      'Logotipos, materiais digitais e telas fáceis de usar.',
      'Protótipos de UI/UX para validar ideias antes do desenvolvimento.',
      'Visual profissional para sua marca aparecer melhor online.',
    ],
    techs: ['photoshop', 'coreldraw', 'figma'],
  },
]

const techIcons = {
  react: {
    label: 'React',
    svg: (
      <>
        <ellipse cx="24" cy="24" rx="17" ry="6" />
        <ellipse cx="24" cy="24" rx="17" ry="6" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="17" ry="6" transform="rotate(120 24 24)" />
        <circle cx="24" cy="24" r="3.4" />
      </>
    ),
  },
  typescript: {
    label: 'TypeScript',
    svg: (
      <>
        <rect x="9" y="9" width="30" height="30" rx="4" />
        <path d="M15 18h14M22 18v17M31 35c4 2 8 0 8-4 0-6-9-3-9-8 0-3 4-5 8-3" />
      </>
    ),
  },
  shield: {
    label: 'Segurança',
    svg: (
      <>
        <path d="M24 7 38 12v11c0 10-6 17-14 20-8-3-14-10-14-20V12l14-5Z" />
        <path d="m17 24 5 5 10-12" />
      </>
    ),
  },
  mongodb: {
    label: 'MongoDB',
    svg: (
      <>
        <path d="M25 5c8 8 11 15 10 23-1 8-5 13-11 16-6-3-10-8-11-16-1-8 3-16 12-23Z" />
        <path d="M24 16v26" />
      </>
    ),
  },
  css: {
    label: 'CSS',
    svg: (
      <>
        <path d="M12 8h25l-3 31-10 4-10-4-3-31Z" />
        <path d="M18 16h13M18 24h12l-1 9-5 2-5-2" />
      </>
    ),
  },
  html: {
    label: 'HTML',
    svg: (
      <>
        <path d="M12 8h25l-3 31-10 4-10-4-3-31Z" />
        <path d="M18 16h12M17 24h14M19 32l5 2 5-2" />
      </>
    ),
  },
  database: {
    label: 'Banco de dados',
    svg: (
      <>
        <ellipse cx="24" cy="13" rx="15" ry="6" />
        <path d="M9 13v22c0 3 7 6 15 6s15-3 15-6V13" />
        <path d="M9 24c0 3 7 6 15 6s15-3 15-6" />
        <path d="M9 34c0 3 7 6 15 6s15-3 15-6" />
      </>
    ),
  },
  nodejs: {
    label: 'Node.js',
    svg: (
      <>
        <path d="m24 5 17 10v18L24 43 7 33V15L24 5Z" />
        <path d="M17 31V19l7 12V19M31 18v14" />
      </>
    ),
  },
  javascript: {
    label: 'JavaScript',
    svg: (
      <>
        <rect x="9" y="9" width="30" height="30" rx="4" />
        <path d="M18 18v13c0 4-3 5-6 3M29 35c4 2 8 0 8-4 0-6-9-3-9-8 0-3 4-5 8-3" />
      </>
    ),
  },
  mysql: {
    label: 'MySQL',
    svg: (
      <>
        <ellipse cx="24" cy="14" rx="15" ry="6" />
        <path d="M9 14v20c0 3 7 6 15 6s15-3 15-6V14" />
        <path d="M9 24c0 3 7 6 15 6s15-3 15-6" />
      </>
    ),
  },
  tailwind: {
    label: 'Tailwind CSS',
    svg: (
      <>
        <path d="M13 24c3-8 8-12 15-12 4 0 7 2 9 5-3-1-6-1-8 2-3 3-5 7-10 7-2 0-4-1-6-2Z" />
        <path d="M11 34c3-8 8-12 15-12 4 0 7 2 9 5-3-1-6-1-8 2-3 3-5 7-10 7-2 0-4-1-6-2Z" />
      </>
    ),
  },
  photoshop: {
    label: 'Photoshop',
    svg: (
      <>
        <rect x="8" y="8" width="32" height="32" rx="5" />
        <path d="M16 32V17h7c4 0 7 3 7 7s-3 7-7 7h-7M16 24h7M32 33c3 2 7 1 7-3 0-5-7-2-7-6 0-3 3-4 6-3" />
      </>
    ),
  },
  coreldraw: {
    label: 'CorelDRAW',
    svg: (
      <>
        <path d="M24 6c9 0 16 7 16 16 0 12-16 21-16 21S8 34 8 22C8 13 15 6 24 6Z" />
        <path d="M15 22c4 2 14 2 18 0M20 42l8-20" />
      </>
    ),
  },
  figma: {
    label: 'Figma',
    svg: (
      <>
        <path d="M24 24a8 8 0 1 0 8-8h-8v16Z" />
        <path d="M16 8h8v16h-8a8 8 0 0 1 0-16ZM16 24h8v16h-8a8 8 0 0 1 0-16Z" />
        <path d="M24 8h8a8 8 0 0 1 0 16h-8V8Z" />
      </>
    ),
  },
  github: {
    label: 'GitHub',
    svg: (
      <>
        <path d="M17 39c-8-3-10-9-10-16 0-9 7-16 17-16s17 7 17 16c0 7-2 13-10 16" />
        <path d="M17 39v-6c0-3 2-5 7-5s7 2 7 5v6" />
        <path d="M16 13c-2-3-5-4-7-4 0 4 1 7 3 9M32 13c2-3 5-4 7-4 0 4-1 7-3 9" />
      </>
    ),
  },
  search: {
    label: 'Lupinha',
    svg: (
      <>
        <circle cx="21" cy="21" r="11" />
        <path d="m30 30 10 10" />
      </>
    ),
  },
  android: {
    label: 'Android',
    svg: (
      <>
        <path d="M14 20h20v16a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V20Z" />
        <path d="M18 20c0-5 3-9 6-9s6 4 6 9M17 10l-4-5M31 10l4-5M9 22v12M39 22v12" />
        <path d="M20 27h.1M28 27h.1" />
      </>
    ),
  },
  aws: {
    label: 'AWS',
    svg: (
      <>
        <path d="M9 29c7 8 23 8 30 0" />
        <path d="M33 30h6v6" />
        <path d="M12 24l3-12h4l3 12M14 19h6M23 12l3 12 3-9 3 9 3-12" />
      </>
    ),
  },
  cloud: {
    label: 'Nuvem',
    svg: (
      <>
        <path d="M16 36h18a8 8 0 0 0 1-16 12 12 0 0 0-23-3 10 10 0 0 0 4 19Z" />
      </>
    ),
  },
  connection: {
    label: 'Conexão',
    svg: (
      <>
        <circle cx="12" cy="24" r="5" />
        <circle cx="36" cy="12" r="5" />
        <circle cx="36" cy="36" r="5" />
        <path d="m16 22 16-8M16 26l16 8" />
      </>
    ),
  },
  wifi: {
    label: 'Wi-Fi',
    svg: (
      <>
        <path d="M8 18c9-8 23-8 32 0" />
        <path d="M14 25c6-5 14-5 20 0" />
        <path d="M20 32c3-2 5-2 8 0" />
        <circle cx="24" cy="39" r="2" />
      </>
    ),
  },
}

const floatingTechs = [
  { name: 'css', x: '6%', y: '11%', size: '7rem', delay: '-8s', duration: '58s' },
  { name: 'html', x: '18%', y: '24%', size: '5.8rem', delay: '-22s', duration: '64s' },
  { name: 'react', x: '39%', y: '8%', size: '6.8rem', delay: '-17s', duration: '61s' },
  { name: 'javascript', x: '72%', y: '9%', size: '6.2rem', delay: '-31s', duration: '70s' },
  { name: 'typescript', x: '90%', y: '19%', size: '5.7rem', delay: '-12s', duration: '56s' },
  { name: 'database', x: '10%', y: '39%', size: '6.4rem', delay: '-29s', duration: '68s' },
  { name: 'mysql', x: '31%', y: '49%', size: '5.9rem', delay: '-15s', duration: '59s' },
  { name: 'mongodb', x: '54%', y: '35%', size: '7.2rem', delay: '-42s', duration: '74s' },
  { name: 'github', x: '83%', y: '42%', size: '6.4rem', delay: '-24s', duration: '63s' },
  { name: 'search', x: '94%', y: '58%', size: '5.6rem', delay: '-36s', duration: '66s' },
  { name: 'android', x: '23%', y: '4%', size: '5.8rem', delay: '-19s', duration: '60s' },
  { name: 'aws', x: '45%', y: '25%', size: '6rem', delay: '-34s', duration: '72s' },
  { name: 'coreldraw', x: '67%', y: '66%', size: '5.8rem', delay: '-27s', duration: '67s' },
  { name: 'photoshop', x: '8%', y: '70%', size: '5.6rem', delay: '-39s', duration: '71s' },
  { name: 'figma', x: '95%', y: '3%', size: '5.3rem', delay: '-13s', duration: '57s' },
  { name: 'cloud', x: '63%', y: '20%', size: '7rem', delay: '-45s', duration: '76s' },
  { name: 'connection', x: '43%', y: '82%', size: '5.4rem', delay: '-21s', duration: '62s' },
  { name: 'wifi', x: '77%', y: '78%', size: '5.9rem', delay: '-33s', duration: '69s' },
]

function FloatingTechBackground() {
  return (
    <div className="floating-techs" aria-hidden="true">
      {floatingTechs.map((item) => {
        const icon = techIcons[item.name]

        return (
          <span
            className={`floating-tech ${item.name}`}
            key={`${item.name}-${item.x}`}
            style={{
              '--x': item.x,
              '--y': item.y,
              '--size': item.size,
              '--delay': item.delay,
              '--duration': item.duration,
            }}
          >
            <svg viewBox="0 0 48 48">{icon.svg}</svg>
          </span>
        )
      })}
    </div>
  )
}

function TechIcon({ name }) {
  const icon = techIcons[name]

  return (
    <span className={`tech-icon ${name}`} title={icon.label} aria-label={icon.label}>
      <svg viewBox="0 0 48 48" role="img">
        {icon.svg}
      </svg>
    </span>
  )
}

function ServiceIcon({ type }) {
  if (type === 'app') {
    return (
      <svg viewBox="0 0 90 90" aria-hidden="true">
        <rect x="14" y="10" width="34" height="66" rx="8" />
        <rect x="44" y="24" width="30" height="52" rx="7" />
        <path d="M24 22h14M28 66h6M53 34h12M56 66h6" />
        <path d="M29 42c0-8 6-15 13-15M42 27c8 1 13 7 13 15" />
      </svg>
    )
  }

  if (type === 'web') {
    return (
      <svg viewBox="0 0 90 90" aria-hidden="true">
        <rect x="10" y="17" width="64" height="46" rx="6" />
        <path d="M10 31h64M20 24h2M29 24h2M38 24h2" />
        <ellipse cx="55" cy="50" rx="18" ry="8" />
        <path d="M37 50v20c0 5 8 9 18 9s18-4 18-9V50" />
        <path d="M37 60c0 5 8 9 18 9s18-4 18-9" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 90 90" aria-hidden="true">
      <path d="M45 10c19 0 34 13 34 30 0 9-5 15-13 15h-8c-5 0-8 3-8 8 0 8-7 14-16 14-14 0-25-12-25-29C9 27 25 10 45 10Z" />
      <circle cx="29" cy="37" r="5" />
      <circle cx="43" cy="27" r="5" />
      <circle cx="59" cy="36" r="5" />
      <path d="M43 58 69 25M63 19l12 12" />
    </svg>
  )
}

function App() {
  return (
    <main className="site-shell">
      <FloatingTechBackground />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Voltar para o início">
          TI Solutions
        </a>

        <nav className="main-nav" aria-label="Navegacao principal">
          <a href="#home">Home</a>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#sobre">Sobre Nós</a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Soluções de TI para negócios digitais</p>
          <h1>Do design ao código:</h1>
          <p className="hero-text">
            Criamos o ecossistema digital que o seu negócio precisa para crescer.
          </p>
          <a className="quote-button" href="#contato">
            Faça um orçamento
          </a>
        </div>

        <div className="hero-frame" aria-label="Ambiente de tecnologia e design">
          <img src={heroImage} alt="Profissional trabalhando com sistemas, design e tecnologias web" />
        </div>
      </section>

      <section className="services-section" id="servicos">
        <div className="section-heading">
          <span>Serviços</span>
          <h2>Soluções completas para tirar sua ideia do papel</h2>
        </div>

        <div className="services-panel">
          {services.map((service) => (
            <article className={`service-card ${service.accent}`} key={service.title}>
              <div className="service-icon">
                <ServiceIcon type={service.icon} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <strong>{service.subtitle}</strong>
                <div className="tech-list" aria-label="Tecnologias">
                  {service.techs.map((tech) => (
                    <TechIcon key={tech} name={tech} />
                  ))}
                </div>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-heading">
          <span>Portfólio</span>
          <h2>Projetos para apresentar depois</h2>
        </div>
        <div className="placeholder-grid">
          <article>
            <h3>Aplicativo comercial</h3>
            <p>Espaço reservado para cases mobile, sistemas internos e apps publicados.</p>
          </article>
          <article>
            <h3>Site institucional</h3>
            <p>Área pronta para destacar resultados, tecnologias usadas e imagens do projeto.</p>
          </article>
          <article>
            <h3>Identidade digital</h3>
            <p>Use este bloco para mostrar marcas, interfaces, materiais e protótipos.</p>
          </article>
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div>
          <span>Sobre Nós</span>
          <h2>Design, código e estratégia trabalhando juntos.</h2>
        </div>
        <p>
          Transformamos necessidades de negócio em produtos digitais objetivos:
          visual profissional, tecnologia confiável e suporte para evoluir cada
          etapa do projeto.
        </p>
      </section>

      <footer className="site-footer" id="contato">
        <p>Pronto para começar seu projeto?</p>
        <a className="quote-button compact" href="mailto:contato@tisolutions.com">
          Solicitar proposta
        </a>
      </footer>
    </main>
  )
}

export default App
