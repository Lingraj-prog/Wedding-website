import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Check, Heart, Send, Sparkles, User, Mail, Phone, Users, Utensils, Download, RefreshCw } from 'lucide-react';
import { COUPLE_DATA, WEDDING_EVENTS } from '../data/weddingData';
import type { RsvpSubmission } from '../types/wedding';
import { OrnateCorner, RoyalMandalaDivider } from './FloralMotifs';

export const RsvpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attendingStatus: 'attending' as 'attending' | 'declined',
    guestCount: 2,
    events: ['mehendi', 'haldi', 'sangeet', 'wedding', 'reception'],
    dietaryPreference: 'Vegetarian',
    personalNote: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRsvp, setSubmittedRsvp] = useState<RsvpSubmission | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Check if RSVP is already saved in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('aarav_ananya_rsvp');
      if (saved) {
        setSubmittedRsvp(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleEventToggle = (eventId: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(eventId);
      if (exists) {
        return { ...prev, events: prev.events.filter((id) => id !== eventId) };
      } else {
        return { ...prev, events: [...prev.events, eventId] };
      }
    });
  };

  const fireGoldenConfetti = () => {
    // Elegant gold and rose confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#ECC880', '#E5A9AC', '#7A1C29', '#FAF7F2'],
    });
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#FFFBF0', '#E8C5C8'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#FFFBF0', '#E8C5C8'],
      });
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone or WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: RsvpSubmission = {
        id: `AA2027-${Math.floor(1000 + Math.random() * 9000)}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        attendingStatus: formData.attendingStatus,
        guestCount: formData.attendingStatus === 'attending' ? formData.guestCount : 0,
        events: formData.attendingStatus === 'attending' ? formData.events : [],
        dietaryPreference: formData.dietaryPreference,
        personalNote: formData.personalNote,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      try {
        localStorage.setItem('aarav_ananya_rsvp', JSON.stringify(newSubmission));
      } catch {
        // ignore
      }

      setSubmittedRsvp(newSubmission);
      setIsSubmitting(false);
      fireGoldenConfetti();
    }, 700);
  };

  const handleReset = () => {
    localStorage.removeItem('aarav_ananya_rsvp');
    setSubmittedRsvp(null);
  };

  return (
    <section id="rsvp" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#9E7D3B] block mb-2">
            Will You Celebrate With Us?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
            Kindly RSVP
          </h2>
          <RoyalMandalaDivider className="my-4" />
          <p className="text-sm sm:text-base text-[#5E564D] font-light">
            Please let us know your plans by {COUPLE_DATA.rsvpDeadline} so we can prepare your royal hospitality and stay.
          </p>
        </div>

        {/* Card Container */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-[#C5A059]/40 p-6 sm:p-12 overflow-hidden">
          <OrnateCorner position="tl" className="top-3 left-3" />
          <OrnateCorner position="tr" className="top-3 right-3" />
          <OrnateCorner position="bl" className="bottom-3 left-3" />
          <OrnateCorner position="br" className="bottom-3 right-3" />

          {submittedRsvp ? (
            /* CONFIRMED RSVP BOARDING PASS STATE */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF0E1] border-2 border-[#C5A059] flex items-center justify-center text-[#9E7D3B]">
                <Sparkles size={28} />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#9E7D3B] font-semibold block">
                  RSVP Confirmed • Thank You
                </span>
                <h3 className="text-3xl font-serif-luxury text-[#2E2926] mt-1">
                  We Can't Wait To Welcome You, {submittedRsvp.fullName}!
                </h3>
              </div>

              {/* VIP Wedding Pass */}
              <div className="max-w-md mx-auto bg-[#FAF7F2] rounded-2xl p-6 border-2 border-dashed border-[#C5A059] text-left space-y-3 relative">
                <div className="flex justify-between items-center border-b border-[#C5A059]/30 pb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#7A7268] block">Pass ID</span>
                    <span className="font-mono text-sm font-bold text-[#9E7D3B]">{submittedRsvp.id}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-widest text-[#7A7268] block">Status</span>
                    <span className={`text-xs font-semibold uppercase px-2.5 py-0.5 rounded-full ${
                      submittedRsvp.attendingStatus === 'attending' ? 'bg-green-100 text-green-800' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {submittedRsvp.attendingStatus === 'attending' ? 'Attending with Joy' : 'Regretfully Declined'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div>
                    <span className="text-[#7A7268] block text-[11px]">Guest Name</span>
                    <span className="font-medium text-[#2E2926]">{submittedRsvp.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[#7A7268] block text-[11px]">Total Guests</span>
                    <span className="font-medium text-[#2E2926]">{submittedRsvp.guestCount} Guest(s)</span>
                  </div>
                  <div>
                    <span className="text-[#7A7268] block text-[11px]">Dietary Choice</span>
                    <span className="font-medium text-[#2E2926]">{submittedRsvp.dietaryPreference}</span>
                  </div>
                  <div>
                    <span className="text-[#7A7268] block text-[11px]">Ceremonies</span>
                    <span className="font-medium text-[#2E2926]">{submittedRsvp.events.length} Selected</span>
                  </div>
                </div>

                {submittedRsvp.personalNote && (
                  <div className="pt-2 border-t border-[#C5A059]/20">
                    <span className="text-[10px] uppercase tracking-wider text-[#7A7268] block">Your Warm Wishes</span>
                    <p className="text-xs italic text-[#5E564D] mt-0.5">"{submittedRsvp.personalNote}"</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2E2926] bg-[#FAF0E1] border border-[#C5A059] hover:bg-[#E8D9C2] transition-colors"
                >
                  <Download size={14} className="text-[#9E7D3B]" />
                  <span>Print Wedding Pass</span>
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#7A7268] hover:text-[#2E2926] transition-colors"
                >
                  <RefreshCw size={14} />
                  <span>Update RSVP Response</span>
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE RSVP INPUT FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 text-center">
                  {errorMessage}
                </div>
              )}

              {/* Attendance Toggle Radio */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-2 bg-[#FAF7F2] rounded-2xl border border-[#C5A059]/30">
                <label className="flex-1 w-full flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer transition-all border text-xs sm:text-sm font-semibold uppercase tracking-wider text-center has-checked:bg-[#C5A059] has-checked:text-white has-checked:border-[#C5A059] border-transparent text-[#5E564D]">
                  <input
                    type="radio"
                    name="attendingStatus"
                    value="attending"
                    checked={formData.attendingStatus === 'attending'}
                    onChange={() => setFormData({ ...formData, attendingStatus: 'attending' })}
                    className="sr-only"
                  />
                  <Heart size={16} className={formData.attendingStatus === 'attending' ? 'fill-current' : ''} />
                  <span>Joyfully Accepts</span>
                </label>

                <label className="flex-1 w-full flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer transition-all border text-xs sm:text-sm font-semibold uppercase tracking-wider text-center has-checked:bg-[#7A7268] has-checked:text-white has-checked:border-[#7A7268] border-transparent text-[#5E564D]">
                  <input
                    type="radio"
                    name="attendingStatus"
                    value="declined"
                    checked={formData.attendingStatus === 'declined'}
                    onChange={() => setFormData({ ...formData, attendingStatus: 'declined' })}
                    className="sr-only"
                  />
                  <span>Regretfully Declines</span>
                </label>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1.5 flex items-center gap-1.5">
                    <User size={13} className="text-[#C5A059]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohan &amp; Maya Verma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1.5 flex items-center gap-1.5">
                    <Mail size={13} className="text-[#C5A059]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1.5 flex items-center gap-1.5">
                    <Phone size={13} className="text-[#C5A059]" />
                    <span>WhatsApp / Phone *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              {formData.attendingStatus === 'attending' && (
                <>
                  {/* Guest Count & Dietary Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1.5 flex items-center gap-1.5">
                        <Users size={13} className="text-[#C5A059]" />
                        <span>Number of Guests Attending</span>
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059]"
                      >
                        <option value={1}>1 Guest (Just Myself)</option>
                        <option value={2}>2 Guests (Couple / Plus One)</option>
                        <option value={3}>3 Guests (Family)</option>
                        <option value={4}>4 Guests (Family)</option>
                        <option value={5}>5+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1.5 flex items-center gap-1.5">
                        <Utensils size={13} className="text-[#C5A059]" />
                        <span>Dietary Preference</span>
                      </label>
                      <select
                        value={formData.dietaryPreference}
                        onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059]"
                      >
                        <option value="Vegetarian">Pure Vegetarian</option>
                        <option value="Jain">Jain Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="No Restrictions">No Restrictions</option>
                      </select>
                    </div>
                  </div>

                  {/* Events Attending Checkboxes */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-2.5">
                      Select The Ceremonies You Will Attend:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {WEDDING_EVENTS.map((event) => {
                        const isChecked = formData.events.includes(event.id);

                        return (
                          <div
                            key={event.id}
                            onClick={() => handleEventToggle(event.id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                              isChecked
                                ? 'bg-[#FAF0E1] border-[#C5A059] shadow-xs'
                                : 'bg-[#FAF7F2]/60 border-stone-200 hover:border-[#C5A059]/50'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center transition-colors ${
                                isChecked ? 'bg-[#C5A059] text-white' : 'border border-stone-400'
                              }`}
                            >
                              {isChecked && <Check size={12} strokeWidth={3} />}
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-[#2E2926] block leading-snug">
                                {event.name}
                              </span>
                              <span className="text-[10px] text-[#7A7268] block">
                                {event.fullDate} • {event.time.split(' ')[0]}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* Personal Note */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#4A4540] mb-1.5">
                  Blessings &amp; Notes For The Couple (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a sweet memory, congratulations, or travel arrival notes..."
                  value={formData.personalNote}
                  onChange={(e) => setFormData({ ...formData, personalNote: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/40 bg-[#FFFDF9] text-sm focus:outline-hidden focus:border-[#C5A059]"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-[#2E2926] bg-gradient-to-r from-[#ECC880] via-[#D4AF37] to-[#C5A059] hover:from-[#FFE094] hover:to-[#D4AF37] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 inline-flex items-center gap-2"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Confirming Your RSVP...' : 'Submit RSVP Response'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
