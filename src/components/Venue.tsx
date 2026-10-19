import { useState } from 'react';
import { MapPin, Navigation, Plane, Copy, Check, Hotel, PhoneCall, ExternalLink } from 'lucide-react';
import { COUPLE_DATA } from '../data/weddingData';
import { OrnateCorner, RoyalMandalaDivider } from './FloralMotifs';

export const Venue = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=The+Oberoi+Udaivilas+Udaipur';

  const handleCopyCode = () => {
    navigator.clipboard.writeText('AARAVANANYA2027');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="venue" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#9E7D3B] block mb-2">
            The Royal Destination
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
            Venue &amp; Guest Hospitality
          </h2>
          <RoyalMandalaDivider className="my-4" />
          <p className="text-sm sm:text-base text-[#5E564D] font-light">
            Set against the tranquil waters of Lake Pichola with panoramic views of the City Palace, we welcome you to the majestic jewel of Rajasthan.
          </p>
        </div>

        {/* Venue Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#C5A059]/30 relative overflow-hidden">
          <OrnateCorner position="tl" className="top-2 left-2" />
          <OrnateCorner position="br" className="bottom-2 right-2" />

          {/* Left Column: Image & Location */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-16/10 shadow-md border border-[#C5A059]/20 group">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80"
                alt="The Oberoi Udaivilas, Udaipur"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest text-[#ECC880] font-sans-clean font-semibold block">
                  Primary Royal Residence
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal">
                  The Oberoi Udaivilas
                </h3>
                <p className="text-xs text-white/90 flex items-center gap-1.5 mt-1">
                  <MapPin size={13} className="text-[#ECC880]" />
                  <span>Haridas Ji Ki Magri, Lake Pichola, Udaipur, Rajasthan 313001</span>
                </p>
              </div>
            </div>

            {/* Travel Directions Quick Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#2E2926] bg-gradient-to-r from-[#ECC880] to-[#C5A059] shadow-md hover:opacity-95 transition-all"
              >
                <Navigation size={15} />
                <span>Open Google Maps Directions</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={`tel:${COUPLE_DATA.contactPhone}`}
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs uppercase tracking-wider font-medium text-[#2E2926] bg-[#FAF7F2] border border-[#C5A059]/40 hover:bg-[#FAF0E1] transition-colors"
              >
                <PhoneCall size={14} className="text-[#9E7D3B]" />
                <span>Call Travel Concierge</span>
              </a>
            </div>
          </div>

          {/* Right Column: Travel & Stay Guide */}
          <div className="lg:col-span-5 space-y-5">
            {/* Airport & Transit */}
            <div className="space-y-3">
              <h4 className="text-base font-serif-luxury font-semibold text-[#2E2926] uppercase tracking-wider flex items-center gap-2">
                <Plane size={16} className="text-[#C5A059]" />
                <span>Reaching Udaipur</span>
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-[#5E564D] pl-6 border-l-2 border-[#C5A059]/30">
                <p>
                  <strong>Maharana Pratap Airport (UDR):</strong> 27 km (approx. 45 mins). Complimentary private chauffeurs will receive all arriving guests.
                </p>
                <p>
                  <strong>Udaipur Railway Station:</strong> 7 km (approx. 20 mins) from the palace gates.
                </p>
                <p>
                  <strong>Private Shikara Boat:</strong> Arrive in royal style across Lake Pichola directly to the palace jetty.
                </p>
              </div>
            </div>

            {/* Hotel Booking & Block Code */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2E2926] uppercase tracking-wider">
                <Hotel size={15} className="text-[#C5A059]" />
                <span>Guest Room Block Reserved</span>
              </div>
              <p className="text-xs text-[#5E564D]">
                Special tariff at The Oberoi Udaivilas &amp; Trident Udaipur. Quote promo code when reserving directly:
              </p>
              <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#C5A059]/40">
                <span className="font-mono text-sm font-bold text-[#9E7D3B] tracking-wider">
                  AARAVANANYA2027
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium text-[#2E2926] bg-[#FAF0E1] hover:bg-[#EBDDC8] transition-colors"
                >
                  {copiedCode ? <Check size={12} className="text-green-700" /> : <Copy size={12} />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Weather Tip */}
            <div className="text-xs text-[#7A7268] bg-[#FFFBF0] p-3 rounded-xl border border-[#ECC880]/40">
              <span className="font-semibold text-[#9E7D3B] block mb-0.5">Udaipur in February:</span>
              Crisp mornings &amp; sunny 25°C afternoons, with cool starlit evenings (13°C). A royal shawl or evening blazer is recommended for night lawns.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
