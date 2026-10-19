import { Heart, MapPin } from 'lucide-react';
import { LOVE_STORY } from '../data/weddingData';
import { OrnateCorner, RoyalMandalaDivider } from './FloralMotifs';

export const LoveStory = () => {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] relative overflow-hidden">
      {/* Decorative side watermark motifs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#FAF0E1]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#F5EBE6]/60 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#9E7D3B] block mb-2">
            How Two Worlds Became One
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
            Our Love Story
          </h2>
          <RoyalMandalaDivider className="my-4" />
          <p className="text-sm sm:text-base text-[#5E564D] font-light">
            Every chapter of our journey has been woven with laughter, quiet understanding, and an unwavering promise to walk together forever.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Golden Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#C5A059]/50 to-transparent" />

          <div className="space-y-16 sm:space-y-24">
            {LOVE_STORY.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Heart Pin on Desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FAF7F2] border-2 border-[#C5A059] items-center justify-center shadow-md">
                    <Heart size={16} className="text-[#9E7D3B] fill-[#9E7D3B]" />
                  </div>

                  {/* Photo Card */}
                  <div className="w-full md:w-1/2">
                    <div className="relative p-2.5 sm:p-3 rounded-2xl bg-white shadow-md border border-[#C5A059]/25 hover:border-[#C5A059] transition-all group overflow-hidden">
                      <OrnateCorner position="tl" className="top-2 left-2 z-10" />
                      <OrnateCorner position="br" className="bottom-2 right-2 z-10" />
                      
                      <div className="overflow-hidden rounded-xl h-72 sm:h-80 w-full relative">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        {/* Year Badge */}
                        <div className="absolute top-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-sm text-[#9E7D3B] font-serif-luxury px-3.5 py-1 rounded-full text-xs font-semibold shadow-sm border border-[#C5A059]/30">
                          {milestone.year}
                        </div>

                        {/* Location Tag */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs font-sans-clean bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full">
                          <MapPin size={12} className="text-[#ECC880]" />
                          <span>{milestone.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="space-y-3 max-w-lg mx-auto md:mx-0">
                      <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#C5A059]">
                        {milestone.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#2E2926] font-normal">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#5E564D] font-light leading-relaxed">
                        {milestone.description}
                      </p>
                      {milestone.quote && (
                        <blockquote className="pt-2 font-script text-lg sm:text-xl text-[#9E7D3B] italic">
                          {milestone.quote}
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
