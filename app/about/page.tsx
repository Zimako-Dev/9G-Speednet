import Navbar from '@/components/sections/Navbar';
import AboutHero from '@/components/sections/AboutHero';
import AboutVision from '@/components/sections/AboutVision';
import AboutValues from '@/components/sections/AboutValues';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AboutHero />
        <AboutVision />
        <AboutValues />
        <Contact />
        <Footer />
      </main>
    </>
  );
}