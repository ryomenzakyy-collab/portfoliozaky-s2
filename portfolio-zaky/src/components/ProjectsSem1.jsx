import s from './Projects.module.css'
import sm from './ProjectsSem1.module.css'

const themeMap = {
  kalkulator: s.themeTodo,
  zakat:      s.themeHafalan,
  traffic:    s.themeModules,
}

const projects = [
  {
    id: '01',
    title: 'Kalkulator',
    desc: 'Kalkulator dasar menggunakan JavaScript. Mendukung operasi penjumlahan, pengurangan, perkalian, dan pembagian dengan tampilan yang bersih.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    theme: 'kalkulator',
    icon: 'fas fa-calculator',
    featured: false,
    link: 'https://kalkulator-gamma-six.vercel.app/'
  },
  {
    id: '02',
    title: 'Kalkulator Zakat Emas',
    desc: 'Aplikasi untuk menghitung zakat emas berdasarkan berat dan harga emas terkini. Membantu pengguna mengetahui kewajiban zakat dengan mudah.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    theme: 'zakat',
    icon: 'fas fa-coins',
    featured: false,
    link: 'https://kalkatmas.vercel.app/'
  },
  {
    id: '03',
    title: 'Traffic Lamp',
    desc: 'Simulasi lampu lalu lintas menggunakan JavaScript. Menampilkan pergantian warna merah, kuning, hijau secara otomatis dengan timing yang tepat.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    theme: 'traffic',
    icon: 'fas fa-traffic-light',
    featured: false,
    link: 'https://lampu-six.vercel.app/'
  },
]

function ProjectCard({ project }) {
  const liveLink = project.link || '#'
  const linkProps = project.link
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <div className={s.card}>
      <div className={s.imgWrap}>
        <div className={`${s.placeholder} ${themeMap[project.theme]}`}>
          <i className={project.icon} />
        </div>
        <div className={s.overlay}>
          <a href={liveLink} className={s.overlayBtn} aria-label="Live demo" {...linkProps}>
            <i className="fas fa-external-link-alt" />
          </a>
          <a href="#" className={s.overlayBtn} aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>

      <div className={s.body}>
        <span className={s.num}>{project.id}</span>
        <h3 className={s.title}>{project.title}</h3>
        <p className={s.desc}>{project.desc}</p>
        <div className={s.stack}>
          {project.stack.map(t => <span key={t} className={s.stackTag}>{t}</span>)}
        </div>
        <a href={liveLink} className="btn btn-primary btn-sm" {...linkProps}>
          <i className="fas fa-eye" /> View Project
        </a>
      </div>
    </div>
  )
}

export default function ProjectsSem1() {
  return (
    <section className={`${sm.section} section`} id="projects-sem1">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">Semester 1</span>
          <h2 className="section-title">Projects <span className="accent-text">Semester 1</span></h2>
        </div>
        <div className={`${s.grid} fade-up delay-1`}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
