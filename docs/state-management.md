---
id: state-management
title: State Management & Navigation
sidebar_position: 4
---

# State Management & Navigation

Aplikasi Dopply menggunakan **Riverpod** untuk pengelolaan state dan **go_router** untuk navigasi antar halaman. Kedua teknologi ini dipilih karena kemudahan integrasi, skalabilitas, dan best practice di ekosistem Flutter.

## Riverpod: State Management

Riverpod digunakan untuk mengelola state global, seperti data monitoring, user, dan notifikasi. Provider dapat berupa `StateProvider`, `FutureProvider`, atau `ChangeNotifierProvider` sesuai kebutuhan.

### Contoh Implementasi State
```dart
final monitoringProvider = StateProvider<double>((ref) => 0.0);

// Mengakses dan mengubah state di widget
Consumer(
  builder: (context, ref, _) {
    final bpm = ref.watch(monitoringProvider);
    return Text('BPM: $bpm');
  },
)
```

## go_router: Navigation

go_router digunakan untuk routing dinamis dan navigasi antar halaman, menggantikan Navigator tradisional. Konfigurasi route dilakukan di file utama, dan navigasi antar halaman menjadi lebih terstruktur.

### Contoh Implementasi Navigasi
```dart
final _router = GoRouter(
  routes: [
    GoRoute(
      path: '/history',
      builder: (context, state) => HistoryScreen(),
    ),
    GoRoute(
      path: '/monitoring',
      builder: (context, state) => MonitoringScreen(),
    ),
  ],
);

// Navigasi ke halaman monitoring
context.go('/monitoring');
```

## Best Practice
- Gunakan provider untuk state yang dibutuhkan banyak widget
- Pisahkan logic state di folder `core/` atau `services/`
- Definisikan route di satu tempat agar mudah dikelola
- Navigasi menggunakan path string agar lebih maintainable

Dengan Riverpod dan go_router, pengelolaan state dan navigasi di aplikasi Dopply menjadi lebih modular, testable, dan scalable.
