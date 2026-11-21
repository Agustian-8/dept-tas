export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Umum' | 'Modul' | 'Darurat' | 'Akses';
}

export const faqData: FaqItem[] = [
  {
    id: '1',
    category: 'Umum',
    question: 'Apa itu departemen Technical After Sales?',
    answer:
      'Technical After Sales adalah departemen yang menangani layanan purna jual teknis — meliputi inspeksi unit, pelaporan kendala lapangan, pelatihan teknis, dan koordinasi perawatan armada (ban, aki, unit).',
  },
  {
    id: '2',
    category: 'Umum',
    question: 'Siapa saja yang bisa mengakses portal ini?',
    answer:
      'Seluruh staff internal Technical After Sales, karyawan baru, serta staff dari departemen lain yang membutuhkan informasi terkait layanan teknis dapat mengakses portal ini tanpa perlu login.',
  },
  {
    id: '3',
    category: 'Modul',
    question: 'Bagaimana cara mencari modul yang saya butuhkan?',
    answer:
      'Buka halaman Materi, gunakan kolom pencarian di atas untuk mencari berdasarkan judul atau kata kunci. Anda juga bisa memfilter berdasarkan kategori (SOP, Teknis, Checklist, Katalog) atau tipe file (PDF, PPT, Excel).',
  },
  {
    id: '4',
    category: 'Modul',
    question: 'Bagaimana cara mengunduh file modul?',
    answer:
      'Setelah menemukan modul yang dicari, klik tombol "Download File" pada card modul. File akan otomatis terunduh dari Google Drive ke perangkat Anda.',
  },
  {
    id: '5',
    category: 'Modul',
    question: 'Kenapa muncul pesan "can\'t download this file" saat mengunduh?',
    answer:
      'Google Drive memiliki batas unduhan harian untuk file yang di-share publik. Jika muncul pesan ini, tunggu 24 jam — file akan pulih otomatis. Jika mendesak, hubungi Admin via WhatsApp untuk alternatif pengiriman.',
  },
  {
    id: '6',
    category: 'Modul',
    question: 'Apakah ada modul yang wajib dibaca karyawan baru?',
    answer:
      'Ya. Modul dengan badge "Wajib" di halaman Materi adalah dokumen esensial untuk karyawan baru — mencakup SOP inspeksi unit, training aki, dan pelaporan kendala. Baca semuanya di minggu pertama.',
  },
  {
    id: '7',
    category: 'Darurat',
    question: 'Bagaimana alur pelaporan kendala darurat di lapangan?',
    answer:
      'Tiga langkah: (1) Isi form checklist inspeksi terlebih dahulu, (2) Kirim ringkasan kendala + form ke Admin via WhatsApp, (3) Jika belum tertangani dalam 24 jam, eskalasi ke Manager langsung.',
  },
  {
    id: '8',
    category: 'Darurat',
    question: 'Kapan saya harus menghubungi Manager langsung?',
    answer:
      'Hubungi Manager jika: kendala belum tertangani 24 jam setelah dilaporkan ke Admin, kendala berdampak pada operasional armada secara luas, atau membutuhkan persetujuan kebijakan khusus.',
  },
  {
    id: '9',
    category: 'Akses',
    question: 'Apakah portal ini bisa diakses dari HP?',
    answer:
      'Ya. Portal ini responsif dan bisa diakses dari HP, tablet, maupun desktop. Untuk pengalaman terbaik, gunakan browser modern (Chrome, Safari, Edge).',
  },
  {
    id: '10',
    category: 'Akses',
    question: 'Apakah saya perlu akun untuk mengakses portal?',
    answer:
      'Tidak. Portal ini terbuka untuk seluruh staff internal terkait tanpa perlu login. Cukup buka link dan akses semua informasi yang tersedia.',
  },
];