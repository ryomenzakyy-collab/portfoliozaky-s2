import s from './Projects.module.css'

const themeMap = {
  card:    s.themeCard,
  todo:    s.themeTodo,
  modules: s.themeModules,
  hafalan: s.themeHafalan,
  kasir:   s.themeKasir,
}

const projects = [
  {
    id: '01',
    title: 'Apk Card',
    desc: 'Aplikasi kartu interaktif dengan desain modern. Menampilkan informasi dalam format card yang elegan dan responsif.',
    stack: ['React', 'CSS', 'Vite'],
    theme: 'card',
    icon: 'fas fa-id-card',
    featured: false,
    link: 'https://appcardskl.vercel.app/'
  },
  {
    id: '02',
    title: 'To-Do List',
    desc: 'Aplikasi manajemen tugas dengan fitur tambah, edit, hapus, dan filter berdasarkan status. Data tersimpan di localStorage.',
    stack: ['React', 'CSS', 'Vite ', 'LocalStorage'],
    theme: 'todo',
    icon: 'fas fa-check-square',
    featured: false,
    link: 'https://todolist-skl.vercel.app/'
  },
  {
    id: '03',
    title: 'CSS Modules',
    desc: 'Website portofolio pribadi dibangun dengan React dan CSS Modules. Desain dark mode modern dengan animasi scroll dan typing effect.',
    stack: ['React', 'CSS Modules', 'Vite'],
    theme: 'modules',
    icon: 'fas fa-laptop-code',
    featured: true,
    link: 'https://cuacacss-skl.vercel.app/'
  },
  {
    id: '04',
    title: 'Penghitung Hafalan',
    desc: 'Aplikasi untuk mencatat dan menghitung progress hafalan Al-Quran. Dilengkapi fitur target harian dan visualisasi pencapaian.',
    stack: ['React', 'CSS', 'Vite'],
    theme: 'hafalan',
    icon: 'fas fa-book-open',
    featured: false,
    link: 'https://bonusskl.vercel.app/',
  },
  {
    id: '05',
    title: 'Mini Kasir',
    desc: 'Aplikasi kasir sederhana untuk mencatat transaksi penjualan. Dilengkapi fitur tambah produk, hitung total, dan cetak struk.',
    stack: ['React', 'CSS', 'Vite'],
    theme: 'kasir',
    icon: 'fas fa-cash-register',
    featured: false,
    link: 'https://minikasirr.vercel.app/'
  },
]

function ProjectCard({ project }) {
  const liveLink = project.link || '#'
  return (
    <div className={`${s.card} ${project.featured ? s.cardFeatured : ''}`}>
      {project.featured && <span className={s.badge}>Featured</span>}

      <div className={s.imgWrap}>
        <div className={`${s.placeholder} ${themeMap[project.theme]}`}>
          <i className={project.icon} />
        </div>
        <div className={s.overlay}>
          <a href={liveLink} className={s.overlayBtn} aria-label="Live demo" target="_blank" rel="noopener noreferrer">
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
        <a href={liveLink} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-eye" /> View Project
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className={`${s.section} section`} id="projects">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">What I've built</span>
          <h2 className="section-title">My <span className="accent-text">Projects</span></h2>
        </div>
        <div className={`${s.grid} fade-up delay-1`}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  )
}
