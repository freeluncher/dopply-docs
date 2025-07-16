---
id: technologies
title: Technologies
sidebar_position: 3
---

# Technologies

Aplikasi Dopply dibangun menggunakan teknologi dan library modern yang mendukung pengembangan aplikasi mobile multiplatform, integrasi perangkat BLE, serta komunikasi dengan REST API secara efisien dan aman.

## Framework & Bahasa

- **Flutter (Dart):** Framework utama untuk membangun aplikasi Android dan iOS dengan satu basis kode. Menyediakan UI modern, performa tinggi, dan ekosistem yang luas.

## State Management

- **Riverpod:** Library state management yang aman, scalable, dan mudah diuji. Digunakan untuk mengelola state aplikasi, seperti data monitoring, notifikasi, dan user session.

## Navigasi

- **go_router:** Library navigasi modern untuk Flutter, mendukung routing dinamis, deep linking, dan navigasi antar halaman secara efisien.

## Koneksi BLE

- **flutter_blue_plus:** Library untuk komunikasi dengan perangkat Bluetooth Low Energy (BLE). Digunakan untuk scan, koneksi, dan pengambilan data dari perangkat kesehatan.

## HTTP & REST API

- **http:** Library untuk melakukan request HTTP ke backend REST API. Digunakan untuk mengambil riwayat monitoring, daftar dokter, dan mengirim hasil monitoring.

## UI/UX

- **Material Design Widget:** Widget bawaan Flutter untuk membangun UI yang konsisten dan responsif.
- **Custom Widget:** Widget yang dibuat khusus untuk kebutuhan aplikasi, seperti card monitoring, badge notifikasi, dan tombol share.

## Testing

- **flutter_test:** Library untuk unit test dan widget test di Flutter.

## Tools Pengembangan

- **VS Code & Android Studio:** IDE utama untuk pengembangan, debugging, dan testing aplikasi.
- **Git:** Version control untuk kolaborasi dan manajemen kode.

## Dependency Management

- **pubspec.yaml:** File konfigurasi untuk mengelola dependency dan versi library yang digunakan dalam aplikasi.

---
## Overview

Aplikasi Dopply adalah solusi mobile berbasis Flutter untuk monitoring kesehatan ibu hamil secara real-time. Dengan integrasi perangkat BLE dan REST API, aplikasi ini memungkinkan pasien dan dokter untuk:

- Melakukan monitoring data kesehatan (BPM, status, dsb) secara langsung dari perangkat BLE.
- Melihat riwayat hasil monitoring dan status berbagi ke dokter.
- Berbagi hasil monitoring ke dokter melalui fitur share yang terintegrasi.
- Menerima notifikasi terkait hasil monitoring dan status data.

Teknologi utama yang digunakan meliputi Flutter (Dart) untuk pengembangan aplikasi multiplatform, Riverpod untuk state management, go_router untuk navigasi, serta integrasi BLE dan REST API untuk komunikasi data. Struktur aplikasi dirancang modular agar mudah dikembangkan dan diuji, dengan dokumentasi yang profesional untuk kebutuhan akademik dan tim pengembang.