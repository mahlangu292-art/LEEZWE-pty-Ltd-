import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo white className="mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Lizwé Lethu – Our Land. Providing premium cleaning solutions for a better tomorrow. We take care of your space while you focus on creating the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><NavLink to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</NavLink></li>
              <li><NavLink to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Get a Quote</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Connect</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col gap-1 text-gray-400 text-sm">
                <div className="flex items-center gap-3">
                  <Phone size={16} /> 064 836 6918
                </div>
                <div className="flex items-center gap-3 ml-7">
                  086 238 8758
                </div>
              </li>
              <li className="flex flex-col gap-1 text-gray-400 text-sm">
                <div className="flex items-center gap-3">
                  <Mail size={16} /> Mahlangu292@gmail.com
                </div>
                <div className="flex items-center gap-3 ml-7">
                  mngunilethabo61@gmail.com
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} /> Sandton, Johannesburg, South Africa
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8">Operating Hours</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>Mon - Fri: 08:00 - 17:00</li>
              <li>Saturday: 09:00 - 13:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © {currentYear} LEEZWE CLEANING SERVICES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
