import Navbar from '@/components/sections/Navbar';
import FixedLTEHero from '@/components/sections/FixedLTEHero';
import LTEPackages from '@/components/sections/LTEPackages';
import NetworkProviders from '@/components/sections/NetworkProviders';
import LTEFeatures from '@/components/sections/LTEFeatures';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function FixedLTEPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FixedLTEHero />
        <LTEPackages />
        <NetworkProviders />
        <LTEFeatures />
        <Contact />
        <Footer />
      </main>
    </>
  );
}