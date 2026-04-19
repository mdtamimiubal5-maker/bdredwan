import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'YouTube Video Promotion', level: 100 },
    { name: 'YouTube Video SEO', level: 99 },
    { name: 'Google Ads', level: 92 },
    { name: 'Meta Ads', level: 88 },
    ,
  ];

  return (
    <section className="py-24 bg-[#050505] text-white overflow-hidden">
      {/* 1. Custom Animation for 3D Rotation */}
      <style>
        {`
          @keyframes rotateY3D {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
          .animate-3d-circle {
            animation: rotateY3D 4s infinite linear;
            transform-style: preserve-3d;
          }
          .glass-effect {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-yellow-500 font-black uppercase tracking-[0.5em] text-[10px] mb-3"></h2>
          <h3 className="text-4xl md:text-6xl font-extrabold italic uppercase tracking-tighter">
           <span className="text-yellow-500">MY SKILLS...</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="glass-effect p-6 rounded-2xl flex items-center justify-between group hover:border-yellow-500/20 transition-all duration-500"
            >
              {/* Text & Bar Section */}
              <div className="flex-1 pr-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-yellow-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
                {/* Minimalist Progress Bar */}
                <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)] transition-all duration-[2000ms] ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* 🔄 3D Rotating Percentage Circle (Thik prothom chobi'r moto) */}
              <div className="relative flex-shrink-0 [perspective:1000px]">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* The 3D Circle */}
                <div className="animate-3d-circle w-16 h-16 rounded-full border-2 border-yellow-500/50 flex items-center justify-center bg-[#0a0a0a] shadow-[inset_0_0_10px_rgba(234,179,8,0.2)]">
                  <span className="text-white font-black text-sm tracking-tighter">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
