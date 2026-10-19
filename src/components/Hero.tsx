import { Calendar, ChevronDown, Heart, MapPin } from 'lucide-react';
import { COUPLE_DATA } from '../data/weddingData';
import { FloatingPetals, GaneshaBlessing, RoyalMandalaDivider } from './FloralMotifs';

export const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#1A1615]">
      {/* Background Wedding Image with Parallax / Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Cinematic Gradient Overlays for Luxury Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Floating Petals Decor */}
      <FloatingPetals />

      {/* Main Hero Card Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 py-28 flex flex-col items-center justify-center">
        {/* Auspicious Ganesha Emblem */}
        <div className="mb-4">
          <GaneshaBlessing size={58} className="text-[#ECC880]" />
        </div>

        {/* Formal Announcement Banner */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#E8C5C8] font-sans-clean font-medium mb-3">
          Together With Their Families
        </p>

        {/* Couple Names in Grand Luxury Typography */}
        <div className="my-2">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif-luxury font-normal text-white tracking-tight leading-none drop-shadow-md">
            <span>{COUPLE_DATA.groom.firstName}</span>
            <span className="font-script text-[#ECC880] text-4xl sm:text-6xl md:text-7xl block sm:inline-block sm:mx-6 my-1 sm:my-0">
              &amp;
            </span>
            <span>{COUPLE_DATA.bride.firstName}</span>
          </h1>
        </div>

        {/* Royal Divider Motif */}
        <RoyalMandalaDivider className="my-4 text-[#ECC880]" />

        {/* Wedding Date & City */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white/95 my-3">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#ECC880]" />
            <span className="text-base sm:text-xl font-serif-luxury tracking-wider font-light">
              Monday, 15 February 2027
            </span>
          </div>
          <span className="hidden sm:inline text-[#ECC880] text-sm">•</span>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#ECC880]" />
            <span className="text-base sm:text-xl font-serif-luxury tracking-wider font-light">
              The Oberoi Udaivilas, Udaipur
            </span>
          </div>
        </div>

        {/* Romantic Monologue */}
        <p className="font-script text-xl sm:text-2xl text-[#FAF7F2]/90 max-w-xl mx-auto mt-2 mb-8 italic">
          "Two souls, one sacred journey under the royal skies of Rajasthan."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#rsvp"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#2E2926] bg-gradient-to-r from-[#ECC880] via-[#D4AF37] to-[#C5A059] hover:from-[#FFE094] hover:to-[#D4AF37] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Heart size={16} className="fill-[#7A1C29] text-[#7A1C29]" />
            RSVP With Joy
          </a>
          <a
            href="#events"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-white border border-[#ECC880]/60 hover:border-[#ECC880] bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            Wedding Events
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#countdown"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#ECC880] hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll down to countdown"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-sans-clean opacity-80 group-hover:opacity-100">
          Scroll Down
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </header>
  );
};
