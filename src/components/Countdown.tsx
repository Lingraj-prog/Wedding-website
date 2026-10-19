import { useState, useEffect } from 'react';
import { Calendar, Download, Sparkles } from 'lucide-react';
import { COUPLE_DATA, WEDDING_EVENTS } from '../data/weddingData';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { OrnateCorner, RoyalMandalaDivider } from './FloralMotifs';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = COUPLE_DATA.targetTimestamp - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const weddingCeremonyEvent = WEDDING_EVENTS.find((e) => e.id === 'wedding') || WEDDING_EVENTS[3];

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ECC880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#E8C5C8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C5A059]/40 shadow-xs mb-3">
          <Sparkles size={14} className="text-[#C5A059]" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#9E7D3B]">
            Counting Down The Moments
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
          Until We Say "I Do"
        </h2>
        
        <RoyalMandalaDivider className="my-4" />

        <p className="text-sm sm:text-base text-[#5E564D] max-w-xl mx-auto font-sans-clean font-light mb-12">
          Every second brings us closer to our grand celebration in Udaipur. We cannot wait to share these cherished moments with you.
        </p>

        {/* Countdown Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/90 shadow-sm border border-[#C5A059]/30 hover:border-[#C5A059] transition-all transform hover:-translate-y-1 group"
            >
              <OrnateCorner position="tl" className="top-1 left-1" />
              <OrnateCorner position="br" className="bottom-1 right-1" />

              <div className="relative z-10">
                <span className="block text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-medium text-[#2E2926] group-hover:text-[#9E7D3B] transition-colors leading-none tracking-tight">
                  {String(block.value).padStart(2, '0')}
                </span>
                <div className="h-[1px] w-8 mx-auto my-2.5 bg-[#C5A059]/40 group-hover:w-12 transition-all duration-300" />
                <span className="block text-xs uppercase tracking-[0.2em] font-medium text-[#9E7D3B]">
                  {block.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Action & Reminder */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2E2926] bg-[#FAF7F2] border border-[#C5A059] hover:bg-[#FAF0E1] shadow-xs transition-all"
          >
            <Calendar size={15} className="text-[#9E7D3B]" />
            <span>Add Wedding To Calendar</span>
          </button>

          {calendarMenuOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl bg-white shadow-xl border border-[#C5A059]/30 py-2 z-30 text-left">
              <a
                href={createGoogleCalendarUrl(weddingCeremonyEvent)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCalendarMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-xs text-[#2E2926] hover:bg-[#FAF7F2] transition-colors"
              >
                <Calendar size={14} className="text-[#C5A059]" />
                Google Calendar
              </a>
              <button
                onClick={() => {
                  downloadIcsFile(weddingCeremonyEvent);
                  setCalendarMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-xs text-[#2E2926] hover:bg-[#FAF7F2] transition-colors text-left"
              >
                <Download size={14} className="text-[#C5A059]" />
                Apple / Outlook (.ICS file)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
