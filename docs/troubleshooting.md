---
id: troubleshooting
title: Troubleshooting
sidebar_position: 10
---

# Troubleshooting

Berikut adalah solusi untuk masalah umum yang sering terjadi pada pengembangan dan penggunaan aplikasi Dopply (folder `lib/`).

## Masalah Koneksi BLE
- **Perangkat BLE tidak terdeteksi:**
  - Pastikan perangkat BLE aktif dan dalam mode pairing.
  - Cek permission Bluetooth di device dan aplikasi (`AndroidManifest.xml`/`Info.plist`).
  - Gunakan widget scan dari `flutter_blue_plus` di `lib/screens/monitoring/monitoring_screen.dart`.
- **Gagal koneksi BLE:**
  - Restart aplikasi dan perangkat BLE.
  - Pastikan versi package `flutter_blue_plus` sudah terbaru di `pubspec.yaml`.

## Masalah API & Data
- **API error (401/500):**
  - Cek token autentikasi di service API (`lib/services/`).
  - Pastikan endpoint dan payload sesuai dokumentasi backend.
- **Data dokter tidak muncul di riwayat:**
  - Pastikan backend mengirim field `doctor_name` dan `doctor_email`.
  - Cek parsing JSON di model `MonitoringResult` (`lib/models/`).
  - Gunakan log debug di `lib/screens/history/history_screen.dart` untuk cek data.

## Masalah UI & State
- **UI tidak update setelah share ke dokter:**
  - Pastikan pemanggilan `setState` atau update provider Riverpod di `lib/screens/history/`.
  - Refresh FutureBuilder setelah aksi share.
- **Notifikasi tidak muncul:**
  - Cek implementasi badge dan service notifikasi di `lib/screens/notification/` dan `lib/services/notification_service.dart`.
  - Pastikan backend mengirim data notifikasi dengan format yang benar.

## Error Build/Run
- **Gagal build aplikasi:**
  - Jalankan `flutter pub get` untuk install dependensi.
  - Cek versi Flutter dan package di `pubspec.yaml`.
- **Error import atau file tidak ditemukan:**
  - Pastikan struktur folder dan penamaan file di `lib/` sesuai dengan import di kode.

## Debugging Tips
- Gunakan debug console di VS Code/Android Studio untuk melihat log error.
- Tambahkan print/log di file terkait untuk melacak data dan state.
- Cek dokumentasi package yang digunakan jika error spesifik muncul.

---
