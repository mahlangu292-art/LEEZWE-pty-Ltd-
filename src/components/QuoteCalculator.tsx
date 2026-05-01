import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Home as HomeIcon, 
  Briefcase, 
  Key, 
  Bed, 
  Sparkles, 
  Waves, 
  ShieldCheck, 
  Zap, 
  CookingPot, 
  Refrigerator, 
  Sun, 
  Armchair, 
  Shirt,
  MapPin,
  MessageCircle,
  Calculator,
  Check
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Option {
  id: string;
  label: string;
  value: number;
  icon?: React.ReactNode;
}

const PROPERTY_TYPES: Option[] = [
  { id: 'apartment', label: 'Apartment', value: 200, icon: <Building2 size={18} /> },
  { id: 'house', label: 'House', value: 250, icon: <HomeIcon size={18} /> },
  { id: 'office', label: 'Office', value: 300, icon: <Briefcase size={18} /> },
  { id: 'airbnb', label: 'Airbnb', value: 400, icon: <Key size={18} /> },
];

const BEDROOM_COUNTS: Option[] = [
  { id: 'studio', label: 'Studio', value: 0 },
  { id: '1bed', label: '1 Bedroom', value: 50 },
  { id: '2bed', label: '2 Bedrooms', value: 100 },
  { id: '3bed', label: '3 Bedrooms', value: 150 },
  { id: '4bed', label: '4+ Bedrooms', value: 200 },
];

const CLEANING_TYPES: Option[] = [
  { id: 'basic', label: 'Basic Clean', value: 200, icon: <Sparkles size={18} /> },
  { id: 'standard', label: 'Standard Clean', value: 350, icon: <Waves size={18} /> },
  { id: 'deep', label: 'Deep Clean', value: 600, icon: <ShieldCheck size={18} /> },
  { id: 'commercial', label: 'Commercial Clean', value: 500, icon: <Zap size={18} /> },
];

const ADDONS: Option[] = [
  { id: 'oven', label: 'Oven Cleaning', value: 80, icon: <CookingPot size={18} /> },
  { id: 'fridge', label: 'Fridge Cleaning', value: 70, icon: <Refrigerator size={18} /> },
  { id: 'window', label: 'Full Window Cleaning', value: 120, icon: <Sun size={18} /> },
  { id: 'sofa', label: 'Sofa Cleaning', value: 150, icon: <Armchair size={18} /> },
  { id: 'laundry', label: 'Laundry Service', value: 100, icon: <Shirt size={18} /> },
];

