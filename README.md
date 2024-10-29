# Aplikasi CRUD dengan MERN Stack

Ini adalah aplikasi CRUD (Create, Read, Update, Delete) sederhana yang dibangun menggunakan MERN Stack (MongoDB, Express, React, dan Node.js).

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Endpoint API](#endpoint-api)
- [Struktur Proyek](#struktur-proyek)
- [Tangkapan Layar](#tangkapan-layar)

## Fitur

- **Create**: Tambahkan data baru ke dalam database.
- **Read**: Lihat data yang disimpan di dalam database.
- **Update**: Modifikasi data yang ada di dalam database.
- **Delete**: Hapus data dari database.

## Teknologi yang Digunakan

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Dependensi Lain**: Axios, Mongoose, CORS

## Prasyarat

- **Node.js**: Pastikan Node.js sudah terinstal di komputer Anda.
- **MongoDB**: Siapkan server MongoDB lokal atau gunakan MongoDB Atlas.

## Instalasi

### 1. Clone Repositori

```bash
git clone https://github.com/ranggamuktii/Mern-Stack-CRUD.git
cd crud-mern
```

### 2. Instalasi Dependensi

#### Backend

Masuk ke folder `backend` dan install semua paket yang dibutuhkan.

```bash
cd backend
npm init -y
npm i express mongoose cors
npm i -g nodemon
```

#### Frontend

Masuk ke folder `frontend` dan install semua paket yang dibutuhkan.

```bash
cd ../frontend
npm i react-router-dom axios bulma
```

## Menjalankan Aplikasi

### 1. Jalankan MongoDB

Pastikan MongoDB berjalan di komputer Anda atau terhubung ke MongoDB Atlas.

### 2. Jalankan Server Backend

Di folder `backend`, jalankan perintah berikut untuk memulai server backend:

```bash
nodemon index.js
```

Ini akan memulai server di `http://localhost:5000`

### 3. Jalankan Server Frontend

Di folder `frontend`, jalankan perintah berikut untuk memulai aplikasi React:

```bash
npm start
```

Frontend akan berjalan di `http://localhost:3000`

## Endpoint API

### Base URL: `http://localhost:5000/api`

| Method | Endpoint   | Deskripsi                                     |
| ------ | ---------- | --------------------------------------------- |
| GET    | /items     | Mengambil semua item                          |
| POST   | /items     | Menambahkan item baru                         |
| GET    | /items/:id | Mengambil item berdasarkan ID                 |
| PATCH  | /items/:id | Memperbarui sebagian data item berdasarkan ID |
| DELETE | /items/:id | Menghapus item berdasarkan ID                 |

## Struktur Proyek

```bash
crud-mern/
├── backend/                 # Backend dengan Express & Node.js
│ ├── controllers/           # Fungsi controller untuk logika setiap route
│ │   └── UserController.js  # Controller untuk mengelola logika CRUD user
│ ├── models/                # Skema database MongoDB
│ │   └── UserModels.js      # Model untuk mendefinisikan skema data user
│ ├── routes/                # API routes untuk CRUD
│ │   └── UserRoute.js       # Route untuk mengatur endpoint CRUD user
│ └── index.js               # File untuk memulai server
├── frontend/                # Frontend dengan React
│ ├── public/                # File statis (HTML, favicon, dll.)
│ └── src/                   # Sumber utama aplikasi React
│ │   └── components/        # Komponen React yang dapat digunakan kembali
│ │       ├── AddUser.js     # Komponen untuk menambah user baru
│ │       ├── EditUser.js    # Komponen untuk mengedit data user
│ │       └── userList.js    # Komponen untuk menampilkan daftar user
│ ├── index.js               # File utama untuk memulai aplikasi React
│ └── App.js                 # Komponen utama aplikasi
└── README.md                # Dokumentasi proyek
```
