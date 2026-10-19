import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Heart } from 'lucide-react';
import { weddingSoundscape } from '../utils/audioPlayer';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    const playing = weddingSoundscape.toggle();
    setIsPlayingMusic(playing);
  };

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Celebrations', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Invitation', href: '#invitation' },
    { label: 'Venue & Stay', href: '#venue' },
    { label: 'Wishes', href: '#guestbook' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-md py-3 border-b border-[#C5A059]/30'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group text-left"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
              isScrolled
                ? 'border-[#C5A059] bg-[#FAF7F2] text-[#9E7D3B]'
                : 'border-[#ECC880] bg-white/10 backdrop-blur-sm text-[#ECC880]'
            }`}
          >
            <span className="font-serif-luxury font-bold text-base tracking-wider">A&amp;A</span>
          </div>
          <div>
            <span
              className={`font-serif-luxury text-xl sm:text-2xl font-normal tracking-wide block ${
                isScrolled ? 'text-[#2E2926]' : 'text-white'
              }`}
            >
              Aarav &amp; Ananya
            </span>
            <span
              className={`text-[10px] tracking-[0.2em] uppercase block font-sans-clean ${
                isScrolled ? 'text-[#9E7D3B]' : 'text-[#ECC880]'
              }`}
            >
              15 . 02 . 2027
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors hover:text-[#C5A059] ${
                isScrolled ? 'text-[#4A4540]' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Music + RSVP */}
        <div className="flex items-center gap-3">
          {/* Ambient Music Button */}
          <button
            onClick={toggleMusic}
            aria-label="Toggle ambient wedding melody"
            title={isPlayingMusic ? 'Mute romantic sitar ambient music' : 'Play romantic sitar ambient music'}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              isPlayingMusic
                ? 'bg-[#C5A059] text-white border-[#C5A059] shadow-sm animate-pulse'
                : isScrolled
                ? 'border-[#C5A059]/40 text-[#5E564D] hover:border-[#C5A059] bg-[#FAF7F2]'
                : 'border-white/30 text-white/90 hover:border-white bg-black/20 backdrop-blur-sm'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 size={15} />
                <span className="hidden sm:inline">Melody On</span>
              </>
            ) : (
              <>
                <VolumeX size={15} />
                <span className="hidden sm:inline">Play Melody</span>
              </>
            )}
          </button>

          {/* Gold RSVP CTA */}
          <a
            href="#rsvp"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2E2926] bg-gradient-to-r from-[#ECC880] via-[#D4AF37] to-[#C5A059] hover:from-[#FFE094] hover:to-[#D4AF37] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Heart size={14} className="fill-current text-[#7A1C29]" />
            <span>RSVP</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-[#2E2926]' : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#C5A059]/30 text-[#2E2926] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 pb-3 border-b border-[#C5A059]/20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-medium text-[#4A4540] hover:text-[#9E7D3B] py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#ECC880] to-[#C5A059] text-[#2E2926] shadow-md flex items-center justify-center gap-2"
            >
              <Heart size={14} className="fill-[#7A1C29]" />
              Respond to RSVP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
