# JURNAL PENGEMBANGAN WEBSITE PORTOFOLIO
## Zaky Faturrahman Mikail
### Ujian Praktik Pemrograman Web | 2026

---

## IDENTITAS PROYEK

| Item | Keterangan |
|------|------------|
| **Nama Proyek** | Website Portofolio Personal |
| **Nama Pembuat** | Zaky Faturrahman Mikail |
| **Teknologi** | React.js, CSS Modules, Vite |
| **Tahun** | 2026 |
| **URL** | - |

---

## BAB I — PENDAHULUAN

### 1.1 Latar Belakang

Di era digital saat ini, seorang pengembang web membutuhkan media untuk menampilkan kemampuan dan karya-karyanya secara profesional. Website portofolio merupakan salah satu cara terbaik untuk memperkenalkan diri kepada dunia, baik kepada calon klien, recruiter, maupun sesama developer.

Sebagai pelajar SMA yang sedang menekuni bidang Web Development, saya merasa perlu untuk membuat sebuah website portofolio yang mencerminkan kemampuan teknis sekaligus identitas diri saya sebagai developer.

### 1.2 Tujuan

1. Membuat website portofolio yang modern, responsif, dan profesional
2. Menampilkan skill, project, dan profil diri secara menarik
3. Menerapkan teknologi React.js dan CSS Modules dalam proyek nyata
4. Menghasilkan karya yang dapat digunakan sebagai bukti kompetensi

### 1.3 Manfaat

- Sebagai media presentasi diri kepada publik
- Membuktikan kemampuan dalam pemrograman web
- Dokumentasi perjalanan belajar pemrograman

---

## BAB II — LANDASAN TEORI

### 2.1 React.js

React.js adalah library JavaScript open-source yang dikembangkan oleh Meta (Facebook) untuk membangun antarmuka pengguna (UI). React menggunakan konsep **component-based architecture**, di mana tampilan dibagi menjadi komponen-komponen kecil yang bisa digunakan ulang.

**Fitur utama React yang digunakan:**
- **JSX** — sintaks yang menggabungkan JavaScript dan HTML
- **useState** — hook untuk mengelola state komponen
- **useEffect** — hook untuk side effects seperti animasi dan event listener
- **useRef** — hook untuk mengakses DOM element secara langsung

### 2.2 CSS Modules

CSS Modules adalah fitur yang memungkinkan setiap file CSS di-*scope* secara lokal ke komponen yang menggunakannya. Artinya, nama class tidak akan bertabrakan antar komponen berbeda.

**Contoh penggunaan:**
```jsx
// Navbar.module.css
.navbar { position: fixed; ... }

// Navbar.jsx
import s from './Navbar.module.css'
<nav className={s.navbar}>...</nav>
```

Keuntungan CSS Modules:
- Tidak ada konflik nama class
- Kode lebih terorganisir
- Mudah di-maintain

### 2.3 Vite

Vite adalah build tool generasi terbaru yang sangat cepat untuk proyek JavaScript modern. Vite menggunakan ES Modules native di browser sehingga proses development jauh lebih cepat dibanding webpack.

### 2.4 Responsive Design

Responsive design adalah pendekatan desain web di mana tampilan website menyesuaikan diri dengan ukuran layar perangkat. Teknik yang digunakan:
- **CSS Grid** dan **Flexbox** untuk layout
- **Media queries** untuk breakpoint
- **clamp()** untuk ukuran font yang fleksibel
- **Mobile-first** approach

---

## BAB III — PERANCANGAN SISTEM

### 3.1 Struktur Halaman

Website ini merupakan **single-page application (SPA)** dengan beberapa section:

```
├── Navbar          → Navigasi tetap di atas
├── Hero            → Halaman utama / sambutan
├── About           → Profil dan informasi diri
├── Skills          → Daftar kemampuan teknis
├── My Projects     → Karya di semester 2
├── Projects Sem 1  → Karya di semester 1
├── Contact         → Form dan informasi kontak
└── Footer          → Hak cipta dan navigasi bawah
```

### 3.2 Struktur Komponen React

```
src/
├── main.jsx                    → Entry point
├── App.jsx                     → Root component
├── index.css                   → Global styles & CSS variables
├── hooks/
│   ├── useTheme.js             → Dark/Light mode logic
│   └── useScrollReveal.js      → Animasi scroll
└── components/
    ├── Navbar.jsx / .module.css
    ├── Hero.jsx / .module.css
    ├── About.jsx / .module.css
    ├── Skills.jsx / .module.css
    ├── Projects.jsx / .module.css
    ├── ProjectsSem1.jsx / .module.css
    ├── Contact.jsx / .module.css
    ├── Footer.jsx / .module.css
    └── BackToTop.jsx / .module.css
```

### 3.3 Desain Visual

| Elemen | Pilihan |
|--------|---------|
| **Tema** | Dark mode default + Light mode toggle |
| **Warna Aksen** | Ungu `#6c63ff` + Cyan `#00d4ff` |
| **Font** | Poppins (Google Fonts) |
| **Layout** | Minimalis, bersih, modern |
| **Animasi** | Fade-up saat scroll, typing effect, hover |

---

## BAB IV — IMPLEMENTASI

