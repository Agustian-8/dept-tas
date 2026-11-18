export interface OnboardingStep {
  id: number;
  week: string;
  title: string;
  desc: string;
}

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    week: 'Minggu Pertama · Hari 1–3',
    title: 'Pengenalan Ruang Lingkup & Struktur Departemen',
    desc: 'Membaca profil departemen Technical After Sales, memahami hierarki koordinasi kerja, dan berkenalan dengan anggota tim senior di lapangan.',
  },
  {
    id: 2,
    week: 'Minggu Pertama · Hari 4–7',
    title: 'Wajib Baca SOP Utama & Standar Keselamatan',
    desc: 'Mempelajari dokumen bertanda "Wajib Karyawan Baru" di menu Materi, khususnya prosedur inspeksi unit dan standar penanganan ban/baterai.',
  },
  {
    id: 3,
    week: 'Minggu Kedua',
    title: 'Praktik Lapangan & Penggunaan Form Checklist',
    desc: 'Ikut mendampingi senior melakukan inspeksi unit, mencoba mengisi lembar kerja digital, serta memahami alur pelaporan data.',
  },
];