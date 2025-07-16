---
sidebar_position: 1
slug: /getting-started
---

# Getting Started

Panduan ini membantu Anda memulai pengembangan dan menjalankan aplikasi Dopply berbasis Flutter.

## Prasyarat

- Flutter SDK (https://docs.flutter.dev/get-started/install)
- VS Code atau Android Studio
- Git
- Emulator Android/iOS atau device fisik

## Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/<username>/dopply_app.git
   cd dopply_app
   ```
2. **Install Dependencies**
   Jalankan perintah berikut di root project:
   ```bash
   flutter pub get
   ```
3. **Konfigurasi BLE**
   - Pastikan perangkat BLE sudah pairing dengan device
   - Aktifkan permission Bluetooth di device dan aplikasi
   - Untuk Android, cek `AndroidManifest.xml` dan pastikan permission BLE sudah ditambahkan
   - Untuk iOS, cek `Info.plist` dan tambahkan permission Bluetooth

## Menjalankan Aplikasi

1. **Jalankan di Emulator/Device**
   ```bash
   flutter run
   ```
2. **Build APK/IPA**
   - Android: `flutter build apk`
   - iOS: `flutter build ios`

## Struktur Project

Lihat penjelasan detail di [Folder Structure](./folder-structure.md).

## Troubleshooting

- Jika terjadi error dependency, jalankan `flutter clean` lalu `flutter pub get`.
- Pastikan device/emulator sudah terhubung dan permission Bluetooth aktif.
- Cek log di debug console untuk detail error.

## Referensi

- [Flutter Install Guide](https://docs.flutter.dev/get-started/install)
- [BLE Permissions Android](https://developer.android.com/guide/topics/connectivity/bluetooth)
- [BLE Permissions iOS](https://developer.apple.com/documentation/corebluetooth)