### 4.1 Fitur yang Diimplementasikan

#### ✅ Typing Animation
Teks di hero section mengetik sendiri secara otomatis menggunakan custom hook `useTyping`. Teks berganti-ganti antara:
- "Aspiring Web Developer"
- "HSI Student"
- "JavaScript Enthusiast"
- "UI/UX Learner"
- "Future Full-Stack Dev"

#### ✅ Dark / Light Mode
Pengguna dapat beralih antara tema gelap dan terang dengan menekan ikon di navbar. Pilihan tersimpan di `localStorage` sehingga tetap diingat saat browser ditutup.

#### ✅ Scroll Reveal Animation
Setiap section muncul dengan animasi fade-up saat di-scroll menggunakan `IntersectionObserver` API — tanpa library tambahan.

#### ✅ Skill Bar Animation
Progress bar pada section Skills bergerak dari 0% ke nilai sebenarnya saat section tersebut terlihat di layar.

#### ✅ Responsive Design
Website tampil dengan baik di semua ukuran layar:
- Desktop (> 900px)
- Tablet (768px – 900px)
- Mobile (< 768px)

#### ✅ CSS Modules
Semua styling menggunakan CSS Modules sehingga tidak ada konflik class antar komponen.

### 4.2 Daftar Project yang Ditampilkan

**Semester 2 (My Projects):**

| No | Nama Project | Teknologi |
|----|-------------|-----------|
| 01 | Apk Card | HTML, CSS, JavaScript |
| 02 | To-Do List | HTML, CSS, JS, LocalStorage |
| 03 | CSS Modules Portfolio | React, CSS Modules, Vite |
| 04 | Penghitung Hafalan | HTML, CSS, JavaScript |
| 05 | Mini Kasir | HTML, CSS, JavaScript |

**Semester 1:**

| No | Nama Project | Teknologi |
|----|-------------|-----------|
| 01 | Kalkulator | HTML, CSS, JavaScript |
| 02 | Kalkulator Zakat Emas | HTML, CSS, JavaScript |
| 03 | Traffic Lamp | HTML, CSS, JavaScript |

### 4.3 Skill yang Ditampilkan

| Skill | Level |
|-------|-------|
| HTML5 | 90% |
| CSS3 | 85% |
| JavaScript | 75% |
| React | 60% |
| Git & GitHub | 70% |
| Figma | 65% |

---

## BAB V — PENGUJIAN

### 5.1 Pengujian Fungsionalitas

| Fitur | Status |
|-------|--------|
| Navbar smooth scroll | ✅ Berfungsi |
| Typing animation | ✅ Berfungsi |
| Dark/Light mode toggle | ✅ Berfungsi |
| Scroll reveal animation | ✅ Berfungsi |
| Skill bar animation | ✅ Berfungsi |
| Link project eksternal | ✅ Berfungsi |
| Contact form UI | ✅ Berfungsi |
| Back to top button | ✅ Berfungsi |
| Hamburger menu mobile | ✅ Berfungsi |

### 5.2 Pengujian Responsivitas

| Perangkat | Resolusi | Status |
|-----------|----------|--------|
| Desktop | 1440px | ✅ Baik |
| Laptop | 1024px | ✅ Baik |
| Tablet | 768px | ✅ Baik |
| Mobile | 375px | ✅ Baik |

### 5.3 Hasil Build

```
vite build

dist/index.html          0.76 kB  │ gzip:  0.47 kB
dist/assets/index.css   19.75 kB  │ gzip:  4.87 kB
dist/assets/index.js   164.37 kB  │ gzip: 52.87 kB

✓ built in 1.93s
```

---

## BAB VI — PENUTUP

### 6.1 Kesimpulan

Proyek website portofolio ini berhasil dibuat dengan menggunakan teknologi React.js dan CSS Modules. Seluruh fitur yang direncanakan berhasil diimplementasikan, mulai dari animasi typing, dark/light mode, scroll reveal, hingga tampilan yang responsif di berbagai perangkat.

Proyek ini membuktikan bahwa dengan pemahaman dasar HTML, CSS, dan JavaScript yang kuat, serta eksplorasi terhadap framework modern seperti React.js, seorang pelajar SMA pun mampu membuat website yang profesional dan fungsional.

### 6.2 Saran Pengembangan

Ke depannya, website ini dapat dikembangkan dengan:
1. Menambahkan backend untuk form kontak agar pesan benar-benar terkirim
2. Mengintegrasikan CMS agar konten bisa diubah tanpa edit kode
3. Menambahkan halaman blog untuk dokumentasi belajar
4. Optimasi SEO agar mudah ditemukan di mesin pencari
5. Deploy ke hosting seperti Vercel atau Netlify

---

## DAFTAR PUSTAKA

1. React Documentation — https://react.dev
2. Vite Documentation — https://vitejs.dev
3. CSS Modules — https://github.com/css-modules/css-modules
4. MDN Web Docs — https://developer.mozilla.org
5. Google Fonts (Poppins) — https://fonts.google.com
6. Font Awesome Icons — https://fontawesome.com
7. EmailJS — https://emailjs.com

---

*Dibuat oleh Zaky Faturrahman Mikail — © 2026*
