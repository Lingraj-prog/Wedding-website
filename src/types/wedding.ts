export interface WeddingEvent {
  id: string;
  name: string;
  subTitle: string;
  date: string;
  fullDate: string;
  time: string;
  venue: string;
  locationDetails: string;
  dressCode: string;
  colorPalette: { name: string; hex: string }[];
  description: string;
  image: string;
  iconName: string;
  calendarStartTime: string; // ISO or Google Calendar format
  calendarEndTime: string;
}

export interface LoveMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  image: string;
  quote?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'pre-wedding' | 'ceremonies' | 'candids' | 'palace';
  imageUrl: string;
  caption: string;
  likes: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface GuestBlessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  avatarColor: string;
}

export interface RsvpSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  attendingStatus: 'attending' | 'declined';
  guestCount: number;
  events: string[];
  dietaryPreference: string;
  personalNote: string;
  submittedAt: string;
}
