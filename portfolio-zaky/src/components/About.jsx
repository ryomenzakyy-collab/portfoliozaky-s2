import s from './About.module.css'

const stats = [
  { number: '3+', label: 'Projects' },
  { number: '2+', label: 'Years Learning' },
  { number: '5+', label: 'Technologies' },
]

const tags = [
  { icon: 'fas fa-graduation-cap', text: 'HSI Student' },
  { icon: 'fas fa-map-marker-alt', text: 'Indonesia' },
  { icon: 'fas fa-code',           text: 'Web Developer' },
  { icon: 'fas fa-heart',          text: 'Open Source' },
]

export default function About() {
  return (
    <section className={`${s.about} section`} id="about">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">About <span className={s.accent}>Me</span></h2>
        </div>

        <div className={s.grid}>
          {/* Image column */}
          <div className={`${s.imgCol} fade-up`}>
            <div className={s.imgWrap}>
              <div className={s.avatar}>
                <i className="fas fa-user" />
              </div>
              <div className={s.ring} />
            </div>
            <div className={s.statsRow}>
              {stats.map(st => (
                <div className={s.statCard} key={st.label}>
                  <span className={s.statNum}>{st.number}</span>
                  <span className={s.statLbl}>{st.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text column */}
          <div className={`${s.textCol} fade-up delay-1`}>
            <h3 className={s.hi}>Halo! Saya Zaky 😄</h3>
            <p>
              Saya adalah seorang pelajar SMA IT HSI yang belajar dengan dunia web
              development. Perjalanan saya dimulai ketika pertama kali melihat bagaimana
              sebuah halaman web bisa berinteraksi dengan penggunanya — sejak saat itu,
              saya tidak bisa berhenti belajar.
            </p>
            <p>
              Setiap hari saya mengeksplorasi HTML, CSS, dan JavaScript. Saya percaya
              bahwa <strong className={s.accent}>kode yang baik bukan hanya tentang
              fungsi, tapi juga tentang estetika</strong> — karena pengguna layak
              mendapatkan pengalaman yang indah.
            </p>
            <p>
              Saat ini saya sedang mendalami React.js dan berencana terus berkembang
              di bidang full-stack development. Saya mencari setiap kesempatan untuk
              belajar, berkontribusi, dan tumbuh bersama komunitas developer.
            </p>

            <div className={s.tagsRow}>
              {tags.map(t => (
                <span className={s.tag} key={t.text}>
                  <i className={t.icon} /> {t.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
