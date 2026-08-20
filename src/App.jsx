import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Disciplines from './components/Disciplines';
import AgeTracks from './components/AgeTracks';
import WhyBrainSpark from './components/WhyBrainSpark';
import HowItWorks from './components/HowItWorks';
import BrainArena from './components/BrainArena';
import ParentDashboardDemo from './components/ParentDashboardDemo';
import Coaches from './components/Coaches';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TrialBookingModal from './components/TrialBookingModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedTrackForTrial, setSelectedTrackForTrial] = useState('');

  const handleOpenTrial = (trackName = '') => {
    setSelectedTrackForTrial(trackName);
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
    setSelectedTrackForTrial('');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 selection:bg-spark-500 selection:text-white relative">
      
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-spark-600 via-amber-600 to-spark-600 text-white text-[11px] sm:text-xs font-bold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2 relative z-50">
        <span>🚀 Fall Cohort Registrations Open! Limited to 4 students per batch.</span>
        <button
          onClick={() => handleOpenTrial()}
          className="underline hover:text-amber-200 ml-1 hidden sm:inline"
        >
          Claim Your Free Trial Session →
        </button>
      </div>

      {/* Navigation */}
      <Navbar
        onOpenTrialModal={() => handleOpenTrial()}
        onScrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero
        onOpenTrialModal={() => handleOpenTrial()}
        onScrollToArena={() => scrollToSection('brain-arena')}
      />

      {/* 6 Core Disciplines */}
      <Disciplines
        onOpenTrialModal={(name) => handleOpenTrial(name)}
      />

      {/* Age-Based Progression Tracks */}
      <AgeTracks
        onOpenTrialModal={(name) => handleOpenTrial(name)}
      />

      {/* Why BrainSpark & Neuroscience Matrix */}
      <WhyBrainSpark />

      {/* 5-Stage Learning Journey */}
      <HowItWorks
        onOpenTrialModal={() => handleOpenTrial()}
      />

      {/* Interactive Cognitive Mini-Game Arena */}
      <BrainArena
        onOpenTrialModal={() => handleOpenTrial('Brain Arena Assessment')}
      />

      {/* Live Interactive Parent Dashboard Demo */}
      <ParentDashboardDemo
        onOpenTrialModal={() => handleOpenTrial('Parent Portal Enrolment')}
      />

      {/* World-Class Coaches & Mentors */}
      <Coaches />

      {/* Parent Reviews & Transformation Stories */}
      <Testimonials />

      {/* Transparent Pricing Plans */}
      <Pricing
        onOpenTrialModal={(name) => handleOpenTrial(name)}
      />

      {/* FAQ Accordion */}
      <FAQ
        onOpenTrialModal={() => handleOpenTrial()}
      />

      {/* Footer */}
      <Footer
        onOpenTrialModal={() => handleOpenTrial()}
      />

      {/* Free Trial Modal */}
      <TrialBookingModal
        isOpen={trialModalOpen}
        onClose={handleCloseTrial}
        preselectedTrack={selectedTrackForTrial}
      />

    </div>
  );
}
