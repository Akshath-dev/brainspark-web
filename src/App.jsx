import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUsSection from './components/AboutUsSection';
import DisciplinesSection from './components/DisciplinesSection';
import FounderSpotlight from './components/FounderSpotlight';
import EventsSection from './components/EventsSection';
import TestimonialSlider from './components/TestimonialSlider';
import BlogSection from './components/BlogSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import TrialBookingModal from './components/TrialBookingModal';
import ParentPortalModal from './components/ParentPortalModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [parentPortalOpen, setParentPortalOpen] = useState(false);
  const [selectedTrackForTrial, setSelectedTrackForTrial] = useState('');

  const handleOpenTrial = (trackName = '') => {
    setSelectedTrackForTrial(trackName);
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
    setSelectedTrackForTrial('');
  };

  return (
    <div className="min-h-screen bg-[#0E0D0B] text-neutral-900 selection:bg-sand-400 selection:text-noir-950 font-sans">
      
      {/* Top Header Navigation */}
      <Navbar
        onOpenTrialModal={() => handleOpenTrial()}
        onOpenParentPortal={() => setParentPortalOpen(true)}
      />

      {/* 1. Cinematic Hero Section (Screenshot 1) */}
      <Hero
        onOpenTrialModal={() => handleOpenTrial()}
      />

      {/* 2. About Us Split Section (Screenshot 2 & 3) */}
      <AboutUsSection
        onOpenTrialModal={() => handleOpenTrial()}
      />

      {/* 3. Our Classes / Disciplines Grid (Screenshot 3 & 4) */}
      <DisciplinesSection
        onOpenTrialModal={(name) => handleOpenTrial(name)}
      />

      {/* 4. Founder / Coach Philosophy Spotlight (Screenshot 5) */}
      <FounderSpotlight />

      {/* 5. Upcoming Events & Workshops (Screenshot 6 & 7) */}
      <EventsSection
        onOpenTrialModal={(name) => handleOpenTrial(name)}
      />

      {/* 6. Stories Behind the Moves / Testimonials (Screenshot 8) */}
      <TestimonialSlider />

      {/* 7. Cognitive Journal & Insights (Screenshot 9) */}
      <BlogSection />

      {/* 8. Call to Action with Arched Frames (Screenshot 10) */}
      <CallToActionSection
        onOpenTrialModal={() => handleOpenTrial()}
      />

      {/* 9. Minimalist Footer (Screenshot 10) */}
      <Footer
        onOpenTrialModal={() => handleOpenTrial()}
      />

      {/* Interactive Free Trial Booking Modal */}
      <TrialBookingModal
        isOpen={trialModalOpen}
        onClose={handleCloseTrial}
        preselectedTrack={selectedTrackForTrial}
      />

      {/* Interactive Parent Portal Demo Modal */}
      <ParentPortalModal
        isOpen={parentPortalOpen}
        onClose={() => setParentPortalOpen(false)}
        onOpenTrialModal={() => {
          setParentPortalOpen(false);
          handleOpenTrial();
        }}
      />

    </div>
  );
}
