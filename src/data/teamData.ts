  export interface TeamMember {
    id: string;
    name: string;
    role: string;
    photo?: string;      // path foto, opsional
    initials: string;    // fallback kalau foto belum ada
    whatsapp: string;    // format: 628xxxx
    email: string;
    bio?: string;        // deskripsi singkat
  }

  export const teamData: TeamMember[] = [
    // ============ MANAGER ============
    {
      id: '1',
      name: 'Yanta Djaya',
      role: 'Manager T&AS',
      photo: '/team/yanta.jpeg',
      initials: 'YD',
      whatsapp: '6281234567890',        // ← ganti nomor asli
      email: 'yanta.djaya@example.com', // ← ganti email asli
      bio: 'Memimpin strategi dan koordinasi departemen Technical After Sales.',
    },

    // ============ ADMIN ============
    {
      id: '2',
      name: 'Fany Fitramadhani',
      role: 'Administrasi & Koordinasi',
      photo: '/team/fany.jpeg',
      initials: 'FF',
      whatsapp: '6289876543210',           // ← ganti nomor asli
      email: 'fany.fitramadhani@example.com', // ← ganti email asli
      bio: 'Mengelola administrasi, dokumentasi, dan koordinasi internal.',
    },

    // ============ STAFF TECHNICAL SUPPORT ============
    {
      id: '3',
      name: 'Rifqi Syarul Maulana',
      role: 'Technical Support',
      photo: '/team/rifqi.jpeg',
      initials: 'RS',
      whatsapp: '6281112223334',         // ← ganti nomor asli
      email: 'rifqi.syarul@example.com', // ← ganti email asli
      bio: 'Menangani inspeksi unit dan pelaporan kendala teknis lapangan.',
    },
    {
      id: '4',
      name: 'Firdaus Rian',
      role: 'Technical Support',
      photo: '/team/firdaus.jpeg',
      initials: 'FR',
      whatsapp: '6282223334445',        // ← ganti nomor asli
      email: 'firdaus.rian@example.com', // ← ganti email asli
      bio: 'Menangani inspeksi unit dan pelaporan kendala teknis lapangan.',
    },
    {
      id: '5',
      name: 'Aldi Mayung Sera',
      role: 'Technical Support',
      photo: '/team/aldi.jpeg',
      initials: 'AM',
      whatsapp: '6283334445556',         // ← ganti nomor asli
      email: 'aldi.mayung@example.com',  // ← ganti email asli
      bio: 'Menangani inspeksi unit dan pelaporan kendala teknis lapangan.',
    },
    {
      id: '6',
      name: 'Agustian',
      role: 'Technical Support',
      photo: '/team/agustian.jpeg',
      initials: 'AG',
      whatsapp: '6284445556667',        // ← ganti nomor asli
      email: 'agustian@example.com',    // ← ganti email asli
      bio: 'Menangani inspeksi unit dan pelaporan kendala teknis lapangan.',
    },
    {
      id: '7',
      name: 'Teguh Pratama Putra',
      role: 'Technical Support',
      photo: '/team/teguh.jpeg',
      initials: 'TP',
      whatsapp: '6285556667778',         // ← ganti nomor asli
      email: 'teguh.pratama@example.com', // ← ganti email asli
      bio: 'Menangani inspeksi unit dan pelaporan kendala teknis lapangan.',
    },
  ];