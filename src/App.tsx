import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { LoveStory } from './components/LoveStory';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { DigitalInvitation } from './components/DigitalInvitation';
import { RsvpForm } from './components/RsvpForm';
import { Venue } from './components/Venue';
import { Guestbook } from './components/Guestbook';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2E2926] flex flex-col font-sans-clean selection:bg-[#ECC880] selection:text-[#2E2926]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero & Welcome */}
        <Hero />

        {/* 2. Live Countdown Timer */}
        <Countdown />

        {/* 3. Our Love Story */}
        <LoveStory />

        {/* 4. Wedding Events & Itinerary */}
        <Events />

        {/* 5. Photo Gallery & Lightbox */}
        <Gallery />

        {/* 6. Digital Wedding Invitation Card */}
        <DigitalInvitation />

        {/* 7. RSVP Interactive Form */}
        <RsvpForm />

        {/* 8. Venue & Travel Guide */}
        <Venue />

        {/* 9. Guest Blessings & Wishes Wall */}
        <Guestbook />

        {/* 10. Frequently Asked Questions */}
        <Faq />
      </main>

      {/* 11. Royal Footer */}
      <Footer />
    </div>
  );
}

export default App;
