---
id: references
title: Reference
sidebar_position: 99
---

# Reference

Berikut adalah penjelasan dan referensi untuk struktur folder `lib` pada aplikasi Flutter Dopply.

## Struktur Folder `lib`

```
lib/
  core/         # Helper, storage, navigasi, konfigurasi
  models/       # Model data: Patient, MonitoringResult, dsb
  screens/      # UI dan logic per fitur: monitoring, history, share, notifikasi
  services/     # Service API, BLE, business logic
  shared/       # Komponen dan utilitas yang digunakan bersama
  widgets/      # Widget custom reusable
```

### Penjelasan Subfolder

- **core/**: Berisi helper, konfigurasi, dan service dasar seperti storage dan navigasi.
- **models/**: Berisi definisi model data (misal: `Patient`, `MonitoringResult`) yang digunakan di seluruh aplikasi.
- **screens/**: Berisi UI dan logic untuk setiap fitur/halaman (misal: monitoring, history, share, notifikasi).
- **services/**: Berisi service untuk API, BLE, dan business logic (misal: `ShareMonitoringService`).
- **shared/**: Berisi komponen, utilitas, atau resource yang digunakan bersama di banyak bagian aplikasi.
- **widgets/**: Berisi widget custom yang reusable di berbagai halaman.

## Referensi Terkait Flutter

- [Flutter Documentation](https://docs.flutter.dev/)
- [Riverpod](https://riverpod.dev/)
- [go_router](https://pub.dev/packages/go_router)
- [flutter_blue_plus](https://pub.dev/packages/flutter_blue_plus)
- [flutter_test](https://docs.flutter.dev/cookbook/testing/unit/introduction)

Untuk penjelasan lebih detail tiap file dan best practice, lihat dokumentasi pada masing-masing subfolder di repo ini.
