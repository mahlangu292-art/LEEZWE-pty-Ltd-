import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-32">
      <section className="px-6 md:px-12 mb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Let's <br /><span className="italic text-green-900 underline decoration-green-200 underline-offset-4">Connect.</span></h1>
        <p className="text-stone-500 text-lg font-light leading-relaxed">
           Whether you have a specific request or just want to learn more about our standards, we're here to help. Our response time is typically under 1 hour during business hours.
        </p>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
           {/* Contact Form */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-16 border border-stone-100"
           >
              <h2 className="text-3xl font-serif mb-10">Send a Message</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-stone-50 border-none rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-green-800 transition-all outline-none" />
                    </div>
                    <div>
                       <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full bg-stone-50 border-none rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-green-800 transition-all outline-none" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3">Subject</label>
                    <input type="text" placeholder="Residential Cleaning" className="w-full bg-stone-50 border-none rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-green-800 transition-all outline-none" />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3">Message</label>
                    <textarea rows={5} placeholder="Tell us more about your space..." className="w-full bg-stone-50 border-none rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-green-800 transition-all outline-none resize-none"></textarea>
                 </div>
                 <button className="w-full bg-black text-white py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-xl flex items-center justify-center gap-3">
                    Send Message
                    <Send size={18} />
                 </button>
              </form>
           </motion.div>

           {/* Contact Detail Side */}
           <div className="flex flex-col gap-12 justify-center">
              <div>
                 <h2 className="text-3xl font-serif mb-8 max-w-sm">Reach out to us directly for priority care.</h2>
                 <p className="text-stone-500 font-light mb-10 leading-relaxed max-w-md">
                    Our team is based in Sandton, Johannesburg, serving the greater Gauteng area with pride.
                 </p>
              </div>

              <div className="space-y-8">
                 <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-green-100 group-hover:text-green-800 transition-all">
                       <Phone size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Phone</p>
                       <p className="text-lg font-medium">064 836 6918</p>
                       <p className="text-lg font-medium font-light opacity-70">086 238 8758</p>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-green-100 group-hover:text-green-800 transition-all">
                       <Mail size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Email</p>
                       <p className="text-base font-medium">Mahlangu292@gmail.com</p>
                       <p className="text-base font-medium font-light opacity-70">mngunilethabo61@gmail.com</p>
                    </div>
                 </div>

                 <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-green-100 group-hover:text-green-800 transition-all">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Location</p>
                       <p className="text-lg font-medium">Sandton, Johannesburg</p>
                    </div>
                 </div>
              </div>

              <hr className="border-stone-100" />

              <div className="bg-green-50 p-10 rounded-[2.5rem] border border-green-100">
                 <div className="flex items-center gap-4 mb-6">
                    <MessageCircle className="text-green-600" size={32} />
                    <h3 className="text-xl font-serif text-green-900">Instant WhatsApp Chat</h3>
                 </div>
                 <p className="text-sm text-green-800/70 mb-8 leading-relaxed">
                    Message us for immediate rescheduling, custom requests, or general inquiries.
                 </p>
                 <a 
                   href="https://wa.me/27648366918"
                   className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition-all"
                 >
                    Chat Now
                    <ArrowRight size={16} />
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="mt-32 px-6 md:px-12">
         <div className="max-w-7xl mx-auto h-[400px] bg-stone-200 rounded-[3rem] overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center">
                  <MapPin className="mx-auto text-stone-400 mb-4" size={48} />
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Interactive Map for Sandton & Pretoria Area</p>
               </div>
            </div>
            {/* Real map would be embedded here via iframe */}
         </div>
      </section>
    </div>
  );
};

export default Contact;
