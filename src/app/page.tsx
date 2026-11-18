'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ModuleLibrary from '@/components/ModuleLibrary';
import OnboardingGuide from '@/components/OnboardingGuide';
import ContactSupport from '@/components/ContactSupport';

export default function Home() {
  const [activeTab, setActiveTab] = useState('beranda');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFDFE' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        {activeTab === 'beranda' && (
          <>
            <HeroSection />
            <ModuleLibrary />
          </>
        )}
        {activeTab === 'onboarding' && <OnboardingGuide />}
        {activeTab === 'kontak' && <ContactSupport />}
      </main>

      <footer className="border-t border-line py-6 text-center text-xs text-ink-soft">
        © 2026 Technical After Sales — Portal Internal
      </footer>
    </div>
  );
}