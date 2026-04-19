import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [itemsToShow, setItemsToShow] = useState(5);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  const categories = ['All', 'YouTube', 'SEO', 'Ads', 'Dashboards'];
  
  const works = [
    { title: 'YouTube Video SEO', category: 'SEO', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiu_yrXFJqe5saiQ1V1tAB5KFixKUaZYNCGpbl5i8MCtvcY091WB2dYZe13KDu8VvDOba72aWflgWG2b2EEm5n-SG6sZdYAGcY2u4kH_lr-o3jjxmVM4B2UWmt8-0JWzJU5njoJSBGKxn6o05K5htOstUA5oz6fgdzkm8NHZ9WBQc6_8Hc7ilNV5ANcpE/s320/Screenshot_7.png' },
    { title: 'Google Ads Campaign', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXtBOxfj_u1cv3QshL7mcN7AZpdzElj8X93mjwE_PSwd5KakoJ-DbUuvu-EJH9BXd0f8yMbVxebfMWqvyJSMY03VhzZilZ0I3iAIZ8gtE8QmW-UvWLMnEFxuoLq-Gv0N-aymqYLD7PE1kIEqtxKl2lZnibaUw_77gHkLb1FpsDf0HVofGP1FplT8ow35E/s320/Screenshot_9.png' },
    { title: 'Channel views and engagement.', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwaMEkFO4cmLAHgL-Hpe-1HqdRs-ItHnuA3oSS_ibnWa-eP5xh32SmES0WotCMkwka6HV81T0ZNSci0xieMHjNU5AAn7z8idRO3Hu4cKyey5ZEIEbn7MqZtdXnyOwVnWtf_4nFFH4A0U0CDTtBBKSUlggwm2Qf-aP0wMlFggN1Hu35waxVOqsJSfM5RFI/s320/Screenshot_2.png' },
    { title: 'YouTube Monetization', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWbrlLm-gsw2HRSvO6D0TTcDN5gfHBwwKjIuQhhDV93owVVWqgr60vtgQUeLsJ2E8umXqPGYW-A4Z1BcezBW7fdVhm278333JevHlWH9tO7BRLpgkC2E0kuMD8ni8FrZ874cbJifsSGOkb0KS_im64e_Vlym_w07B6Wr09ACy2BJbWnKY1iC3pYp1CUFc/s320/Screenshot_18.png' },
    { title: 'Payment Proof', category: 'Dashboards', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9sjLEJadTm9VMaC-vKXg8zpAX-HAckO4Prl_qpD7EEP8cHAHOjtmsj9DQdVwXLglU3qgYif2CyQb8kekxHOj8i03JYHMwCVWHEsnMJPDbpKM_bpXRkCQFSJAI4-id84MyViqCR4BOEdw-R8sZq9GW8G4b3aKoVu83vVUsr5gd0PidY9ph-gMm7EAOTsE/s1600/Screenshot_1.png' },
    { title: 'Extra SEO Project', category: 'SEO', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVkMLY-Azlp-5dOv5GbizL6iRMvthUQalrraBC8cKZaI3Fa_L0kfuA_9-MQtNTi0k63WHhrm5j1ymzBEQR4vjzl6RnF6IFwsgYT4_IAhbTWMRhPX_f4hKbetGsRetd8p9KIqIuiGgCvTGS7IyXVVlXB8OY9hKsmdeadFsFlup_AP_mBSp85lzmVziGzmw/s320/Screenshot_8.png' },
    { title: 'YouTube Monetization', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkKs06zsXbdB3vDF0jndXSkabA0MlqsHna0kZuDUOiQ_EDl85SXduwTpii0rQQ0hIK-2OTRpnzsThNmimBk1rFABcwhkbhhTe0b6UC0jWZF-oifRQ9KAE7efDwMCRxqS2uhhB2eONXq5K8NBWT5M-P0fc7XXzt1nmk-Z00Qb50uAz3hqiIRsgAoTPM1rg/s320/Screenshot_5.png' },
    { title: 'Google Ads Campaign', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMJPrs4zsjnn1NPsfculswbPM9gv3HR7B2cS-809QPNH5Ux2dnmInQ0kE7drVhsKTcHdv6Rgrg3WN3qhaPIcWe57vpMSzhCOmCYLngEtnJHyFtKbDTW4SDDXUdokuMyFaUNJLc69_tNP7-_U8weD5rQU71pHUc1Nmb_q6uxdyFxYgPZQAJNhZLyyy2O9s/s320/Screenshot_12.png' },
    { title: 'YouTube Monetization', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3SayzUaqkJc5BJRb7zGGNMESjpN4pHd2-VYR-Hw1UTvX_kaw0A91xXHei9Zeh3zxB-VcZj2Vd2ApeCy2BCJL2IoDNnpL-B3SQU-RyAfF24tRnZmm4UJFGqepYme2BJN-m3F9hX-GYFPOVS4-453ODIkdTPSM6VC-q-9nTNhUJ_uqjqmTZRMEVrTpnxAQ/s320/Screenshot_26.png' },
    { title: 'Google Ads Campaign', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjn82HBu_VchHmcIBAQWjY-vfrDbDcB_muJxPhP3qiVMXMkyL8vGa9RPQCkU3kj0sMku005ZlfM7ZGHqU4lFsZJNq72kc8P_nWou9dp3Q0aIzZfqg6vRF0xaPvoZvB2DE4-P3rRriwektViwTkaViwln-R6Yv1CkerMWEBMBXZTdgE5P7jzEYsToMdBoLA/s320/Screenshot_20.png' },
    { title: 'Google Ads Campaign', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghrt4Ftl0seHhJ5s4Q-5s0R6KyvgTLPSwsqavw682TpkYCg4wTWOXqd8x0KLF3aQMhtP7NAN_YODW_RYueVVcRPMLxyWJAPv0WlmMs-L5KlFI7Cm1tRKl96P3UMrZxwkYmSE47iXh0JNUJXSPe8c5RTL5ajyZxqun9LseumUWHflU7VTwLKNENpg9nGG4/s320/Screenshot_13.png' },
    { title: 'YouTube Video SEO', category: 'SEO', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAtlfEt-IBB911hZr-EoR3Skiv9Cw4nV8VAF9FujfUvSjBXbAtyakA79pMefUPu_Wvvj4lShcJOZ-pughtn_TVh2zmt-0hjOtw3D4tSB1dsX-RA0n3hFtuI6DfIAcWg6S9K9uvFRr1xEp02CDt_60hdFHYkZw1BFyk-potYVpl4JF7w8VMN2VUFMQnqGw/s320/Screenshot_15.png' },
    { title: 'YouTube Video SEO', category: 'SEO', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh81P2ZqFeHCg4lgxP3tWbJPEtrM0q1NxUMAmeAka4rsXI4y-Sez5qnfGajS5GNyb68DdJqPthdnGPlirS3MmFAV9eL8vif3RGTdmKuh_CmMkmIsRRLAxqSulVHxiy4hi1cp-_1UDvTaybmpA7herAZSSPOrEB6Mc70bcUEw1eDEjSpzOS2ddDpewT55Is/s320/Screenshot_11.png' },
    { title: 'YouTube Video SEO', category: 'SEO', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_e5PqB3stHLXQnAqxhv3Kfr5mBv8mlnS3uDglxmySSue-Sn2Q2n134EbEfIiZxPPLlCA-k5OOLpa2OwI3RoTTXvKBQrG2tUfYu20u2fo9jC2TvQNjJAvs9PrjAGAwgCP-unB0PbsqhQhY2YFy-CFl1jUi_VDxQZ5fVJfsQbhwtiL3_JsP_SiIDq6EDOw/s320/Screenshot_4.png' },
    { title: 'YouTube Monetization', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2R7cLXNs0ELL9dzvrElhG6p48momYCLxHDwJR2y2SqZTl6aShpSQdLiKDHI5nFMcF5yuv4awfjW6B8gbzUYDfQUTdYkBrZl_rOAv2BfrcUnZbe95-RIAhkimTzrWuVM_-nZon4vQQtZpqVgkXPILWCVRDHWVy42pXgtkWdrqrY1_RXmnK4YjZzq5QEnk/s320/Screenshot_22.png' },
    { title: 'YouTube Monetization', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL4oeLYQt1ZT8mQCRcPqpU9lv7vN-PV-7hHSBZbDWcU5Hx6sy1oJ1IQ49i4uFMqObQfJH1kHcAxMhnkhC8zV5r0hk6XwZ5ho81YpNGI7pmVcmIxz3Z2Rk286GQEw_7ECL1ejOtvBe7gAUiKBw8SFxNR33x7ASQHabronY2_0PShWykpWLSa4F6Ri6FroE/s320/Screenshot_21.png' },
    
  ];

  const filteredWorks = filter === 'All' ? works : works.filter(w => w.category === filter);

  return (
    /* py-20 muche pt-0 kora hoyeche jate uporer gap chole jay */
    <div className="max-w-7xl mx-auto px-6 pt-0 pb-20 bg-[#050505] min-h-screen text-white font-sans">
      
      {/* mb-16 ke mb-8 kora hoyeche jate Title er upore-niche faka kome */}
      <div className="text-center mb-10 pt-4">
        <h2 className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">My Recent Works</h3>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setItemsToShow(5); }}
            className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'bg-[#111] text-gray-400 border border-white/5 hover:border-yellow-500'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Smart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {filteredWorks.slice(0, itemsToShow).map((work, idx) => (
          <div 
            key={idx} 
            className={`group flex flex-col bg-[#0d0d0d] rounded-[2rem] p-4 border border-white/10 hover:border-yellow-500/40 transition-all duration-500 ${idx < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}
          >
            {/* Image Box */}
            <div 
              onClick={() => setSelectedImg(work.img)}
              className="relative h-[280px] w-full rounded-2xl overflow-hidden bg-black cursor-pointer"
            >
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                 <div className="bg-yellow-500 text-black p-3 rounded-full">
                    <span className="text-xl font-bold">🔍</span>
                 </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 px-1">
              <span className="text-[10px] text-yellow-500 font-black uppercase tracking-widest">{work.category}</span>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-yellow-500 transition-colors line-clamp-1">{work.title}</h4>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-60">
                 <button className="text-[10px] font-bold uppercase tracking-widest">View Full Case</button>
                 <span className="text-yellow-500">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {itemsToShow < filteredWorks.length && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setItemsToShow(works.length)}
            className="px-12 py-4 bg-yellow-500 rounded-2xl font-black text-[11px] uppercase tracking-widest text-black hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20"
          >
            Explore More Results ↗
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[999] bg-black/98 flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setSelectedImg(null)}>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img src={selectedImg} alt="Preview" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
