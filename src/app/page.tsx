'use client';

// import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import DetailedServices from '@/components/DetailedServices';
import GallerySection from '@/components/GallerySection';
import InsuranceSection from '@/components/InsuranceSection';
import PricingSection from '@/components/PricingSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
// import VideoIntro from '@/components/VideoIntro';

export default function Home() {
  // Video intro is currently hidden - will be implemented later
  // const [showIntro, setShowIntro] = useState(true);
  // const [hasVisited, setHasVisited] = useState(false);

  // useEffect(() => {
  //   // Check if user has already seen the intro in this session
  //   const introShown = sessionStorage.getItem('introShown');
  //   if (introShown) {
  //     setShowIntro(false);
  //     setHasVisited(true);
  //   }
  // }, []);

  // const handleIntroComplete = () => {
  //   setShowIntro(false);
  //   setHasVisited(true);
  //   sessionStorage.setItem('introShown', 'true');
  // };

  // if (showIntro && !hasVisited) {
  //   return <VideoIntro onComplete={handleIntroComplete} />;
  // }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSlider />
      <DetailedServices />
      <GallerySection />
      <InsuranceSection />
      <PricingSection />
      <TestimonialCarousel />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
