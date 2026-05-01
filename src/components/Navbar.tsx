import React from 'react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/">
          <Logo className="scale-90 origin-left" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm uppercase tracking-widest font-medium transition-colors hover:text-green-700",
                  isActive ? "text-green-800" : "text-black/70"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://wa.me/27648366918"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-green-900 transition-all"
          >
            <MessageCircle size={16} />
            Chat
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white mt-4 rounded-2xl shadow-xl border border-black/5"
      >
        <div className="flex flex-col gap-4 p-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "text-lg uppercase tracking-wider font-bold",
                  isActive ? "text-green-800" : "text-black/60"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <hr className="border-black/5" />
          <a
            href="https://wa.me/27648366918"
            className="flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </nav>
  );
};
