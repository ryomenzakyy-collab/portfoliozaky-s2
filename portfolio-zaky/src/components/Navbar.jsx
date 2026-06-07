import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Semester 1', href: '#projects-sem1' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 90) current = sec.id
      })
      setActiveLink(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`${s.navbar} ${scrolled ? s.scrolled : ''}`}>
      <div className={`${s.container} container`}>
        <a href="#home" className={s.logo} onClick={e => handleLinkClick(e, '#home')}>
          <span className={s.bracket}>&lt;</span>Zaky Dev<span className={s.bracket}>/&gt;</span>
        </a>

        <ul className={`${s.menu} ${menuOpen ? s.menuOpen : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`${s.link} ${activeLink === link.href.slice(1) ? s.linkActive : ''}`}
                onClick={e => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={s.actions}>
          <button className={s.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} />
          </button>
          <button
            className={`${s.hamburger} ${menuOpen ? s.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
