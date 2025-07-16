---
id: folder-structure
title: Folder, File & Structure
sidebar_position: 4
---

# Folder, File & Structure

Struktur folder dan file pada aplikasi Dopply dirancang modular agar mudah dikembangkan, diuji, dan dipelihara. Setiap fitur dan komponen utama dipisahkan dalam folder khusus sesuai fungsinya.

## Struktur Utama

```text
lib/
  core/         # Helper, storage, navigasi, konfigurasi
  models/       # Model data: Patient, MonitoringResult, dsb
  screens/      # UI dan logic per fitur: monitoring, history, share, notifikasi
  services/     # Service API, BLE, business logic
  widgets/      # Widget custom reusable
test/           # Unit dan widget test
assets/         # Gambar, icon, font
```

## Penjelasan Folder

- **core/**: Berisi helper, konfigurasi, dan utilitas umum aplikasi.
- **models/**: Berisi definisi model data seperti Patient, MonitoringResult, Doctor, dsb.
- **screens/**: Berisi UI dan logic untuk setiap fitur aplikasi (monitoring, history, share, notifikasi).
- **services/**: Berisi service untuk API, BLE, dan business logic.
- **widgets/**: Berisi widget custom yang dapat digunakan ulang di berbagai bagian aplikasi.
- **test/**: Berisi unit test dan widget test untuk validasi kode.
- **assets/**: Berisi gambar, icon, dan font yang digunakan di aplikasi.

## Contoh File Penting

- `main.dart`: Entry point aplikasi Flutter.
- `screens/history/history_screen.dart`: Halaman riwayat monitoring.
- `screens/monitoring/monitoring_screen.dart`: Halaman monitoring BLE.
- `screens/share_doctor_screen.dart`: UI pemilihan dokter.
- `services/share_monitoring_service.dart`: Service untuk share hasil ke dokter.

## Best Practice Struktur

- Pisahkan setiap fitur dalam folder dan file terpisah.
- Gunakan penamaan file dan folder yang konsisten dan deskriptif.
- Simpan asset di folder khusus agar mudah dikelola.
- Tempatkan test di folder `test/` sesuai dengan struktur di `lib/`.

---
