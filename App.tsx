import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
          <Stats />
        </section>

        {/* About - Padding komano hoyeche */}
        <section id="about" className="py-10">
          <About />
        </section>

        {/* Resume - Background color match kora hoyeche jate dag na thake */}
        <section id="resume" className="py-10 bg-[#050505]">
          <Resume />
        </section>

        {/* Service */}
        <section id="service" className="py-10">
          <Services />
        </section>

        {/* Skills - py-20 muche py-6 kora hoyeche ebong bg color match kora hoyeche */}
        <section id="skills" className="py-6 bg-[#050505]">
          <Skills />
        </section>

        {/* Portfolio - Upore padding ekdom zero kora hoyeche */}
        <section id="portfolio" className="pt-0 pb-10">
          <Portfolio />
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 bg-[#050505]">
          <Pricing />
        </section>

        {/* Contact */}
        <section id="contact" className="py-10">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
