---
id: features
title: Main Features & Usage
sidebar_position: 2
---

# Main Features & Usage

Aplikasi Dopply menyediakan fitur monitoring kesehatan ibu hamil secara real-time, berbagi hasil ke dokter, dan notifikasi langsung di aplikasi. Berikut penjelasan fitur utama dan cara penggunaannya:

## Fitur Utama

### 1. Monitoring Kesehatan (BLE)
- Scan dan koneksi ke perangkat BLE menggunakan `flutter_blue_plus`.
- Data BPM dan status ditampilkan di halaman Monitoring.
- File terkait: `screens/monitoring/monitoring_screen.dart`, `services/ble_service.dart`.

### 2. Riwayat Monitoring
- Melihat riwayat hasil monitoring yang telah dilakukan.
- Detail hasil, status, dan nama dokter ditampilkan dalam bentuk card.
- File terkait: `screens/history/history_screen.dart`, `models/monitoring.dart`.

### 3. Share ke Dokter
- Tombol share pada setiap hasil monitoring untuk berbagi ke dokter.
- Pemilihan dokter dan pengiriman data ke backend.
- File terkait: `screens/share_doctor_screen.dart`, `services/share_monitoring_service.dart`.

### 4. Notifikasi
- Badge notifikasi di AppBar dan halaman khusus notifikasi.
- Pesan notifikasi dari backend ditampilkan ke user.
- File terkait: `screens/notification_screen.dart`, `models/notification.dart`, `widgets/notification_badge.dart`.

### 5. Dashboard & Navigasi
- Dashboard untuk pasien, dokter, dan admin.
- Navigasi antar fitur menggunakan `go_router`.
- File terkait: `screens/dashboard/patient_dashboard.dart`, `screens/dashboard/doctor_dashboard.dart`, `core/routes.dart`.

## Cara Penggunaan

1. **Login/Register:**
   - User melakukan login atau registrasi melalui halaman autentikasi.
   - File: `screens/auth/login_screen.dart`, `screens/auth/register_screen.dart`.
2. **Monitoring:**
   - Hubungkan perangkat BLE, lakukan monitoring, dan simpan hasil.
   - File: `screens/monitoring/monitoring_screen.dart`.
3. **Riwayat & Share:**
   - Lihat riwayat monitoring, pilih hasil, dan share ke dokter jika diperlukan.
   - File: `screens/history/history_screen.dart`, `screens/share_doctor_screen.dart`.
4. **Notifikasi:**
   - Cek notifikasi terbaru di badge atau halaman notifikasi.
   - File: `screens/notification_screen.dart`.
5. **Dashboard:**
   - Navigasi ke dashboard sesuai peran user (pasien/dokter/admin).
   - File: `screens/dashboard/patient_dashboard.dart`, dll.

## Struktur Folder Terkait

```
lib/
  screens/      # UI & logic per fitur
  models/       # Model data
  services/     # Service API, BLE, business logic
  widgets/      # Widget custom
  core/         # Helper, storage, navigasi
```


