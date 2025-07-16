---
id: deployment
title: Deployment
sidebar_position: 9
---

# Deployment

Panduan deployment aplikasi Flutter Dopply untuk monitoring kesehatan ibu hamil.

## Build & Run Aplikasi

1. **Install dependencies**
   Jalankan perintah berikut di root project:
   ```shell
   flutter pub get
   ```
2. **Build dan jalankan aplikasi**
   - Untuk emulator/device Android:
     ```shell
     flutter run
     ```
   - Untuk build APK:
     ```shell
     flutter build apk --release
     ```
   - Untuk build iOS (macOS):
     ```shell
     flutter build ios --release
     ```

## Struktur Folder lib/

- `core/` : Helper, storage, navigasi, konfigurasi
- `models/` : Model data (Patient, MonitoringResult, dsb)
- `screens/` : UI dan logic per fitur (monitoring, history, share, notifikasi)
- `services/` : Service API, BLE, business logic
- `shared/` : Komponen dan utilitas yang digunakan lintas fitur
- `widgets/` : Widget custom reusable

## Konfigurasi BLE

- Pastikan perangkat BLE sudah pairing dengan device.
- Cek permission Bluetooth di aplikasi:
  - Android: `android/app/src/main/AndroidManifest.xml`
  - iOS: `ios/Runner/Info.plist`
- Gunakan widget scan dan connect dari package `flutter_blue_plus` di folder `services/` dan `screens/monitoring/`.

## Tips Deployment

- Pastikan environment Flutter sudah terinstall dan versi sesuai dengan project.
- Gunakan emulator/device fisik untuk pengujian BLE.
- Cek log dan debug console untuk troubleshooting.
- Untuk distribusi, upload APK ke Play Store atau build IPA untuk App Store.
