import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import { FAQ_DATA, COUPLE_DATA } from '../data/weddingData';
import { RoyalMandalaDivider } from './FloralMotifs';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Dress Code', 'Logistics', 'Accommodations', 'Gifts', 'Weather'];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFDF9] relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#9E7D3B] block mb-2">
            Everything You Need To Know
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#2E2926] font-normal tracking-wide">
            Frequently Asked Questions
          </h2>
          <RoyalMandalaDivider className="my-4" />
          <p className="text-sm sm:text-base text-[#5E564D] font-light">
            Helpful answers to assist you in planning your travel, wardrobe, and stay with us.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#C5A059] text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-[#5E564D] hover:bg-[#FAF0E1] border border-[#C5A059]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-[#C5A059]/30 hover:border-[#C5A059] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF0E1] text-[#9E7D3B] flex items-center justify-center shrink-0 text-xs font-semibold">
                      Q{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif-luxury text-[#2E2926] font-medium">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#9E7D3B] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C5A059] text-white' : ''
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5E564D] leading-relaxed pl-16 pr-8 border-t border-[#FAF0E1]">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[11px] uppercase tracking-wider text-[#9E7D3B] font-semibold bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#C5A059]/20">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 bg-[#FAF7F2] rounded-2xl border border-[#C5A059]/30">
          <h4 className="font-serif-luxury text-lg text-[#2E2926] mb-1">
            Have a question that is not listed here?
          </h4>
          <p className="text-xs text-[#7A7268] mb-4">
            Our wedding planners and concierge team are available at all times.
          </p>
          <a
            href={`mailto:${COUPLE_DATA.contactEmail}`}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs uppercase tracking-wider font-semibold text-[#2E2926] bg-white border border-[#C5A059] hover:bg-[#FAF0E1] transition-all"
          >
            <Mail size={14} className="text-[#9E7D3B]" />
            <span>Email Wedding Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};
