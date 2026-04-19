import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: 'YouTube Video SEO', desc: 'I will provide YouTube Video SEO services including keyword research, title optimization, description enhancement, tag selection, audience targeting, engagement strategies, analytics tracking, thumbnail design, and video ranking improvements.', icon: '📺' },
    { title: 'Google Ads  ', desc: 'I provide expert Google Ads services to scale your business. From keyword research and campaign setup to audience targeting and budget management, I ensure continuous optimization for maximum ROI and results.', icon: '🔍' },
    { title: 'Meta Ads', desc: 'I will manage high-converting Facebook Ads campaigns for your business. From audience targeting and ad creation to budget management and optimization, I ensure your ads reach the right people and deliver the best possible results.', icon: '♾️' },
    { title: 'Website SEO', desc: 'I will provide website SEO services: keyword research, campaign setup, audience targeting, ad creation, budget management, performance tracking, and optimization for better results.', icon: '🌐' },
    { title: 'Social Media Mgmt', desc: 'I will manage and grow your social media platforms through creative content, targeted scheduling, and active engagement. From profile optimization to analytics tracking, I ensure your brand stays ahead of the competition and reaches the right audience.', icon: '📱' },
    { title: 'Content Strategy', desc: 'I provide data-driven Content Strategy services to boost your online authority. From target audience research to content calendars and performance tracking, I create a roadmap that ensures your content is purposeful, consistent, and delivers measurable results.', icon: '✍️' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4">SERVICE</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">
            What I Do For <span className="text-gold-gradient italic font-serif">Clients</span>
          </h3>
        </div>
        <div className="text-gray-500 font-medium max-w-sm text-sm border-l border-white/10 pl-6">
         
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="glass p-10 rounded-3xl neon-border group hover:bg-yellow-400/[0.02] transition-all duration-500 flex flex-col items-start">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-yellow-400/10 transition-all duration-500">
              {service.icon}
            </div>
            <h4 className="text-2xl font-black mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h4>
            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              {service.desc}
            </p>
            <div className="mt-auto flex items-center text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer group-hover:gap-3 transition-all duration-300">
              Explore Detail <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
