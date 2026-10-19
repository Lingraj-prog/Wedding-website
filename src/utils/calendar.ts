import type { WeddingEvent } from '../types/wedding';


export function createGoogleCalendarUrl(event: WeddingEvent): string {
  const title = encodeURIComponent(`Aarav & Ananya Wedding: ${event.name}`);
  const details = encodeURIComponent(
    `${event.subTitle}\n\n${event.description}\nDress Code: ${event.dressCode}\nVenue: ${event.venue}, ${event.locationDetails}\n\nJoin Aarav & Ananya in Udaipur, Rajasthan!`
  );
  const location = encodeURIComponent(`${event.venue}, ${event.locationDetails}`);
  
  // Dates format: YYYYMMDDTHHMMSS
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${event.calendarStartTime}/${event.calendarEndTime}&details=${details}&location=${location}`;
}

export function downloadIcsFile(event: WeddingEvent) {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Aarav and Ananya Wedding//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:Aarav & Ananya: ${event.name}`,
    `DESCRIPTION:${event.subTitle} - ${event.description} (Dress Code: ${event.dressCode})`,
    `LOCATION:${event.venue}, ${event.locationDetails}`,
    `DTSTART:${event.calendarStartTime}`,
    `DTEND:${event.calendarEndTime}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${event.id}-aarav-ananya.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
