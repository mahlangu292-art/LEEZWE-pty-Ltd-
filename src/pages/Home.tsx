import React from 'react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Sparkles, Clock, MessageCircle } from 'lucide-react';
import { QuoteCalculator } from '../components/QuoteCalculator';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-6 md:px-12 bg-stone-50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-100 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-sm">
              Premium Interior Care
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 tracking-tight text-stone-900">
              A Cleaner Space, <br />
              <span className="italic text-green-900">A Better Future.</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed font-light">
              LEEZWE brings elite, eco-conscious cleaning solutions to South Africa's most discerning homes and businesses. We represent the art of cleanliness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink 
                to="/pricing" 
                className="bg-green-700 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-green-800 transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                Instant Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink 
                to="/services" 
                className="bg-white border border-stone-200 text-black px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-stone-50 transition-all flex items-center justify-center shadow-lg"
              >
                Our Services
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
                alt="Luxury Clean Home" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-stone-100"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="flex text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <span className="text-sm font-bold uppercase tracking-tighter">5.0 Rating</span>
              </div>
              <p className="text-xl font-serif">"Absolutely Flawless"</p>
              <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">— The Sandton Collective</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-green-700 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Quick Estimate</span>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">Invest in your <span className="italic">peace of mind.</span></h2>
            <p className="text-stone-500 font-light leading-relaxed">
              Use our instant calculator to get a bespoke estimate for your space.
            </p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 bg-white border-y border-stone-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all">
          <span className="text-2xl font-bold uppercase tracking-[0.4em]">RESIDENTIAL</span>
          <span className="text-2xl font-bold uppercase tracking-[0.4em]">COMMERCIAL</span>
          <span className="text-2xl font-bold uppercase tracking-[0.4em]">LOGISTICS</span>
          <span className="text-2xl font-bold uppercase tracking-[0.4em]">INTERIORS</span>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-green-700 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight">Meticulous attention to every surface.</h2>
            </div>
            <NavLink to="/services" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-2 hover:opacity-70 transition-opacity">
              View All Services
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Care",
                desc: "Subscription-based cleaning for the modern home. Regular, reliable, and thorough.",
                img: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=2070",
                icon: <Sparkles className="text-green-800" size={24} />
              },
              {
                title: "Deep Cleaning",
                desc: "Revitalize your living space with our intensive deep-cleansing protocol.",
                img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2070",
                icon: <ShieldCheck className="text-green-800" size={24} />
              },
              {
                title: "Commercial Elite",
                desc: "High-standard maintenance for executive office spaces and retail showrooms.",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070",
                icon: <CheckCircle2 className="text-green-800" size={24} />
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl w-[calc(100%-4rem)] shadow-xl">
                     <div className="mb-2">{service.icon}</div>
                     <h3 className="text-xl font-bold uppercase tracking-tighter mb-1">{service.title}</h3>
                     <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-stone-900 text-stone-200 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5"/></svg>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 tracking-tight">The <span className="italic text-green-400">LEEZWE</span> Standard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { title: "Eco-Conscious", desc: "We use strictly biodegradable, non-toxic products safe for your family and our land.", icon: <Sparkles size={20} /> },
                { title: "Vetted Staff", desc: "Every professional undergoes rigorous background checks and elite training.", icon: <ShieldCheck size={20} /> },
                { title: "Real-time Support", desc: "WhatsApp integrated support for instant rescheduling and requests.", icon: <Clock size={20} /> },
                { title: "Insurance Cover", desc: "Full liability coverage for your peace of mind and asset protection.", icon: <CheckCircle2 size={20} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-400 border border-white/10">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-widest text-white">{item.title}</h4>
                  <p className="text-sm text-stone-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=1000" className="w-full aspect-square object-cover rounded-3xl" alt="Clean Detail" />
            <div className="flex flex-col gap-4">
               <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000" className="w-full flex-grow object-cover rounded-3xl" alt="Clean Kitchen" />
               <div className="bg-green-800 p-8 rounded-3xl text-center">
                  <p className="text-4xl font-bold text-white mb-1">98%</p>
                  <p className="text-[10px] uppercase tracking-widest text-green-200">Consistency Rate</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-10 tracking-tight leading-[1.1]">Join us in creating a <br /> <span className="italic text-green-900 underline decoration-stone-200 underline-offset-8 transition-all hover:decoration-green-300">cleaner future.</span></h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NavLink 
                to="/pricing" 
                className="bg-black text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all shadow-2xl hover:scale-105"
              >
                Request an Estimate
              </NavLink>
              <a 
                href="https://wa.me/27648366918"
                className="bg-green-600 text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-green-700 transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105"
              >
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
