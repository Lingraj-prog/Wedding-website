import { useState, useEffect } from 'react';
import { Heart, Send, Sparkles } from 'lucide-react';
import { INITIAL_BLESSINGS } from '../data/weddingData';
import type { GuestBlessing } from '../types/wedding';
import { OrnateCorner, RoyalMandalaDivider } from './FloralMotifs';

export const Guestbook = () => {
  const [blessings, setBlessings] = useState<GuestBlessing[]>(INITIAL_BLESSINGS);
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [postSuccess, setPostSuccess] = useState(false);

  // Load any previously posted blessings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('aarav_ananya_blessings');
      if (stored) {
        setBlessings(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handlePostBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newBlessing: GuestBlessing = {
        id: `blessing-${Date.now()}`,
        name: name.trim(),
        relation: relation.trim() || 'Well Wisher',
        message: message.trim(),
        timestamp: 'Just now',
        avatarColor: ['#C5A059', '#7A1C29', '#3E6B48', '#111E38', '#D99B26'][Math.floor(Math.random() * 5)],
      };

      const updated = [newBlessing, ...blessings];
      setBlessings(updated);
      try {
        localStorage.setItem('aarav_ananya_blessings', JSON.stringify(updated));
      } catch {
        // ignore
      }

      setName('');
      setRelation('');
      setMessage('');
      setIsSubmitting(false);
      setPostSuccess(true);
      setTimeout(() => setPostSuccess(false), 3000);
    }, 400);
  };

  return (
    <section id="guestbook" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#9E7D3B] block mb-2">
            Words From The Heart
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
            Blessings &amp; Wishes Wall
          </h2>
          <RoyalMandalaDivider className="my-4" />
          <p className="text-sm sm:text-base text-[#5E564D] font-light">
            Leave your warmest blessings, stories, and heartfelt love for Aarav and Ananya to treasure forever.
          </p>
        </div>

        {/* Content Layout: Form on Left/Top, Wall on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Post Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#C5A059]/30 relative">
            <OrnateCorner position="tl" className="top-2 left-2" />
            <OrnateCorner position="br" className="bottom-2 right-2" />

            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-[#C5A059]" />
              <h3 className="text-lg font-serif-luxury font-medium text-[#2E2926]">
                Write A Blessing
              </h3>
            </div>

            {postSuccess && (
              <div className="p-3 bg-green-50 text-green-800 text-xs rounded-xl border border-green-200 mb-4 text-center">
                Your blessing has been posted on the royal wall! Thank you!
              </div>
            )}

            <form onSubmit={handlePostBlessing} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya &amp; Aditya"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1">
                  Relation / Connection
                </label>
                <input
                  type="text"
                  placeholder="e.g. Groom's Cousin / Friend"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1">
                  Your Message &amp; Blessings *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="May your union be blessed with immense joy, laughter, and lifelong friendship..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2E2926] bg-gradient-to-r from-[#ECC880] to-[#C5A059] shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <Send size={14} />
                <span>{isSubmitting ? 'Posting...' : 'Post Your Blessing'}</span>
              </button>
            </form>
          </div>

          {/* Blessings Stream Wall */}
          <div className="lg:col-span-7 space-y-4 max-h-[580px] overflow-y-auto pr-2">
            {blessings.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-serif-luxury font-bold text-sm shadow-xs"
                      style={{ backgroundColor: b.avatarColor }}
                    >
                      {b.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif-luxury text-base font-semibold text-[#2E2926] leading-none">
                        {b.name}
                      </h4>
                      <span className="text-[11px] text-[#9E7D3B] font-medium block mt-0.5">
                        {b.relation}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#7A7268]">{b.timestamp}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#5E564D] leading-relaxed italic font-light pl-12">
                  "{b.message}"
                </p>

                <div className="flex items-center justify-end pt-1">
                  <div className="flex items-center gap-1 text-[#7A1C29] text-xs font-medium">
                    <Heart size={13} className="fill-current" />
                    <span>Blessed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
