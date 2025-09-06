import Navbar from '@/components/sections/Navbar';
import MicrowaveHero from '@/components/sections/MicrowaveHero';
import MicrowavePackages from '@/components/sections/MicrowavePackages';
import MicrowaveTechnology from '@/components/sections/MicrowaveTechnology';
import MicrowaveInstallation from '@/components/sections/MicrowaveInstallation';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function MicrowavePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <MicrowaveHero />
        <MicrowavePackages />
        <MicrowaveTechnology />
        <MicrowaveInstallation />
        <Contact />
        <Footer />
      </main>
    </>
  );
}