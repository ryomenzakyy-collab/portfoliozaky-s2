import { useEffect, useRef, useState } from 'react'
import s from './Hero.module.css'

const TYPING_STRINGS = [
  'Aspiring Web Developer',
  'SMA IT HSI Student',
  'JavaScript Enthusiast',
  'All Role',
  'Future Full-Stack Dev',
]

function useTyping(strings) {
  const [display, setDisplay]   = useState('')
  const idxRef      = useRef(0)
  const charRef     = useRef(0)
  const deletingRef = useRef(false)

  useEffect(() => {
    let timer
    function tick() {
      const current = strings[idxRef.current]
      if (!deletingRef.current) {
        charRef.current++
        setDisplay(current.slice(0, charRef.current))
        if (charRef.current === current.length) {
          deletingRef.current = true
          timer = setTimeout(tick, 1800)
          return
        }
      } else {
        charRef.current--
        setDisplay(current.slice(0, charRef.current))
        if (charRef.current === 0) {
          deletingRef.current = false
          idxRef.current = (idxRef.current + 1) % strings.length
          timer = setTimeout(tick, 400)
          return
        }
      }
      timer = setTimeout(tick, deletingRef.current ? 55 : 85)
    }
    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  }, [strings])

  return display
}

const socials = [
  { icon: 'fab fa-github',      label: 'GitHub' },
  { icon: 'fab fa-instagram',   label: 'Instagram' },
]

export default function Hero() {
  const typingText = useTyping(TYPING_STRINGS)

  const scrollTo = href => e => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className={`${s.hero} section`} id="home">
      {/* Background */}
      <div className={s.bg}>
        <div className={s.grid} />
        <div className={`${s.blob} ${s.blob1}`} />
        <div className={`${s.blob} ${s.blob2}`} />
      </div>

      <div className={`${s.inner} container`}>
        {/* Left — text */}
        <div className="fade-up">
          <div className={s.badge}>
            <span className={s.badgeDot} />
            Available for opportunities
          </div>

          <h1 className={s.title}>
            Hi, I'm Zaky <span className={s.wave}>👋</span>
          </h1>

          <h2 className={s.sub}>
            <span className={s.typingAccent}>{typingText}</span>
            <span className={s.cursor}>|</span>
          </h2>

          <p className={s.desc}>
            Pelajar SMA yang antusias di dunia Web Development.
            Membangun hal-hal keren satu baris kode sekaligus.
          </p>

          <div className={s.btns}>
            <a href="#projects" className="btn btn-primary" onClick={scrollTo('#projects')}>
              <i className="fas fa-eye" /> View My Work
            </a>
            <a href="#contact" className="btn btn-outline" onClick={scrollTo('#contact')}>
              <i className="fas fa-paper-plane" /> Contact Me
            </a>
          </div>

          <div className={s.socials}>
            {socials.map(sc => (
              <a href="#" key={sc.label} className={s.socialIcon} aria-label={sc.label}>
                <i className={sc.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — code card */}
        <div className={`${s.visual} fade-up delay-2`}>
          <div className={s.codeCard}>
            <div className={s.codeHeader}>
              <span className={`${s.dot} ${s.dotRed}`} />
              <span className={`${s.dot} ${s.dotYellow}`} />
              <span className={`${s.dot} ${s.dotGreen}`} />
              <span className={s.codeFname}>zaky.js</span>
            </div>
            <div
              className={s.codeBody}
              dangerouslySetInnerHTML={{
                __html: `<pre><code><span class="kw">const</span> <span class="cv">zaky</span> = {
  <span class="cp">name</span>:     <span class="cs">"Zaky Faturrahman Mikail"</span>,
  <span class="cp">role</span>:     <span class="cs">"Web Developer"</span>,
  <span class="cp">status</span>:   <span class="cs">"Student of SMA IT HSI"</span>,
  <span class="cp">skills</span>:   [
    <span class="cs">"HTML"</span>, <span class="cs">"CSS"</span>,
    <span class="cs">"JavaScript"</span>, <span class="cs">"React"</span>
  ],
  <span class="cp">passion</span>:  <span class="cs">"Building the web 🚀"</span>,
  <span class="cp">available</span>: <span class="cb">true</span>
};</code></pre>`,
              }}
            />
          </div>
        </div>
      </div>

      <a href="#about" className={s.scrollDown} onClick={scrollTo('#about')} aria-label="Scroll down">
        <i className="fas fa-chevron-down" />
      </a>
    </section>
  )
}
