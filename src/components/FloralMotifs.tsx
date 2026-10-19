// Ornate Indian Royal Mandala & Floral SVG Dividers in Champagne Gold
export const RoyalMandalaDivider = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
    <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="text-[#C5A059]">
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" />
      {/* 8-Petal Royal Lotus */}
      <path d="M50 20 C54 34, 66 46, 80 50 C66 54, 54 66, 50 80 C46 66, 34 54, 20 50 C34 46, 46 54, 50 20 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
  </div>
);

// Ganesh Royal Blessing Icon
export const GaneshaBlessing = ({ className = '', size = 56 }: { className?: string; size?: number }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="text-[#C5A059]">
      {/* Auspicious stylized Ganesha outline */}
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.8" />
      
      {/* Crown / Mukut */}
      <path d="M42 24 L50 14 L58 24 Z" fill="currentColor" />
      <circle cx="50" cy="19" r="1.5" fill="#FAF7F2" />
      
      {/* Head & Ears */}
      <path d="M34 32 C26 36, 26 50, 35 52 C38 46, 42 40, 50 40 C58 40, 62 46, 65 52 C74 50, 74 36, 66 32 C60 26, 40 26, 34 32 Z" 
            stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
      
      {/* Trunk (Vakratunda) */}
      <path d="M50 42 C51 52, 53 62, 58 66 C63 69, 68 67, 68 62 C68 59, 65 58, 62 60" 
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            
      {/* Tusk */}
      <path d="M43 51 L39 53" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Tilak / Trishul */}
      <path d="M50 28 L50 36 M46 31 L54 31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="50" cy="38" r="1.5" fill="#7A1C29" />
      
      {/* Modak */}
      <circle cx="34" cy="62" r="4" fill="currentColor" />
    </svg>
    <span className="text-[11px] tracking-[0.25em] uppercase text-[#9E7D3B] font-serif-luxury mt-1">
      || श्री गणेशाय नमः ||
    </span>
  </div>
);

// Ornate Corner Flourish for Cards & Invitations
export const OrnateCorner = ({ position, className = '' }: { position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }) => {
  const rotation = {
    tl: '',
    tr: 'rotate-90',
    br: 'rotate-180',
    bl: '-rotate-90',
  }[position];

  return (
    <div className={`absolute ${rotation} ${className} pointer-events-none text-[#C5A059]`}>
      <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
        <path d="M2 58 L2 18 C2 9, 9 2, 18 2 L58 2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 58 L8 22 C8 14, 14 8, 22 8 L58 8" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
        <circle cx="18" cy="18" r="4" fill="currentColor" fillOpacity="0.4" />
        <path d="M6 6 Q18 6, 22 18 Q6 22, 6 6 Z" fill="currentColor" fillOpacity="0.2" />
      </svg>
    </div>
  );
};

// Floating Rose Petals Component
export const FloatingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-40 animate-float"
          style={{
            top: `${(i * 12) + 5}%`,
            left: `${(i * 11 + 4) % 94}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${5 + (i % 4)}s`,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#E8A5A9" className="transform rotate-45">
            <path d="M12 2C8 6 4 10 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 16 6 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};
