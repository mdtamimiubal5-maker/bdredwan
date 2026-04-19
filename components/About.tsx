import React from 'react';

const About: React.FC = () => {
  const details = [
    { label: 'Full Name', value: 'BD RADWAN' },
    { label: 'City', value: 'Rangpur, Bangladesh' },
    { label: 'Age', value: '20 Years Old' },
    { label: 'Email', value: 'mdredwanhassan2025@gmail.com' },
    { label: 'Nationality', value: 'Bangladeshi' },
    { label: 'Specialization', value: 'YouTube Promotion & SEO Expert' },
  ];

  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Side: Image Section (Updated with your link) */}
          <div className="w-full lg:w-5/12 relative group cursor-pointer">
            {/* Background Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-500/20 rounded-3xl -z-10 group-hover:-top-6 group-hover:-left-6 transition-all duration-500"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-[#111]">
              <img 
                // Notun Google Content Link Add Kora Hoyeche
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiixwDrdB8qxpDyEtZOZXAMoWFJfjORKZDQJI2ayEaLSKWw1rQVFd7giiAXzRU826UEN62Alr3pRdy4RLa3fJDHeXf4LUSzdX_3U6e9_-DevPwQZL34SnfGkYNHvsbugcUFSx2vdYgBevEcbNe_F0KjbncTVFuPyZCQBec-3L72xcM0jm_BPvVS-gURZuDx/s2368/1764611607146.jpg" 
                alt="Bd Radwan" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 object-cover"
                onError={(e) => {
                    // Jodi kono karone image load na hoy, tar jonno fallback
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x800?text=Sujon+Ahmed";
                }}
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hidden md:block transition-all duration-500 group-hover:translate-y-[-10px] group-hover:translate-x-[10px] z-20">
              <div className="text-yellow-400 text-3xl font-black">4+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Years Exp.</div>
            </div>
          </div>

          {/* Right Side: Content Section */}
          <div className="w-full lg:w-7/12">
            <div className="mb-10">
              <h2 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4">Discovery</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-8 italic text-white">
                About <span className="underline decoration-yellow-500 decoration-2 underline-offset-[12px]">Me!</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light text-justify">
                 <span className="text-white font-medium"></span> I’m Sujon Ahmed, a professional digital marketer with a wealth of experience in SEO technical skills, social media management, and Google Ads campaigns. I specialize in helping businesses like yours attract more customers, increase visibility, and achieve measurable growth through strategic, data-driven marketing.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
              {details.map((detail, idx) => (
                <div key={idx} className="flex flex-col border-b border-white/5 pb-4 group cursor-default">
                  <span className="text-yellow-400 font-black text-[10px] uppercase tracking-[0.2em] mb-1 group-hover:translate-x-2 transition-transform duration-300">
                    {detail.label}
                  </span>
                  <span className="text-white font-bold text-lg transition-colors group-hover:text-yellow-500/80">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest shadow-xl shadow-yellow-400/20">
                Hire Me Now
              </a>
              <button className="px-10 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest backdrop-blur-sm">
                Download CV
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
