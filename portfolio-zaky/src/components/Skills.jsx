import { useEffect, useRef } from 'react'
import s from './Skills.module.css'

const iconMap = {
  html:  s.iconHtml,
  css:   s.iconCss,
  js:    s.iconJs,
  react: s.iconReact,
  git:   s.iconGit,
  figma: s.iconFigma,
}

const skills = [
  { icon: 'fab fa-html5',     color: 'html',     name: 'HTML5',       pct: 90, desc: 'Semantic markup, accessibility, dan struktur halaman web yang solid.' },
  { icon: 'fab fa-css3-alt',  color: 'css',      name: 'CSS3',        pct: 85, desc: 'Flexbox, Grid, animasi, dan responsive design yang modern.' },
  { icon: 'fab fa-js-square', color: 'js',       name: 'JavaScript',  pct: 75, desc: 'DOM manipulation, ES6+, event handling, dan Fetch API.' },
  { icon: 'fab fa-react',     color: 'react',    name: 'React',       pct: 60, desc: 'Components, props, state, dan hooks dasar (useState, useEffect).' },
  { icon: 'fab fa-git-alt',   color: 'git',    name: 'Git & GitHub',pct: 70, desc: 'Version control, branching, dan kolaborasi project.' },
  { icon: 'fab fa-figma',     color: 'figma',  name: 'Figma',       pct: 65, desc: 'UI design, prototyping, dan kolaborasi desain antarmuka.' },
]

function SkillCard({ skill }) {
  const fillRef = useRef(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { el.style.width = skill.pct + '%' }, 300)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [skill.pct])

  return (
    <div className={s.card}>
      <div className={`${s.icon} ${iconMap[skill.color]}`}>
        <i className={skill.icon} />
      </div>
      <div className={s.info}>
        <div className={s.header}>
          <span className={s.name}>{skill.name}</span>
          <span className={s.pct}>{skill.pct}%</span>
        </div>
        <div className={s.bar}>
          <div className={s.fill} ref={fillRef} />
        </div>
        <p className={s.desc}>{skill.desc}</p>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">What I work with</span>
          <h2 className="section-title">My <span className="accent-text">Skills</span></h2>
        </div>
        <div className={`${s.grid} fade-up delay-1`}>
          {skills.map(sk => <SkillCard key={sk.name} skill={sk} />)}
        </div>
      </div>
    </section>
  )
}
