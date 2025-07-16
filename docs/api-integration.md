---
id: api-integration
title: API Integration
sidebar_position: 5
---

# API Integration

Project Dopply mengintegrasikan Flutter dengan REST API untuk sinkronisasi data monitoring kesehatan ibu hamil. Komunikasi dilakukan menggunakan package `http` dan seluruh request diamankan dengan JWT. Data monitoring, riwayat, dan informasi dokter diambil dan dikirim melalui endpoint yang telah disediakan backend.

## Arsitektur Integrasi API
```
[Flutter App] <---HTTP---> [REST API Backend]
   |                              |
   v                              v
[BLE Device]                [Database]
```
- Flutter menerima data dari BLE, memproses, lalu mengirim ke backend.
- Backend mengelola data monitoring, user, dan dokter.
- Semua komunikasi API menggunakan format JSON dan otentikasi JWT.

## Endpoint Utama

| Method | Endpoint                              | Deskripsi                                 |
|--------|---------------------------------------|-------------------------------------------|
| GET    | /api/v1/monitoring/history            | Mengambil riwayat hasil monitoring pasien  |
| POST   | /api/v1/monitoring/share              | Share hasil monitoring ke dokter           |
| GET    | /api/v1/user/all-doctors              | Mendapatkan daftar dokter untuk pemilihan  |

## Contoh Implementasi API di Flutter

### Mendapatkan Riwayat Monitoring
```dart
final response = await http.get(
  Uri.parse('https://dopply.my.id/api/v1/monitoring/history'),
  headers: { 'Authorization': 'Bearer $jwtToken' },
);
if (response.statusCode == 200) {
  final List history = jsonDecode(response.body);
  // Parsing ke model MonitoringResult
} else {
  // Handle error
}
```

### Share Monitoring ke Dokter
```dart
final success = await ShareMonitoringService.shareMonitoring(
  jwt: jwt,
  recordId: result.id,
  doctorId: doctor.id,
  notes: result.notes,
);
if (success) {
  // Tampilkan notifikasi sukses
} else {
  // Tampilkan pesan error
}
```

### Mendapatkan Daftar Dokter
```dart
final response = await http.get(
  Uri.parse('https://dopply.my.id/api/v1/user/all-doctors'),
  headers: { 'Authorization': 'Bearer $jwtToken' },
);
final List doctors = jsonDecode(response.body);
```

## Best Practice Integrasi

- Simpan JWT token secara aman menggunakan storage service.
- Gunakan model data (misal: MonitoringResult, Doctor) untuk parsing JSON.
- Pisahkan logic API di service agar mudah diuji dan di-maintain.
- Tangani error dan status response secara eksplisit di UI.
- Validasi data sebelum dikirim ke backend.

## Troubleshooting
- Pastikan endpoint dan token benar.
- Cek log error pada response API.
- Validasi struktur JSON sesuai model.
- Gunakan debug print untuk tracing data dari backend.

## Referensi
- [Flutter HTTP](https://pub.dev/packages/http)
- [Riverpod](https://riverpod.dev/)
- [Dopply API Documentation](https://dopply.my.id/docs)
