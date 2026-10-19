import { useState } from 'react';
import { ArrowUp, Heart, Copy, Check } from 'lucide-react';
import { COUPLE_DATA } from '../data/weddingData';
import { RoyalMandalaDivider } from './FloralMotifs';

export const Footer = () => {
  const [copiedHashtag, setCopiedHashtag] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyHashtag = (tag: string) => {
    navigator.clipboard.writeText(tag);
    setCopiedHashtag(tag);
    setTimeout(() => setCopiedHashtag(null), 2000);
  };

  return (
    <footer className="relative bg-[#1A1615] text-[#FAF7F2] pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top Gold Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-10">
        {/* Monogram Crest */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#ECC880] bg-white/5 flex items-center justify-center shadow-lg mb-3">
            <span className="font-serif-luxury font-bold text-2xl text-[#ECC880] tracking-wider">
              A&amp;A
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-white font-normal tracking-wide">
            {COUPLE_DATA.groom.firstName} &amp; {COUPLE_DATA.bride.firstName}
          </h2>

          <p className="text-xs uppercase tracking-[0.3em] text-[#ECC880] font-sans-clean mt-1">
            15 February 2027 • Udaipur, Rajasthan
          </p>
        </div>

        <RoyalMandalaDivider className="my-2 text-[#ECC880]" />

        {/* Wedding Hashtags Pill Row */}
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#E8C5C8] font-medium block mb-3">
            Share Your Moments With Our Wedding Hashtags:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {COUPLE_DATA.hashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => copyHashtag(tag)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono bg-white/10 hover:bg-white/20 border border-[#ECC880]/40 text-[#ECC880] transition-colors"
                title="Click to copy hashtag"
              >
                {copiedHashtag === tag ? (
                  <Check size={12} className="text-green-400" />
                ) : (
                  <Copy size={12} />
                )}
                <span>{tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs uppercase tracking-widest text-white/70">
          <a href="#story" className="hover:text-[#ECC880] transition-colors">
            Our Story
          </a>
          <a href="#events" className="hover:text-[#ECC880] transition-colors">
            Celebrations
          </a>
          <a href="#gallery" className="hover:text-[#ECC880] transition-colors">
            Gallery
          </a>
          <a href="#invitation" className="hover:text-[#ECC880] transition-colors">
            Formal Invite
          </a>
          <a href="#rsvp" className="hover:text-[#ECC880] transition-colors">
            RSVP
          </a>
          <a href="#venue" className="hover:text-[#ECC880] transition-colors">
            Venue &amp; Stay
          </a>
          <a href="#guestbook" className="hover:text-[#ECC880] transition-colors">
            Wishes Wall
          </a>
          <a href="#faq" className="hover:text-[#ECC880] transition-colors">
            FAQ
          </a>
        </div>

        {/* Romantic blessing */}
        <p className="font-script text-xl sm:text-2xl text-[#E8C5C8] max-w-lg mx-auto italic">
          "Two souls, two families, united forever in love, laughter, and grace."
        </p>

        {/* Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#ECC880]/50 bg-white/5 hover:bg-[#ECC880] text-[#ECC880] hover:text-[#1A1615] transition-all inline-flex items-center justify-center shadow-md cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-xs text-white/40 space-y-1">
          <p>© 2027 Aarav &amp; Ananya Wedding Celebration. With love and blessings from both families.</p>
          <p className="flex items-center justify-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart size={11} className="fill-[#7A1C29] text-[#7A1C29]" />
            <span>for our royal union</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
