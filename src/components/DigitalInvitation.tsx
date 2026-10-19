import { useState } from 'react';
import { Mail, MailOpen, Download, Share2, Check } from 'lucide-react';


import { COUPLE_DATA } from '../data/weddingData';
import { GaneshaBlessing, OrnateCorner, RoyalMandalaDivider } from './FloralMotifs';

export const DigitalInvitation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Aarav & Ananya Royal Wedding Invitation',
          text: 'You are cordially invited to the wedding celebration of Aarav & Ananya on 15 Feb 2027 in Udaipur!',
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="invitation" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ECC880]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#9E7D3B] block mb-2">
            The Royal Formal Invite
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
            Digital Wedding Invitation
          </h2>
          <RoyalMandalaDivider className="my-4" />
          <p className="text-sm sm:text-base text-[#5E564D] font-light">
            Click the golden wax seal below to unveil our formal royal wedding invitation.
          </p>
        </div>

        {/* Envelope & Card Interactive Container */}
        <div className="relative max-w-2xl mx-auto transition-all duration-700">
          {/* Card Toggle Control Bar */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2E2926] bg-white border border-[#C5A059] hover:bg-[#FAF0E1] shadow-xs transition-all"
            >
              {isOpen ? (
                <>
                  <Mail size={15} className="text-[#9E7D3B]" />
                  <span>Fold Into Envelope</span>
                </>
              ) : (
                <>
                  <MailOpen size={15} className="text-[#9E7D3B]" />
                  <span>Open Royal Invitation</span>
                </>
              )}
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium text-[#2E2926] bg-white border border-[#C5A059]/40 hover:bg-[#FAF0E1] transition-colors"
              title="Share Invitation"
            >
              {copiedLink ? <Check size={14} className="text-green-600" /> : <Share2 size={14} className="text-[#C5A059]" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium text-[#2E2926] bg-white border border-[#C5A059]/40 hover:bg-[#FAF0E1] transition-colors"
              title="Print or Save Invitation as PDF"
            >
              <Download size={14} className="text-[#C5A059]" />
              <span>Save Pass</span>
            </button>
          </div>

          {!isOpen ? (
            /* CLOSED ENVELOPE STATE */
            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer relative mx-auto w-full max-w-lg aspect-16/11 bg-[#F5EFE6] rounded-2xl shadow-2xl border-2 border-[#C5A059] flex flex-col items-center justify-center p-8 transition-all hover:scale-102 group overflow-hidden"
            >
              {/* Envelope Flap Lines */}
              <div className="absolute inset-0 border-t-[80px] border-t-[#EADCC8] border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent pointer-events-none opacity-40" />

              {/* Wax Seal Center */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7A1C29] via-[#942031] to-[#5D1024] border-2 border-[#ECC880] shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center text-[#ECC880]">
                    <span className="font-serif-luxury font-bold text-2xl tracking-wider block">A&amp;A</span>
                    <span className="text-[8px] uppercase tracking-widest block font-sans-clean font-medium">2027</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9E7D3B] block">
                    Royal Seal of Invitation
                  </span>
                  <span className="text-[11px] text-[#7A7268] mt-1 block">
                    Click wax seal to break &amp; view invitation
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* OPENED FORMAL INVITATION CARD STATE */
            <div className="relative p-6 sm:p-12 rounded-3xl bg-[#FFFDF9] shadow-2xl border-4 border-[#C5A059] transition-all duration-500 print:border-2 print:shadow-none">
              {/* Corner Ornaments */}
              <OrnateCorner position="tl" className="top-3 left-3" />
              <OrnateCorner position="tr" className="top-3 right-3" />
              <OrnateCorner position="bl" className="bottom-3 left-3" />
              <OrnateCorner position="br" className="bottom-3 right-3" />

              {/* Gold Inner Inset Border */}
              <div className="border border-[#C5A059]/40 p-6 sm:p-10 rounded-2xl text-center space-y-5">
                {/* Auspicious Invocation */}
                <GaneshaBlessing size={54} className="text-[#C5A059]" />

                <div className="space-y-1">
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#7A7268] font-sans-clean">
                    With the heavenly blessings of
                  </p>
                  <p className="text-xs sm:text-sm font-serif-luxury text-[#4A4540] italic">
                    {COUPLE_DATA.groom.grandparents} &amp; {COUPLE_DATA.bride.grandparents}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-serif-luxury text-[#2E2926]">
                    {COUPLE_DATA.groom.parents}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-light">
                    Cordially request the honour of your presence at the wedding ceremony of their son
                  </p>
                </div>

                {/* Couple Names */}
                <div className="py-2">
                  <h3 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#2E2926] tracking-tight">
                    {COUPLE_DATA.groom.firstName}
                  </h3>
                  <span className="font-script text-3xl sm:text-4xl text-[#C5A059] block my-1">
                    with
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#2E2926] tracking-tight">
                    {COUPLE_DATA.bride.firstName}
                  </h3>
                  <p className="text-xs font-serif-luxury text-[#5E564D] italic mt-2">
                    Daughter of {COUPLE_DATA.bride.parents}
                  </p>
                </div>

                <RoyalMandalaDivider className="my-3" />

                {/* Event Schedule & Venue */}
                <div className="space-y-1 text-[#2E2926]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold">
                    Monday, Fifteenth of February
                  </p>
                  <p className="text-xl sm:text-2xl font-serif-luxury">
                    Two Thousand Twenty-Seven
                  </p>
                  <p className="text-xs text-[#5E564D] pt-1">
                    Barat Procession at 10:00 AM • Sacred Pheras at 11:30 AM
                  </p>
                  <p className="text-sm sm:text-base font-medium font-serif-luxury text-[#2E2926] pt-2">
                    {COUPLE_DATA.primaryVenue}
                  </p>
                  <p className="text-xs text-[#7A7268]">
                    {COUPLE_DATA.venueCity}
                  </p>
                </div>

                {/* Blessing & Note */}
                <div className="pt-4 border-t border-[#C5A059]/20 space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#7A1C29] font-medium">
                    Blessings Only • No Boxed Gifts Please
                  </p>
                  <p className="text-[11px] text-[#7A7268] font-sans-clean">
                    Kindly RSVP by {COUPLE_DATA.rsvpDeadline} to facilitate hospitality arrangements.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
