import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { QuoteCalculator } from '../components/QuoteCalculator';

const Pricing = () => {
  return (
    <div className="pt-32 pb-32 bg-stone-50">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-sm">
            Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight italic text-green-900 leading-tight">
            Tailored Estimates. <br />
            No Hidden Fees.
          </h1>
          <p className="text-stone-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Configure your space and requirements below for an instant investment estimate. 
            For elite commercial contracts, please use our WhatsApp concierge.
          </p>
        </motion.div>
      </section>

      {/* Main Calculator */}
      <section className="px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <QuoteCalculator />
        </motion.div>
      </section>

      {/* Supportive Info */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-stone-200">
          <div className="space-y-4">
             <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-green-700">
                <ShieldCheck size={24} />
             </div>
             <h3 className="text-lg font-bold uppercase tracking-widest">Guaranteed Standards</h3>
             <p className="text-sm text-stone-500 font-light leading-relaxed">
               Every quote includes our premium non-toxic cleaning agents and vetted professional staff. No "extra" charges for standard supplies.
             </p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-green-700">
                <Clock size={24} />
             </div>
             <h3 className="text-lg font-bold uppercase tracking-widest">Rapid Confirmation</h3>
             <p className="text-sm text-stone-500 font-light leading-relaxed">
               Once you send your quote via WhatsApp, our concierge confirms availability within 60 minutes during standard business hours.
             </p>
          </div>
          <div className="space-y-4">
             <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-green-700">
                <CheckCircle2 size={24} />
             </div>
             <h3 className="text-lg font-bold uppercase tracking-widest">Flexible Scheduling</h3>
             <p className="text-sm text-stone-500 font-light leading-relaxed">
               Need to change? No problem. Reschedule via WhatsApp up to 24 hours before your service at no additional cost.
             </p>
          </div>
        </div>

        {/* Corporate CTA */}
        <div className="mt-32 p-12 md:p-20 bg-stone-900 rounded-[3rem] text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.3),transparent)]" />
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tight">Need an Institutional <span className="italic text-green-400">Master Contract?</span></h2>
              <p className="text-stone-400 mb-10 font-light leading-relaxed">
                For corporate headquarters, logistics hubs, or retail portfolios, we provide volume-based institutional pricing and dedicated account managers.
              </p>
              <a 
                href="https://wa.me/27648366918"
                className="inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-100 transition-all shadow-2xl"
              >
                <MessageCircle size={18} />
                Corporate Concierge
              </a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
