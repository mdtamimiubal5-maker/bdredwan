import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message sent! Sujon will contact you shortly.' });
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: null, message: '' }), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4 italic">
          Get <span className="text-gold-gradient">In Touch</span>
        </h2>
        <p className="text-gray-400 font-light max-w-lg mx-auto"></p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {[
          { icon: '📍', title: 'Location', value: 'Rangpur, Bangladesh' },
          { icon: '📱', title: 'WhatsApp', value: '+8801581762050' },
          { icon: '📧', title: 'Email', value: 'mdredwanhassan2025@gmail.com' }
        ].map((item, i) => (
          <div key={i} className="glass p-8 rounded-3xl text-center neon-border group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
            <h4 className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{item.title}</h4>
            <p className="text-white font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto glass p-8 md:p-14 rounded-[3rem] neon-border">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <input 
                type="text" 
                name="firstName"
                placeholder="First name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white placeholder:text-gray-600 font-medium"
              />
            </div>
            <div className="space-y-2">
              <input 
                type="text" 
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white placeholder:text-gray-600 font-medium"
              />
            </div>
          </div>

          <input 
            type="email" 
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white placeholder:text-gray-600 font-medium"
          />

          <textarea 
            rows={4}
            name="message"
            placeholder="Write your message here..."
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/5 border-b border-white/10 p-4 outline-none focus:border-yellow-500 transition-colors text-white placeholder:text-gray-600 font-medium resize-none"
          ></textarea>

          {status.message && (
            <div className={`p-4 rounded-2xl text-xs font-black uppercase tracking-widest text-center ${status.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
              {status.message}
            </div>
          )}

          <div className="text-center">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black px-16 py-5 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-yellow-400 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 shadow-2xl"
            >
              {isSubmitting ? 'Sending...' : 'Submit Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
