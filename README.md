# BukaLayer — Daily Knowledge Discovery Platform

**Buka Satu Layer. Temukan Dunia Baru.**
10 hal baru setiap hari dari sains, luar angkasa, sejarah, matematika, teknologi, dan lainnya.

Project ini murni HTML, CSS, dan JavaScript (tanpa framework, backend, atau database). Semua data progres disimpan di LocalStorage browser.

## Fitur
- Daily 10: 1 materi dari tiap kategori, berganti setiap hari
- Halaman detail + fakta menarik + contoh sehari-hari + mini quiz (3 soal, ada penjelasan, skor akhir)
- Status materi: Belum dibaca / Sedang dipelajari / Selesai, tombol Mark as Completed
- 10 kategori, 30 materi, pencarian dan filter kategori
- Surprise Me! (materi acak), Bookmark, Learning Progress (streak, hari belajar, grafik 7 hari, kategori favorit)
- Dark mode, responsif (bottom navigation di mobile)

## Struktur
```
bukalayer/
├── index.html
├── css/ (style.css, components.css, responsive.css)
├── js/  (data.js, storage.js, learning.js, quiz.js, navigation.js, app.js)
├── assets/ (images, icons)
└── README.md
```

## Menjalankan lokal
1. Buka folder `bukalayer` di Visual Studio Code.
2. Cara cepat: klik dua kali `index.html`. Atau pasang ekstensi **Live Server**, klik kanan `index.html` > *Open with Live Server*.
3. Font (Bricolage Grotesque, DM Sans) dimuat dari Google Fonts. Jika offline, font sistem dipakai sebagai cadangan.

## Menambah materi
Buka `js/data.js`, lalu tambahkan satu panggilan `L(id, kategori, judul, menitBaca, ringkasan, [paragraf...], fakta, contoh, info, [[soal,[pilihan],indeksBenar,penjelasan], ...])` di bagian bawah. Gunakan `id` yang unik.
Catatan: Daily 10 mengambil satu materi per kategori. Jika kamu menambah materi, tiap kategori boleh punya jumlah berbeda.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub (mis. `bukalayer`).
2. Upload seluruh isi folder (pastikan `index.html` berada di root repo), atau lewat terminal:
   ```
   git init
   git add .
   git commit -m "BukaLayer v1"
   git branch -M main
   git remote add origin https://github.com/USERNAME/bukalayer.git
   git push -u origin main
   ```
3. Di GitHub: **Settings > Pages > Build and deployment > Source: Deploy from a branch**, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
4. Tunggu 1–2 menit. Situs tersedia di `https://USERNAME.github.io/bukalayer/`.

Router memakai hash (`#/daily`, `#/materi/3`), jadi tidak perlu konfigurasi server tambahan.

## Catatan
- Konten 100% lokal. Tidak ada database online, akun, maupun AI di versi ini.
- Data progres hanya ada di browser dan perangkat yang dipakai. Menghapus data situs akan menghapus progres.
