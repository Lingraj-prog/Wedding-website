import { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Download, Palette } from 'lucide-react';
import { WEDDING_EVENTS } from '../data/weddingData';
import type { WeddingEvent } from '../types/wedding';
import { createGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { OrnateCorner, RoyalMandalaDivider } from './FloralMotifs';

export const Events = () => {
  const [selectedDayFilter, setSelectedDayFilter] = useState<string>('all');
  const [activeEventModal, setActiveEventModal] = useState<WeddingEvent | null>(null);

  const filteredEvents = WEDDING_EVENTS.filter((evt) => {
    if (selectedDayFilter === 'all') return true;
    if (selectedDayFilter === '13') return evt.fullDate.includes('13 Feb');
    if (selectedDayFilter === '14') return evt.fullDate.includes('14 Feb');
    if (selectedDayFilter === '15') return evt.fullDate.includes('15 Feb');
    return true;
  });

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#9E7D3B] block mb-2">
            The Wedding Celebrations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
            Wedding Itinerary &amp; Events
          </h2>
          <RoyalMandalaDivider className="my-4" />
          <p className="text-sm sm:text-base text-[#5E564D] font-light">
            Three days of music, sacred rituals, colorful festivities, and unforgettable royal memories in the City of Lakes.
          </p>

          {/* Filter Tabs by Day */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Celebrations' },
              { id: '13', label: 'Day 1 • 13 Feb (Mehendi)' },
              { id: '14', label: 'Day 2 • 14 Feb (Haldi & Sangeet)' },
              { id: '15', label: 'Day 3 • 15 Feb (Pheras & Reception)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDayFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  selectedDayFilter === tab.id
                    ? 'bg-[#C5A059] text-white shadow-sm'
                    : 'bg-white text-[#5E564D] hover:bg-[#FAF0E1] border border-[#C5A059]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#C5A059]/30 hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <OrnateCorner position="tl" className="top-2 left-2 z-10" />
              <OrnateCorner position="tr" className="top-2 right-2 z-10" />

              {/* Event Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#2E2926] text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-[#C5A059]/40">
                  {event.fullDate}
                </div>

                {/* Subtitle Overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-[#ECC880] font-sans-clean block font-medium">
                    {event.subTitle}
                  </span>
                  <h3 className="text-xl font-serif-luxury font-normal leading-snug">
                    {event.name}
                  </h3>
                </div>
              </div>

              {/* Event Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3 text-xs sm:text-sm text-[#5E564D]">
                  {/* Time */}
                  <div className="flex items-center gap-2.5">
                    <Clock size={16} className="text-[#C5A059] shrink-0" />
                    <span className="font-medium text-[#2E2926]">{event.time}</span>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-[#2E2926] block">{event.venue}</span>
                      <span className="text-xs text-[#7A7268]">{event.locationDetails}</span>
                    </div>
                  </div>

                  {/* Dress Code & Color Swatches */}
                  <div className="pt-2 border-t border-[#FAF0E1]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Palette size={15} className="text-[#C5A059]" />
                      <span className="font-medium text-[#2E2926] text-xs uppercase tracking-wider">
                        Attire: {event.dressCode}
                      </span>
                    </div>
                    {/* Swatches */}
                    <div className="flex items-center gap-2 pl-6">
                      {event.colorPalette.map((col) => (
                        <div key={col.name} className="flex items-center gap-1.5" title={col.name}>
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs inline-block"
                            style={{ backgroundColor: col.hex }}
                          />
                          <span className="text-[11px] text-[#7A7268]">{col.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E564D] font-light leading-relaxed pt-2">
                    {event.description}
                  </p>
                </div>

                {/* Calendar Buttons */}
                <div className="pt-4 border-t border-[#FAF0E1] flex items-center justify-between gap-2">
                  <a
                    href={createGoogleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-medium text-[#2E2926] bg-[#FAF7F2] border border-[#C5A059]/40 hover:bg-[#FAF0E1] transition-colors"
                  >
                    <Calendar size={13} className="text-[#9E7D3B]" />
                    <span>Google Cal</span>
                  </a>
                  <button
                    onClick={() => downloadIcsFile(event)}
                    className="flex items-center justify-center p-2 rounded-lg text-[#2E2926] bg-[#FAF7F2] border border-[#C5A059]/40 hover:bg-[#FAF0E1] transition-colors"
                    title="Download .ICS for Apple / Outlook"
                    aria-label="Download calendar event"
                  >
                    <Download size={15} className="text-[#9E7D3B]" />
                  </button>
                  <button
                    onClick={() => setActiveEventModal(event)}
                    className="flex items-center gap-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#C5A059] to-[#9E7D3B] hover:opacity-95 shadow-xs transition-opacity"
                  >
                    <Sparkles size={12} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Extended Event Information */}
      {activeEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#C5A059] animate-fade-in">
            <OrnateCorner position="tl" className="top-2 left-2" />
            <OrnateCorner position="br" className="bottom-2 right-2" />

            <div className="text-center mb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9E7D3B] font-medium block">
                {activeEventModal.fullDate}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#2E2926] mt-1">
                {activeEventModal.name}
              </h3>
              <p className="text-xs text-[#7A7268] font-script text-lg">
                {activeEventModal.subTitle}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#4A4540] my-4 bg-[#FAF7F2] p-4 rounded-xl border border-[#C5A059]/20">
              <p>
                <strong>Time:</strong> {activeEventModal.time}
              </p>
              <p>
                <strong>Venue:</strong> {activeEventModal.venue}, {activeEventModal.locationDetails}
              </p>
              <p>
                <strong>Dress Code:</strong> {activeEventModal.dressCode}
              </p>
              <p className="text-[#5E564D] leading-relaxed pt-1">
                {activeEventModal.description}
              </p>
              <div className="pt-2">
                <span className="font-semibold block mb-1">Recommended Shades:</span>
                <div className="flex gap-3">
                  {activeEventModal.colorPalette.map((c) => (
                    <span key={c.name} className="inline-flex items-center gap-1.5 text-xs">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.hex }} />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveEventModal(null)}
                className="px-6 py-2 rounded-full text-xs font-semibold text-[#2E2926] bg-[#FAF0E1] hover:bg-[#EBDDC8] transition-colors"
              >
                Close
              </button>
              <a
                href="#rsvp"
                onClick={() => setActiveEventModal(null)}
                className="px-6 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#ECC880] via-[#C5A059] to-[#9E7D3B] shadow-sm hover:opacity-90 transition-opacity"
              >
                RSVP for this Event
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