export const QuoteCalculator = () => {
  const [property, setProperty] = useState(PROPERTY_TYPES[0]);
  const [bedrooms, setBedrooms] = useState(BEDROOM_COUNTS[0]);
  const [cleaning, setCleaning] = useState(CLEANING_TYPES[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [location, setLocation] = useState('');

  const total = useMemo(() => {
    const addonsTotal = ADDONS
      .filter(a => selectedAddons.includes(a.id))
      .reduce((acc, curr) => acc + curr.value, 0);
    
    return property.value + bedrooms.value + cleaning.value + addonsTotal;
  }, [property, bedrooms, cleaning, selectedAddons]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleWhatsApp = () => {
    const message = `Hi LEEZWE, I would like a cleaning quote:
Property: ${property.label}
Bedrooms: ${bedrooms.label}
Type: ${cleaning.label}
Add-ons: ${ADDONS.filter(a => selectedAddons.includes(a.id)).map(a => a.label).join(', ') || 'None'}
Estimated Price: R${total} - R${total + 150}
Location: ${location || 'Not specified'}

Please confirm availability.`;
    
    const url = `https://wa.me/27648366918?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-stone-100 grid grid-cols-1 md:grid-cols-12">
      {/* Configuration Side */}
      <div className="md:col-span-7 p-8 md:p-12 lg:p-16 space-y-10">
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 block">
            01. Property Details
          </label>
          <div className="grid grid-cols-2 gap-3">
            {PROPERTY_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setProperty(type)}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all flex items-center gap-3 text-sm font-medium",
                  property.id === type.id 
                    ? "border-green-600 bg-green-50 text-green-900 shadow-sm" 
                    : "border-stone-100 hover:border-stone-300 text-stone-600 hover:bg-stone-50"
                )}
              >
                <span className={cn(property.id === type.id ? "text-green-600" : "text-stone-400")}>
                  {type.icon}
                </span>
                {type.label}
              </button>
            ))}
          </div>
          
          <select 
            className="w-full mt-4 p-4 rounded-2xl border-2 border-stone-100 bg-stone-50 text-sm font-medium focus:border-green-600 outline-none transition-colors"
            value={bedrooms.id}
            onChange={(e) => setBedrooms(BEDROOM_COUNTS.find(b => b.id === e.target.value) || BEDROOM_COUNTS[0])}
          >
            {BEDROOM_COUNTS.map(count => (
              <option key={count.id} value={count.id}>{count.label}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 block">
            02. Cleaning Intensity
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CLEANING_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setCleaning(type)}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all flex flex-col gap-2 text-left",
                  cleaning.id === type.id 
                    ? "border-green-600 bg-green-50 text-green-900" 
                    : "border-stone-100 hover:border-stone-300 text-stone-600 hover:bg-stone-50"
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={cn("p-2 rounded-lg bg-white shadow-sm", cleaning.id === type.id ? "text-green-600" : "text-stone-400")}>
                    {type.icon}
                  </span>
                  {cleaning.id === type.id && <Check size={16} className="text-green-600" />}
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-tighter">{type.label}</div>
                  <div className="text-[10px] opacity-60">From R{type.value}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 block">
            03. Premium Add-ons
          </label>
          <div className="flex flex-wrap gap-2">
            {ADDONS.map((addon) => (
              <button
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={cn(
                  "px-4 py-2.5 rounded-full border-2 text-xs font-bold transition-all flex items-center gap-2",
                  selectedAddons.includes(addon.id)
                    ? "border-green-600 bg-green-600 text-white shadow-lg shadow-green-200 scale-105"
                    : "border-stone-100 hover:border-stone-300 text-stone-600 hover:bg-stone-50"
                )}
              >
                {addon.icon}
                {addon.label}
                <span className="opacity-60 text-[8px]">+R{addon.value}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-stone-100">
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input 
              type="text" 
              placeholder="Enter your suburb or city"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-stone-100 focus:border-green-600 outline-none transition-all placeholder:text-stone-300 text-sm font-medium"
            />
          </div>
        </div>
      </div>

      {/* Result Side */}
      <div className="md:col-span-5 bg-stone-900 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
           <Calculator className="absolute -top-20 -right-20 w-96 h-96 text-white stroke-[0.5]" />
        </div>

        <div className="relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-green-400 mb-8 block">
            Estimated Investment
          </span>
          
          <div className="space-y-2">
            <motion.div 
              key={total}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl font-serif text-white tracking-tighter"
            >
              R{total}
            </motion.div>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Base estimate for {cleaning.label.toLowerCase()} in a {property.label.toLowerCase()}. 
              <br />Range: <span className="text-white font-medium">R{total} — R{total + 150}</span>
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <div className="flex items-center gap-3 text-stone-400 text-xs">
              <Check size={14} className="text-green-500" />
              <span>Eco-friendly products included</span>
            </div>
            <div className="flex items-center gap-3 text-stone-400 text-xs">
              <Check size={14} className="text-green-500" />
              <span>Elite vetted professionals</span>
            </div>
            <div className="flex items-center gap-3 text-stone-400 text-xs">
              <Check size={14} className="text-green-500" />
              <span>100% Satisfaction guarantee</span>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-4 relative z-10">
          <button 
            onClick={handleWhatsApp}
            disabled={!location}
            className={cn(
              "w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 transition-all",
              location 
                ? "bg-green-500 text-white hover:bg-green-400 shadow-xl shadow-green-900/20 active:scale-[0.98]" 
                : "bg-stone-800 text-stone-500 cursor-not-allowed border border-stone-700"
            )}
          >
            <MessageCircle size={18} />
            {location ? "Secure via WhatsApp" : "Enter Location First"}
          </button>
          <p className="text-[9px] text-center text-stone-500 font-medium uppercase tracking-widest">
            *Final quote provided after confirmation call
          </p>
        </div>
      </div>
    </div>
  );
};
