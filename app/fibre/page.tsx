import Navbar from '@/components/sections/Navbar';
import FibreHero from '@/components/sections/FibreHero';
import FibrePackages from '@/components/sections/FibrePackages';
import FibreFeatures from '@/components/sections/FibreFeatures';
import FibreInstallation from '@/components/sections/FibreInstallation';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function FibrePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FibreHero />
        <FibrePackages />
        <FibreFeatures />
        <FibreInstallation />
        <Contact />
        <Footer />
      </main>
    </>
  );
}