import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Global animated mesh background */}
      <div className="mesh-bg" aria-hidden="true" />

      <main className="relative z-10 min-h-screen bg-transparent">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
