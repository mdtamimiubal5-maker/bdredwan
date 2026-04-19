import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '4+' },
    { label: 'Happy Clients', value: '1000+' },
    { label: 'Completed Projects', value: '1500+' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
      <div className="glass rounded-3xl p-8 md:p-14 flex flex-col md:flex-row justify-around items-center gap-12 md:gap-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="text-center group flex-1">
              <div className="text-5xl md:text-6xl font-black text-white group-hover:text-yellow-400 transition-colors tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gray-500 mt-3 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stats;
