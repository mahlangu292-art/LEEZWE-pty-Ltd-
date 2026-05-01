import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Heart, Users, Sparkles } from 'lucide-react';
import { Logo } from '../components/Logo';

const About = () => {
  return (
    <div className="pt-32">
      {/* Narrative Section */}
      <section className="px-6 md:px-12 py-20 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <span className="text-green-800 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-tight tracking-tight">Creating the future, <br /> <span className="italic text-green-900">one space at a time.</span></h1>
            <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
              <p>
                Founded in Johannesburg, LEEZWE was born from a simple realization: the environments we inhabit profoundly influence our potential. “Lizwé Lethu” means “Our Land,” reflecting our deep commitment to the South African soil and its people.
              </p>
              <p>
                We believe that a clean space is a catalyst for clarity, creativity, and progress. Our mission is to provide more than just a cleaning service—we provide the peace of mind necessary for our clients to focus on what matters most.
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
               <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000" alt="Team Work" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-100 rounded-[2rem] -z-10 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">Principles that guide our care.</h2>
             <div className="w-20 h-1 bg-green-800 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Integrity", desc: "Absolute transparency in our processes, pricing, and people.", icon: <ShieldCheck size={32} /> },
              { title: "Stewardship", desc: "Caring for our land through water-conscious and eco-friendly methods.", icon: <Leaf size={32} /> },
              { title: "Excellence", desc: "A relentless pursuit of perfection in every grain of dust we remove.", icon: <Sparkles size={32} /> },
              { title: "Community", desc: "Empowering our staff through dignified work and elite training.", icon: <Heart size={32} /> }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-[2rem] bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-green-800 mb-6">{value.icon}</div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{value.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity / Logo Significance */}
      <section className="py-32 bg-stone-950 text-white px-6 overflow-hidden relative">
        <div className="absolute -left-20 bottom-0 w-80 h-80 opacity-5">
           <Logo white className="w-full h-full" withText={false} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
           <Logo white className="justify-center mb-10" />
           <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-relaxed italic">
             "Our logo represents the deep roots of our heritage and the growing branches of our future. We believe that by caring for our immediate surroundings today, we create a thriving landscape for tomorrow."
           </h2>
           <p className="text-stone-400 uppercase tracking-[0.4em] text-xs">— The LEEZWE Ethos</p>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-40 px-6 text-center">
         <div className="max-w-3xl mx-auto flex flex-col items-center">
            <Users className="w-16 h-16 text-green-800 mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight">Operated by the best in the industry.</h2>
            <p className="text-stone-600 mb-10 text-lg font-light leading-relaxed">
              Our team consists of specialists who are as passionate about your space as you are. Join 500+ households in Sandton, Rosebank, and Pretoria who trust the LEEZWE standard.
            </p>
         </div>
      </section>
    </div>
  );
};

export default About;
