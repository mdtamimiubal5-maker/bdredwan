import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  desc?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, subtitle, desc }) => (
  <div className="relative pl-10 border-l-2 border-yellow-500/20 pb-12 last:pb-0 group">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
    <div className="glass p-8 rounded-2xl hover:translate-x-3 transition-all duration-500 neon-border bg-gradient-to-br from-white/[0.03] to-transparent">
      <span className="inline-block px-3 py-1 rounded-md bg-yellow-400/10 text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-4">
        {year}
      </span>
      <h4 className="text-2xl font-black text-white mb-1">{title}</h4>
      <p className="text-yellow-500/80 font-bold text-sm mb-4">{subtitle}</p>
      {desc && <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>}
    </div>
  </div>
);

const Resume: React.FC = () => {
  const education = [
    { 
      year: '2017- 2019', 
      title: 'Study of Collage', 
      institution: 'Kurigram Government Collage',
      desc: 'I completed my Higher Secondary Certificate (HSC) in the Science stream from Kurigram Government College. My academic focus on Physics, Chemistry, and Biology not only provided a strong scientific foundation but also significantly sharpened my analytical thinking and problem-solving abilities.'
    },
    { 
      year: '2016 - 2020', 
      title: 'Bachelor of Business Administration', 
      institution: 'Rangpur Collectorate College',
      desc: 'I earned my BBA from Rangpur Collectorate College, where I specialized in the core principles of Digital Marketing, E-commerce, and SEO. This academic background provided me with a solid foundation in modern marketing strategies, enabling me to drive business growth through data-driven digital platforms.'
    },
  ];

  const experience = [
    { 
      year: '2022 - Now', 
      title: 'Professional Digital Marketer', 
      company: 'CEO, Radwan IT Expert.',
      desc: 'As the CEO of Radwan-IT-Expert for the past 4 years, I have been driving business growth through expert YouTube SEO, Video Promotion, Google/Facebook Ads, and Website SEO. I specialize in delivering high-impact digital strategies that maximize brand visibility and ROI.'
    },
    { 
      year: '2021 - 2022', 
      title: 'YouTube Video SEO Trainer', 
      company: 'TTC,Rangpure.',
      desc: 'From 2021 to 2022, I served as a skilled "YouTube SEO" Trainer under the Bangladesh governments Learning and Earning Development Project TTC. Rangpure, helping freelancers improve their digital marketing skills through training.'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4"></h2>
        <h3 className="text-4xl md:text-5xl font-extrabold underline decoration-yellow-500 decoration-2 underline-offset-[16px]">
          My Resume
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h4 className="text-2xl font-black mb-12 flex items-center gap-4">
            <span className="w-12 h-1 gold-gradient rounded-full"></span>
            Education
          </h4>
          <div className="space-y-0">
            {education.map((item, idx) => (
              <TimelineItem key={idx} year={item.year} title={item.title} subtitle={item.institution} desc={item.desc} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-black mb-12 flex items-center gap-4">
            <span className="w-12 h-1 gold-gradient rounded-full"></span>
            Experience
          </h4>
          <div className="space-y-0">
            {experience.map((item, idx) => (
              <TimelineItem key={idx} year={item.year} title={item.title} subtitle={item.company} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
