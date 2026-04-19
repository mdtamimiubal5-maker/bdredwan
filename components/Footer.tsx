import React from 'react';

const Footer: React.FC = () => {
  // Social link gulo ekhane update korte parbe
  const socials = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/profile.php?id=61586782145260' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: 'https://www.instagram.com/bd_radwan/' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/bd-radwan-7b7084391?//' },
    { name: 'Twitter', icon: 'fab fa-x-twitter', href: 'https://x.com/MdRedwan2050' },
    { name: 'Pinterest', icon: 'fab fa-pinterest', href: 'https://www.pinterest.com/bdradwan/' },
   
  ];

  return (
    <>
      {/* Font Awesome Link (Ei link-ti icon dekhabe) */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
      />

      <footer className="footer-bg pt-24 pb-8 px-8 md:px-20 border-t border-white/5 relative z-10 bg-[#05010a] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Section 1: CTA */}
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Let's start a test<br />project together.
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-sm">
              Feel free to reach out if you want to collaborate with me, or simply have a chat.
            </p>
            <a 
              href="mailto:bdsujonndm@gmail.com" 
              className="border border-[#3b1472] hover:border-[#7c3aed] hover:bg-purple-600/10 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all group"
            >
              Start a new project 
              <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-2"></i>
            </a>
          </div>

          {/* Section 2: Navigations */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-8">Navigations</h3>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li><a href="#home" className="hover:text-purple-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-500 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-purple-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-purple-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Section 3: Contact & Socials */}
          <div className="md:col-span-4">
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6">Drop me a line</h3>
              <div className="flex items-center gap-4 text-gray-400 text-lg group">
                <i className="fas fa-envelope text-purple-600"></i>
                <a href="mailto:mdredwanhassan2025@gmail.com" className="hover:text-white transition-colors">mdredwanhassan2025@gmail.com</a>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6">Direct Message Me</h3>
              <div className="flex items-center gap-4 text-gray-400 text-lg group">
                <i className="fab fa-whatsapp text-purple-600 text-2xl"></i>
                <a href="https://wa.me/8801581762050" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+8801581762050</a>
              </div>
            </div>

            {/* Follow Me Section - Icons correctly linked here */}
            <div>
              <h3 className="text-xl font-bold mb-6">Follow me here</h3>
              <div className="flex gap-8 text-2xl text-gray-400">
                {socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-all hover:-translate-y-1"
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
            &copy; 2025 Sujon It Expert. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-gray-700">
            <a href="#" className="hover:text-yellow-400 transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-all">Terms of Service</a>
          </div>
        </div>

        {/* Scroll Up Button */}
        <div className="absolute bottom-10 right-10">
          <a href="#" className="w-12 h-12 rounded-full border border-purple-900 flex items-center justify-center text-purple-500 hover:bg-purple-900 hover:text-white transition-all shadow-lg">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
