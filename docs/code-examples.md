---
id: code-examples
title: Code Example
sidebar_position: 7
---

# Code Example

Berikut adalah potongan kode utama dari aplikasi Dopply yang merepresentasikan logika inti pada folder `lib/`. Setiap snippet dilengkapi penjelasan singkat sesuai standar dokumentasi Docusaurus.

## 1. Model MonitoringResult

```dart title="lib/models/monitoring_result.dart"
class MonitoringResult {
  final int id;
  final String patientName;
  final int? doctorId;
  final String? doctorName;
  final String? doctorEmail;
  final String classification;
  final double averageBpm;
  final int gestationalAge;
  final String notes;
  final String doctorNotes;
  final bool sharedWithDoctor;

  MonitoringResult({
    required this.id,
    required this.patientName,
    this.doctorId,
    this.doctorName,
    this.doctorEmail,
    required this.classification,
    required this.averageBpm,
    required this.gestationalAge,
    required this.notes,
    required this.doctorNotes,
    required this.sharedWithDoctor,
  });

  factory MonitoringResult.fromJson(Map<String, dynamic> json) {
    return MonitoringResult(
      id: json['id'],
      patientName: json['patient_name'],
      doctorId: json['doctor_id'],
      doctorName: json['doctor_name'],
      doctorEmail: json['doctor_email'],
      classification: json['classification'],
      averageBpm: json['average_bpm'].toDouble(),
      gestationalAge: json['gestational_age'],
      notes: json['notes'] ?? '',
      doctorNotes: json['doctor_notes'] ?? '',
      sharedWithDoctor: json['shared_with_doctor'] ?? false,
    );
  }
}
```

> Model data hasil monitoring, parsing dari JSON backend.

## 2. FutureBuilder untuk Riwayat Monitoring

```dart title="lib/screens/history/history_screen.dart"
FutureBuilder<List<MonitoringResult>>(
  future: _futureHistory,
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return CircularProgressIndicator();
    } else if (snapshot.hasError) {
      return Text('Error: ${snapshot.error}');
    } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
      return Text('Tidak ada data riwayat.');
    }
    final results = snapshot.data!;
    return ListView.builder(
      itemCount: results.length,
      itemBuilder: (context, index) {
        final result = results[index];
        return Card(
          child: ListTile(
            title: Text('BPM: ${result.averageBpm}'),
            subtitle: Text('Dokter: ${result.doctorName ?? "-"}'),
            trailing: result.sharedWithDoctor
                ? Icon(Icons.check, color: Colors.green)
                : Icon(Icons.share, color: Colors.blue),
          ),
        );
      },
    );
  },
)
```

> Menampilkan list riwayat monitoring dengan status share ke dokter.

## 3. Share Monitoring ke Dokter

```dart title="lib/services/share_monitoring_service.dart"
class ShareMonitoringService {
  static Future<bool> shareMonitoring({
    required String jwt,
    required int recordId,
    required int doctorId,
    required String notes,
  }) async {
    final response = await http.post(
      Uri.parse('https://dopply.my.id/api/v1/monitoring/share'),
      headers: {
        'Authorization': 'Bearer $jwt',
        'Content-Type': 'application/json',
      },
      body: jsonEncode({
        'record_id': recordId,
        'doctor_id': doctorId,
        'notes': notes,
      }),
    );
    return response.statusCode == 200;
  }
}
```

> Service untuk mengirim hasil monitoring ke dokter melalui API.

## 4. Refresh Riwayat Setelah Share

```dart title="lib/screens/history/history_screen.dart"
if (selectedDoctor != null) {
  setState(() {
    _futureHistory = _getHistory();
  });
}
```

> Melakukan refresh data riwayat setelah proses share berhasil.
