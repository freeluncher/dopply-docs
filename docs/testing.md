---
id: testing
title: Testing
sidebar_position: 7
---

# Testing

Pengujian pada aplikasi Flutter Dopply dilakukan untuk memastikan setiap fitur dan modul di folder `lib/` berjalan sesuai harapan. Testing dibagi menjadi beberapa jenis:

## 1. Unit Test
Unit test digunakan untuk menguji fungsi, model, dan service secara terpisah. Contoh yang diuji:
- Parsing model seperti `MonitoringResult` di `lib/models/`
- Fungsi helper di `lib/core/`
- Service API di `lib/services/`

Contoh kode unit test:
```dart
import 'package:flutter_test/flutter_test.dart';
import 'package:dopply_app/models/monitoring_result.dart';

void main() {
  test('MonitoringResult parses JSON correctly', () {
    final json = {/* ...data... */};
    final result = MonitoringResult.fromJson(json);
    expect(result.patientName, isNotNull);
  });
}
```

## 2. Widget Test
Widget test digunakan untuk menguji tampilan dan interaksi UI pada widget di `lib/widgets/` dan `lib/screens/`.
- Validasi rendering UI (Card, List, dsb)
- Simulasi interaksi pengguna (tap, input)

Contoh kode widget test:
```dart
import 'package:flutter_test/flutter_test.dart';
import 'package:dopply_app/screens/history/history_screen.dart';

void main() {
  testWidgets('HistoryScreen displays monitoring list', (WidgetTester tester) async {
    await tester.pumpWidget(HistoryScreen());
    expect(find.text('Riwayat Monitoring'), findsOneWidget);
  });
}
```

## 3. Integration Test
Integration test menguji alur fitur secara end-to-end, misal:
- Proses monitoring BLE hingga data tampil di history
- Share hasil monitoring ke dokter
- Notifikasi diterima dan ditampilkan

Integration test biasanya diletakkan di folder `integration_test/` dan dijalankan dengan perintah `flutter test integration_test`.

## 4. Tools & Best Practice
- Gunakan package `flutter_test` untuk unit dan widget test
- Pisahkan file test sesuai modul di `lib/`
- Jalankan test secara rutin sebelum release
- Validasi hasil test di CI/CD jika tersedia

## 5. Referensi
- [Flutter Testing Documentation](https://docs.flutter.dev/testing)
- [flutter_test package](https://pub.dev/packages/flutter_test)
