import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Partners from '@/components/sections/Partners';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Features />
        <Partners />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}