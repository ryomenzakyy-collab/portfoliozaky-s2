import { useState } from 'react'
import s from './Contact.module.css'

const contactInfo = [
  { icon: 'fas fa-envelope',       label: 'Email',  value: 'ryomenzakyy@gmail.com' },
  { icon: 'fas fa-map-marker-alt', label: 'Lokasi', value: 'Sukabumi, Jawa Barat, Indonesia' },
  { icon: 'fas fa-clock',          label: 'Status', value: 'Open to opportunities' },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSuccess(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    }, 1500)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header fade-up">
          <span className="section-tag">Get in touch</span>
          <h2 className="section-title">Contact <span className="accent-text">Me</span></h2>
        </div>

        <div className={`${s.grid} fade-up delay-1`}>
          {/* Info */}
          <div>
            <h3 className={s.heading}>Mari Berkolaborasi! 🤝</h3>
            <p className={s.text}>
              Punya ide project menarik? Atau sekadar ingin menyapa? Saya selalu senang
              mendengar dari orang-orang baru. Jangan ragu untuk menghubungi saya!
            </p>

            <div className={s.items}>
              {contactInfo.map(item => (
                <div className={s.item} key={item.label}>
                  <div className={s.itemIcon}><i className={item.icon} /></div>
                  <div>
                    <span className={s.itemLabel}>{item.label}</span>
                    <span className={s.itemValue}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={s.socials}>
              <a href="https://github.com/ryomenzakyy-collab" className={`${s.socialBtn} ${s.socialGithub}`}>
                <i className="fab fa-github" /> GitHub
              </a>
              <a href="https://www.instagram.com/zaky_fturr/" className={`${s.socialBtn} ${s.socialInstagram}`}>
                <i className="fab fa-instagram" /> Instagram
              </a>
            </div>
          </div>

          {/* Form */}
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.formGroup}>
              <label htmlFor="name" className={s.label}>Nama Lengkap</label>
              <div className={s.inputWrap}>
                <i className={`fas fa-user ${s.inputIcon}`} />
                <input
                  type="text" id="name" name="name"
                  placeholder="Leon s kennedy"
                  className={s.input}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={s.formGroup}>
              <label htmlFor="email" className={s.label}>Email</label>
              <div className={s.inputWrap}>
                <i className={`fas fa-envelope ${s.inputIcon}`} />
                <input
                  type="email" id="email" name="email"
                  placeholder="leonsknndy@gmail.com"
                  className={s.input}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={s.formGroup}>
              <label htmlFor="subject" className={s.label}>Subjek</label>
              <div className={s.inputWrap}>
                <i className={`fas fa-tag ${s.inputIcon}`} />
                <input
                  type="text" id="subject" name="subject"
                  placeholder="Perihal pesan..."
                  className={s.input}
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={s.formGroup}>
              <label htmlFor="message" className={s.label}>Pesan</label>
              <textarea
                id="message" name="message" rows={5}
                placeholder="Halo Zaky, saya ingin..."
                className={`${s.input} ${s.textarea}`}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
              {sending
                ? <><i className="fas fa-spinner fa-spin" /> Mengirim...</>
                : <><i className="fas fa-paper-plane" /> Kirim Pesan</>
              }
            </button>

            {success && (
              <div className={s.success}>
                <i className="fas fa-check-circle" /> Pesan berhasil dikirim! Terima kasih 🎉
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
