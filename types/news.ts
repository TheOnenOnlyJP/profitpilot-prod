export interface NewsEvent {
  id: string;
  currency: string;
  countryCode: string;
  event: string;
  time: string;
  forecast: number;
  previous: number;
  impactLevel: 1 | 2 | 3;  // This restricts impactLevel to only these three values
}