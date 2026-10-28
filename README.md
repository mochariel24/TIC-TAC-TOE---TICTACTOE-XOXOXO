# Ardiyanti — Tic Tac Toe

Aplikasi Tic Tac Toe untuk dua pemain pada satu perangkat. Dibuat dengan React Native, Expo, TypeScript, dan Expo Router.

## Fitur

- Permainan dua pemain dengan giliran X dan O.
- Deteksi kemenangan pada baris, kolom, dan diagonal.
- Deteksi permainan seri dan penanda kotak yang membentuk kemenangan.
- Tombol untuk memulai ronde baru.
- Tampilan menyesuaikan ukuran layar ponsel dan tablet.
- Dapat dijalankan melalui Expo Go pada Android dan iOS.

## Teknologi

- Expo SDK 58
- React Native 0.88
- React 19
- TypeScript
- Expo Router

## Persyaratan

- Node.js 22.13 atau lebih baru.
- npm, yang disertakan bersama Node.js.
- Expo Go terbaru untuk menjalankan aplikasi pada ponsel.

Expo SDK 58 memerlukan Node.js minimal 22.13. Lihat [tabel versi SDK Expo](https://docs.expo.dev/versions/v58.0.0/) untuk detail kompatibilitas.

## Instalasi dan menjalankan

1. Unduh atau ekstrak folder proyek.
2. Buka PowerShell atau Command Prompt pada folder proyek.
3. Pasang dependensi:

   ```powershell
   npm.cmd install
   ```

4. Jalankan server Expo:

   ```powershell
   npx.cmd expo start --lan
   ```

5. Pindai QR code yang muncul di terminal menggunakan aplikasi Expo Go.

Di PowerShell, akhiran `.cmd` membantu jika Windows memblokir `npm.ps1` atau `npx.ps1` karena Execution Policy. Di Command Prompt, perintah biasa `npm install` dan `npx expo start --lan` dapat digunakan.

Pastikan ponsel dan komputer terhubung ke jaringan Wi-Fi yang sama. Biarkan terminal Expo tetap terbuka selama aplikasi digunakan. Tekan `Ctrl + C` di terminal untuk menghentikan server.

### Menjalankan di iPhone

Expo Go pada iPhone fisik meminta Expo CLI dan aplikasi Expo Go masuk menggunakan akun Expo yang sama. Jika CLI belum masuk, jalankan:

```powershell
npx.cmd expo login --no-browser
npx.cmd expo whoami
```

Masuk ke Expo Go dengan akun yang sama, lalu pindai QR code atau tekan **Try Again**. Jika fitur login tanpa browser tidak tersedia pada versi CLI yang digunakan, lihat opsi login melalui `npx.cmd expo login -h`.

### Pilihan menjalankan lain

- Web: `npm.cmd run web`.
- Android emulator: siapkan Android Studio dan emulator, lalu jalankan `npm.cmd run android`.
- iOS Simulator: memerlukan macOS dan Xcode. Di Windows, gunakan iPhone fisik dengan Expo Go.

## Cara bermain

1. Pemain X mendapat giliran pertama.
2. Pemain bergantian memilih kotak kosong.
3. Pemain yang lebih dulu menyusun tiga simbol segaris menang.
4. Jika semua kotak terisi tanpa ada pemenang, permainan berakhir seri.
5. Tekan **Mulai Ulang** untuk mengosongkan papan dan memulai ronde baru.

## Pemeriksaan kode

Jalankan perintah berikut dari folder proyek:

```powershell
npm.cmd run lint
npm.cmd run typecheck
```

## Struktur folder

```text
ARDIYANTI - TICTACTOE/
├── .gitignore                   File dan folder yang tidak perlu diunggah ke Git
├── .vscode/                     Saran ekstensi dan pengaturan editor
├── AGENTS.md                    Panduan kerja untuk kontributor dan asisten kode
├── assets/
│   └── images/                 Ikon aplikasi, ikon Android, favicon, dan splash screen
├── src/
│   ├── app/                    Rute dan layout Expo Router
│   │   ├── _layout.tsx
│   │   └── index.tsx            Layar utama permainan
│   └── features/
│       └── tic-tac-toe/
│           ├── components/     Papan, kartu pemain, dan status permainan
│           ├── game-logic.ts   Pemeriksaan kemenangan dan pembuatan papan
│           ├── theme.ts        Warna aplikasi
│           ├── types.ts        Tipe TypeScript permainan
│           └── useTicTacToe.ts State dan aksi permainan
├── app.json                    Konfigurasi Expo
├── eslint.config.js             Konfigurasi pemeriksaan kode
├── package.json                Dependensi dan perintah proyek
├── package-lock.json           Versi dependensi yang terkunci
├── tsconfig.json               Konfigurasi TypeScript
└── README.md
```

Folder `node_modules`, `.expo`, dan hasil build tidak perlu disertakan saat membagikan kode. Dependensi dapat dipasang kembali dengan `npm.cmd install`.

## Membuat file ZIP

Di PowerShell, jalankan perintah ini dari folder proyek untuk membuat ZIP tanpa dependensi lokal dan metadata Git:

```powershell
tar -a -c -f ..\ARDIYANTI-TICTACTOE-GITHUB.zip README.md AGENTS.md .gitignore .vscode app.json eslint.config.js package.json package-lock.json tsconfig.json src/app src/features assets/images/icon.png assets/images/android-icon-foreground.png assets/images/android-icon-monochrome.png assets/images/favicon.png assets/images/splash-icon.png
```

Untuk GitHub, ekstrak ZIP terlebih dahulu lalu unggah isi folder proyek, atau gunakan perintah Git di bawah. Jangan unggah file ZIP sebagai pengganti file sumber repositori.

## Mengunggah ke GitHub

1. Buat repositori kosong di GitHub. Jika memakai kode lokal ini, jangan buat README tambahan di GitHub.
2. Buka terminal pada folder proyek, lalu jalankan:

   ```bash
   git add .
   git commit -m "Initial commit: Tic Tac Toe"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPOSITORI.git
   git push -u origin main
   ```

3. Ganti `USERNAME` dan `NAMA-REPOSITORI` dengan nama akun dan repositori GitHub Anda.

Jika folder hasil ekstrak belum memiliki Git, jalankan `git init` sebelum `git add .`. Jika alamat `origin` sudah terdaftar, ubah alamatnya dengan `git remote set-url origin https://github.com/USERNAME/NAMA-REPOSITORI.git`.

## Lisensi

Lisensi proyek belum ditentukan. Tambahkan file `LICENSE` jika ingin menetapkan izin penggunaan dan distribusi kode.

## APLIKASI DEMO 
<img width="591" height="1280" alt="TICTACTOE" src="https://github.com/user-attachments/assets/1b3689d0-a4bf-449a-bec2-08ba49234f3d" />
