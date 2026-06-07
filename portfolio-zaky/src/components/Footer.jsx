import s from './Footer.module.css'

const links = ['Home', 'About', 'Projects', 'Contact']

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className={s.footer}>
      <div className={`${s.inner} container`}>
        <div className={s.logo}>
          <span className={s.bracket}>&lt;</span>Zaky Dev<span className={s.bracket}>/&gt;</span>
        </div>

        <p className={s.copy}>
          © 2026 Zaky Faturrahman Mikail — Built with{' '}
          <span className={s.accent}>😹</span> &amp; lots of ☕
        </p>

        <nav className={s.links}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={e => handleClick(e, `#${l.toLowerCase()}`)}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
