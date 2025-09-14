import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import DetailedServices from '@/components/DetailedServices';
import GallerySection from '@/components/GallerySection';
import InsuranceSection from '@/components/InsuranceSection';
import PricingSection from '@/components/PricingSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
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
    </div>
  );
}
