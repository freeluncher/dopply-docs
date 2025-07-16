---
id: contributing
title: Contributing & Code Style
sidebar_position: 99
---

# Contributing & Code Style

Panduan ini menjelaskan cara berkontribusi dan standar penulisan kode pada folder `lib` aplikasi Flutter Dopply.

## Cara Berkontribusi

1. **Fork & Clone Repository**
   - Fork repo utama, lalu clone ke lokal.
2. **Buat Branch Fitur/Perbaikan**
   - Gunakan nama branch yang deskriptif, contoh: `features/monitoring`, `fix/api-response`.
3. **Ikuti Struktur Folder**
   - Simpan file sesuai struktur:
     - `lib/core/` untuk helper, storage, konfigurasi
     - `lib/models/` untuk model data
     - `lib/screens/` untuk UI dan logic per fitur
     - `lib/services/` untuk API, BLE, business logic
     - `lib/widgets/` untuk widget custom
4. **Commit & Pull Request**
   - Commit dengan pesan jelas dan singkat.
   - Buat pull request ke branch utama, sertakan deskripsi perubahan.
5. **Review & Testing**
   - Pastikan kode sudah di-review dan lolos testing sebelum merge.

## Code Style Flutter

- **Indentasi:** 2 spasi (default Flutter)
- **Penamaan:**
  - Class: PascalCase (`MonitoringResult`)
  - Variable & Function: camelCase (`doctorName`, `getHistory()`)
  - File: snake_case (`history_screen.dart`)
- **Komentar:**
  - Gunakan komentar untuk penjelasan logic penting dan TODO
- **Import:**
  - Kelompokkan import: Dart, package, project
- **Widget:**
  - Gunakan widget custom di `lib/widgets/` jika reusable
- **State Management:**
  - Gunakan Riverpod untuk state global
- **Testing:**
  - Tambahkan unit/widget test di folder `test/`
- **Linting & Formatting:**
  - Jalankan `flutter format .` sebelum commit
  - Ikuti rekomendasi dari `analysis_options.yaml`

## Contoh Commit Message

```
feat: tambah fitur share ke dokter di history_screen
fix: perbaiki parsing doctorName pada MonitoringResult
refactor: pisahkan logic notifikasi ke service terpisah
```

## Referensi
- [Flutter Style Guide](https://docs.flutter.dev/cookbook/style)
- [Effective Dart](https://dart.dev/guides/language/effective-dart/style)
- [Riverpod Documentation](https://riverpod.dev/)
