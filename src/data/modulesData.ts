export interface ModuleItem {
  id: string;
  title: string;
  category: 'SOP' | 'Teknis' | 'Checklist' | 'Katalog';
  fileType: 'PDF' | 'PPT' | 'EXCEL' | 'DOC';
  description: string;
  fileUrl: string;
  fileSize: string;
  lastUpdated: string;
  isOnboarding?: boolean;
}

export const modulesData: ModuleItem[] = [
  {
    id: '1',
    title: 'SOP Inspeksi Unit & Ban Harian',
    category: 'SOP',
    fileType: 'PDF',
    description: 'Prosedur standar operasional pengecekan kondisi fisik ban sebelum unit beroperasi.',
    fileUrl: '/modul/sop/sop-inspeksi-unit.pdf',
    fileSize: '2.4 MB',
    lastUpdated: 'Nov 2026',
    isOnboarding: true,
  },
  {
    id: '2',
    title: 'Materi Presentasi Training Aki (MF & AGM)',
    category: 'Teknis',
    fileType: 'PPT',
    description: 'Slide presentasi pelatihan internal mengenai spesifikasi dan perawatan baterai starter.',
    fileUrl: '/modul/teknis/presentasi-training-aki.pptx',
    fileSize: '8.5 MB',
    lastUpdated: 'Nov 2026',
    isOnboarding: true,
  },
  {
    id: '3',
    title: 'Form Checklist Inspeksi Lapangan',
    category: 'Checklist',
    fileType: 'EXCEL',
    description: 'Template lembar kerja Excel untuk pencatatan hasil pengecekan unit di lapangan.',
    fileUrl: '/modul/checklist/form-serah-terima.xlsx',
    fileSize: '450 KB',
    lastUpdated: 'Nov 2026',
    isOnboarding: false,
  },
  {
    id: '4',
    title: 'Katalog Ban & Spesifikasi Ukuran',
    category: 'Katalog',
    fileType: 'PDF',
    description: 'Daftar lengkap tipe ban, ukuran, dan spesifikasi teknis untuk armada operasional.',
    fileUrl: '/modul/katalog/katalog-ban.pdf',
    fileSize: '5.2 MB',
    lastUpdated: 'Nov 2026',
    isOnboarding: false,
  },
  {
    id: '5',
    title: 'SOP Pelaporan Kendala Teknis',
    category: 'SOP',
    fileType: 'PDF',
    description: 'Alur standar eskalasi dan pelaporan kendala teknis dari lapangan ke departemen.',
    fileUrl: '/modul/sop/sop-pelaporan-kendala.pdf',
    fileSize: '1.8 MB',
    lastUpdated: 'Nov 2026',
    isOnboarding: true,
  },
  {
    id: '6',
    title: 'Checklist Serah Terima Unit Baru',
    category: 'Checklist',
    fileType: 'EXCEL',
    description: 'Lembar verifikasi unit baru sebelum diserahkan ke pengguna akhir.',
    fileUrl: '/modul/checklist/checklist-serah-terima.xlsx',
    fileSize: '380 KB',
    lastUpdated: 'Nov 2026',
    isOnboarding: false,
  },
];