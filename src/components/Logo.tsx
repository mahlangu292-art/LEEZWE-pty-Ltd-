import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  withText?: boolean;
  white?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, withText = true, white = false }) => {
  const color = white ? 'white' : 'black';
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Circular Frame */}
          <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="1.5" />
          
          {/* Leafless Oak - Scatter Illusion Design */}
          <g transform="translate(50, 80)">
            {/* Trunk - Fragmented Base */}
            <path d="M-4 0 L-2.5 -18 M-1 -2 L-0.5 -15 M1 -1 L0.8 -10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M2.5 -18 L4 0 M1.5 -5 L2.2 -12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Scatter Branches - Primary */}
            <path d="M-2 -18 L-18 -38" stroke={color} strokeWidth="1.5" strokeDasharray="8 2" strokeLinecap="round" />
            <path d="M2 -18 L18 -38" stroke={color} strokeWidth="1.5" strokeDasharray="8 2" strokeLinecap="round" />
            <path d="M0 -20 L0 -50" stroke={color} strokeWidth="1.5" strokeDasharray="10 3" strokeLinecap="round" />
            
            {/* Artistic Scatter Strokes */}
            <path d="M-10 -28 L-22 -44" stroke={color} strokeWidth="0.8" strokeDasharray="4 2" strokeLinecap="round" />
            <path d="M-15 -35 L-25 -38" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" strokeLinecap="round" />
            <path d="M-6 -36 L-10 -55" stroke={color} strokeWidth="0.8" strokeDasharray="5 3" strokeLinecap="round" />
            
            <path d="M10 -28 L22 -44" stroke={color} strokeWidth="0.8" strokeDasharray="4 2" strokeLinecap="round" />
            <path d="M15 -35 L25 -38" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" strokeLinecap="round" />
            <path d="M6 -36 L10 -55" stroke={color} strokeWidth="0.8" strokeDasharray="5 3" strokeLinecap="round" />
            
            {/* Floating 'Particles' to suggest scattered energy/illusion */}
            <circle cx="-15" cy="-42" r="0.5" fill={color} />
            <circle cx="15" cy="-42" r="0.5" fill={color} />
            <circle cx="-8" cy="-52" r="0.4" fill={color} />
            <circle cx="8" cy="-52" r="0.4" fill={color} />
            <circle cx="0" cy="-58" r="0.6" fill={color} />
            <circle cx="-20" cy="-30" r="0.3" fill={color} />
            <circle cx="20" cy="-30" r="0.3" fill={color} />
            
            {/* Ground Base */}
            <path d="M-12 3 L12 3" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
          </g>
        </svg>
      </div>
      {withText && (
        <div className="flex flex-col leading-none">
          <span className={cn("text-xl md:text-2xl font-bold tracking-widest uppercase", white ? "text-white" : "text-black")}>
            LEEZWE
          </span>
          <span className={cn("text-[8px] md:text-[10px] tracking-[0.3em] uppercase opacity-70", white ? "text-white" : "text-black")}>
            Lizwé Lethu – Our Land
          </span>
        </div>
      )}
    </div>
  );
};
