import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Home as HomeIcon, Building2, Package, Brush, ShieldCheck, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'res',
      title: "Residential Cleaning",
      subtitle: "For the Discerning Home",
      desc: "Our flagship service. Tailored to your lifestyle, we provide meticulous maintenance for luxury apartments, suburban homes, and estates. From sanitizing surfaces to perfecting textures, we ensure your sanctuary remains pristine.",
      features: ["Linen changing & bed making", "Detailed dusting (high & low)", "Sanitized wet area cleaning", "Floor care protocol", "Appliance exterior polish"],
      icon: <HomeIcon className="w-10 h-10 mb-6 text-green-800" />,
      image: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 'deep',
      title: "Deep Cleaning",
      subtitle: "The Restoration Protocol",
      desc: "An intensive service designed for deep sanitation. We reach the places regular cleaning misses—behind appliances, inside cabinets, and detailed trim work. Recommended every 3 to 6 months to maintain peak interior health.",
      features: ["Deep grout & tile scrubbing", "Wall & ceiling dusting", "Upholstery vacuuming", "Inside window tracks", "Kitchen cabinet sterilization"],
      icon: <Sparkles className="w-10 h-10 mb-6 text-green-800" />,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 'move',
      title: "Move-In/Move-Out",
      subtitle: "A Fresh Start",
      desc: "Ensure a flawless transition. For buyers, sellers, or renters, we prepare the space to look brand new. We eliminate all traces of previous occupants, giving you a truly clean slate for your next chapter.",
      features: ["Inside all cupboards & drawers", "Light fixture & fan cleaning", "Baseboard & trim detailing", "Oven & fridge interior cleaning", "Disinfection of all tactile surfaces"],
      icon: <Package className="w-10 h-10 mb-6 text-green-800" />,
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 'comm',
      title: "Commercial Cleaning",
      subtitle: "Brand Integrity Maintenance",
      desc: "Your workspace is part of your brand. We provide executive-level cleaning for boardrooms, workstations, and high-traffic commercial areas in Sandton and beyond. Discrete, efficient, and professional.",
      features: ["Executive office detailing", "Boardroom presentation ready", "Common area sanitization", "Carpet & hard floor maintenance", "Customizable after-hours scheduling"],
      icon: <Building2 className="w-10 h-10 mb-6 text-green-800" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  return (
    <div className="pt-32 bg-stone-50">
      <section className="px-6 md:px-12 mb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Professional <br /><span className="italic text-green-900 underline decoration-green-200 underline-offset-4">Clarity.</span></h1>
        <p className="text-stone-500 text-lg font-light leading-relaxed">
          At LEEZWE, we categorize our services to match the intensity and specific requirements of your space. Each service follows a strict quality checklist.
        </p>
      </section>

      {/* Main Services List */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-green-900/5 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <span className="text-green-800 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Service {idx + 1}</span>
                <h2 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">{service.title}</h2>
                <h4 className="text-lg font-light italic text-stone-500 mb-8">{service.subtitle}</h4>
                <p className="text-stone-600 leading-relaxed mb-10 font-light text-lg">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                       <Check size={16} className="text-green-600 mt-1 flex-shrink-0" />
                       <span className="text-sm text-stone-700 tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                <NavLink 
                  to="/pricing"
                  className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-xl"
                >
                  Request Quote for this Service
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Bar */}
       <section className="py-32 bg-stone-900 text-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Built into every service.</h2>
          <p className="text-stone-400 max-w-xl mx-auto font-light">We don't consider these add-ons. They are the LEEZWE standard.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Eco-Products", desc: "Non-toxic, bio-degradable", icon: <Brush /> },
            { title: "Insured Care", desc: "Full liability protection", icon: <ShieldCheck /> },
            { title: "Elite Staff", desc: "Highly trained professionals", icon: <Check /> },
            { title: "Satisfaction", desc: "100% guarantee", icon: <Sparkles /> }
          ].map((item, idx) => (
            <div key={idx} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="inline-block p-4 bg-green-500/10 text-green-400 rounded-2xl mb-6">{item.icon}</div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">{item.title}</h3>
              <p className="text-xs text-stone-500">{item.desc}</p>
            </div>
          ))}
        </div>
       </section>

       {/* Next Step */}
       <section className="py-40 px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-10 tracking-tight">Ready for a custom plan?</h2>
          <NavLink 
            to="/pricing"
            className="inline-block bg-black text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all shadow-2xl"
          >
            Go to Pricing & Booking
          </NavLink>
       </section>
    </div>
  );
};

export default Services;
