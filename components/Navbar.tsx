import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu open thakle pichon-er scroll bondho hobe
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#service' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    /* z-[9999] kora hoyeche jate onno section upore na uthe */
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-[#050505] py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - z-index barano hoyeche */}
        <a href="#home" className="relative z-[10001] text-xl font-bold tracking-tighter text-yellow-500">
          SUJON AHMED<span className="text-white"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[12px] font-bold text-white hover:text-yellow-500 uppercase tracking-widest transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button - z-index barano hoyeche */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden relative z-[10001] text-yellow-500 p-2">
          {isMenuOpen ? (
            <span className="text-3xl font-light text-white">✕</span>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>

        {/* --- Mobile Menu Overlay --- */}
        <div className={`fixed inset-0 bg-[#050505] z-[10000] flex flex-col transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          
          <div className="flex flex-col px-8 pt-28 space-y-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors uppercase">
                {link.name}
              </a>
            ))}
            
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-4 inline-block bg-yellow-500 text-black font-black py-4 px-8 rounded-xl text-center text-sm uppercase tracking-widest">
              Hire Me Now ↗
            </a>

            {/* Extra Info (Contact & Location) */}
            <div className="pt-10 space-y-6 border-t border-white/10">
              <div>
                <h4 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.3em] mb-2">Contact Info</h4>
                <p className="text-gray-400 text-sm">📞 +8801581762050</p>
                <p className="text-gray-400 text-sm">✉️ mdredwanhassan2025@gmail.com</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.3em] mb-2">Location</h4>
                <p className="text-gray-400 text-sm leading-relaxed">📍 Kurigram, Rangpur Division, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
