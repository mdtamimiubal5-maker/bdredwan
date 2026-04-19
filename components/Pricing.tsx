import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    { 
      name: 'Standard SEO', 
      price: '200', 
      features: ['Five Video SEO', 'Keyword Optimized Titles', 'Description Optimization', 'High Ranking Tag Research', 'Basic Analytics Report'], 
      popular: false 
    },
    { 
      name: 'Monthly Growth', 
      price: '500', 
      features: ['Monthly YouTube Management', 'Unlimited Video SEO', 'Advanced Audience Targeting', 'Competitor Analysis', 'Weekly Growth Sessions', '24/7 Priority Support'], 
      popular: true 
    },
    { 
      name: 'Pro Web SEO', 
      price: '550', 
      features: ['Full Website SEO Audit', 'On-Page & Technical SEO', '30 Targeted Keywords', 'High-DA Backlinks', 'GSC & Analytics Setup', 'Local SEO Implementation'], 
      popular: false 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4">Investment</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold italic font-serif">
          Best <span className="text-gold-gradient">Pricing Plan</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        {plans.map((plan, idx) => (
          <div key={idx} className={`relative glass rounded-[2.5rem] flex flex-col border-2 transition-all duration-700 hover:translate-y-[-16px] ${plan.popular ? 'border-yellow-400 scale-105 z-10 shadow-[0_30px_60px_rgba(251,191,36,0.1)]' : 'border-white/5 hover:border-white/20'}`}>
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 gold-gradient text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg transition-transform hover:scale-110">
                Most Popular Choice
              </div>
            )}
            
            <div className={`p-10 rounded-t-[2.5rem] text-center transition-colors duration-500 ${plan.popular ? 'bg-yellow-400/10' : 'bg-white/[0.02]'}`}>
              <h4 className={`text-sm font-black uppercase tracking-[0.3em] mb-4 ${plan.popular ? 'text-yellow-400' : 'text-gray-400'}`}>{plan.name}</h4>
              <div className="flex items-start justify-center transition-transform duration-500 hover:scale-110">
                <span className="text-2xl font-bold text-gray-500 mt-2">$</span>
                <span className="text-7xl font-black text-white tracking-tighter">{plan.price}</span>
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Per Month / Project</p>
            </div>

            <div className="p-10 flex-grow">
              <div className="space-y-5">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center text-sm font-medium text-gray-400 group cursor-default">
                    <span className="w-5 h-5 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-[10px] mr-4 shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                    <span className="transition-colors group-hover:text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 pt-0">
              <a 
                href="#contact"
                className={`w-full py-5 text-center rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all duration-500 block active:scale-95 ${plan.popular ? 'gold-gradient text-black hover:shadow-xl shadow-yellow-500/20 hover:scale-[1.02]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/30 hover:scale-[1.02]'}`}
              >
                Get Started Now <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;