---
id: faq
title: FAQ
sidebar_position: 10
---

# FAQ

Berikut adalah pertanyaan yang sering ditanyakan terkait folder `lib` pada aplikasi Flutter Dopply:

## 1. Apa isi utama folder `lib`?
Folder `lib` berisi seluruh kode sumber aplikasi Flutter, termasuk model data, UI, service, dan widget custom.

## 2. Bagaimana struktur folder di dalam `lib`?
- `core/`: Helper, storage, navigasi, dan konfigurasi global
- `models/`: Model data seperti `Patient`, `MonitoringResult`, dll
- `screens/`: UI dan logic per fitur (monitoring, history, share, notifikasi)
- `services/`: Service untuk API, BLE, dan business logic
- `shared/`: Komponen atau utilitas yang digunakan lintas fitur
- `widgets/`: Widget custom yang reusable

## 3. Di mana entry point aplikasi Flutter?
File `main.dart` di dalam folder `lib` adalah entry point aplikasi.

## 4. Bagaimana cara menambah fitur baru?
Buat folder atau file baru di dalam `screens/` untuk UI dan logic, tambahkan model di `models/` jika perlu, dan service di `services/` untuk integrasi API atau BLE.

## 5. Bagaimana cara mengelola state aplikasi?
Aplikasi menggunakan Riverpod untuk state management. Provider dan logic state biasanya ditempatkan di `core/` atau di dalam file fitur terkait.

## 6. Bagaimana cara melakukan testing?
Testing dilakukan di folder `test/` (di luar `lib`). Untuk widget test, pastikan widget di `lib/widgets/` dan logic di `lib/services/` mudah diakses dari test.

## 7. Bagaimana cara menambah asset (gambar/icon)?
Tambahkan file ke folder `assets/` lalu daftarkan di `pubspec.yaml` agar bisa digunakan di aplikasi.

## 8. Bagaimana cara integrasi dengan BLE?
Gunakan service di `lib/services/` dan package `flutter_blue_plus` untuk scan, connect, dan baca data dari perangkat BLE.

## 9. Bagaimana cara share hasil monitoring ke dokter?
Gunakan fitur di `screens/history/` dan service di `services/share_monitoring_service.dart` untuk mengirim data ke backend dan memilih dokter.

## 10. Bagaimana jika data dokter tidak muncul di riwayat?
Pastikan backend mengirim field `doctor_name` dan `doctor_email` pada response API. Cek log debug di aplikasi Flutter untuk memastikan parsing berjalan benar.
