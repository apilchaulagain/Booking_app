import {PlaceSeed} from './types'
type Raw=Omit<PlaceSeed,'phone' | 'email'| 'website'>;
//fake data
const RAW : Raw[] =[
{ id: 'corner-table', name: 'The Corner Table', category: 'eat', blurb: 'Seasonal plates and a short wine list.', dx: 0.3, dy: 0.2, open: 12, close: 23, offer: 'Two courses for a set price' },
  { id: 'marlow-bakehouse', name: 'Marlow Bakehouse', category: 'cafe', blurb: 'Sourdough, pastries and filter coffee.', dx: -0.2, dy: 0.4, open: 7, close: 17, offer: 'Free pastry with any coffee' },
  { id: 'riverside-gardens', name: 'Riverside Gardens', category: 'park', blurb: 'Lawns, a pond and a quiet bandstand.', dx: 0.8, dy: -0.5, open: 6, close: 21 },
  { id: 'city-museum', name: 'City Museum', category: 'museum', blurb: 'Local history across three floors.', dx: -0.9, dy: 0.7, open: 10, close: 17, offer: 'Two-for-one entry on weekdays' },
  { id: 'night-owl', name: 'Night Owl', category: 'nightlife', blurb: 'Cocktails and live music most nights.', dx: 1.2, dy: 0.9, open: 18, close: 26 },
  { id: 'saturday-market', name: 'Saturday Market', category: 'market', blurb: 'Street food and local makers.', dx: -1.4, dy: -0.8, open: 8, close: 16, offer: '10% off your first stall meal' },
  { id: 'noodle-bar', name: 'Noodle Bar No. 4', category: 'eat', blurb: 'Hand-pulled noodles and rich broths.', dx: 0.5, dy: -0.9, open: 11, close: 22 },
  { id: 'bean-and-leaf', name: 'Bean and Leaf', category: 'cafe', blurb: 'Small-batch coffee and loose-leaf tea.', dx: 0.1, dy: -0.3, open: 7, close: 18, offer: 'Buy one, get one half price after 3pm' },
  { id: 'hilltop-park', name: 'Hilltop Park', category: 'park', blurb: 'A viewpoint with picnic tables.', dx: -2.1, dy: 1.6, open: 0, close: 24 },
  { id: 'gallery-nine', name: 'Gallery Nine', category: 'museum', blurb: 'Rotating contemporary exhibitions.', dx: 1.8, dy: -1.2, open: 11, close: 18 },
  { id: 'rooftop-social', name: 'Rooftop Social', category: 'nightlife', blurb: 'A terrace with open city views.', dx: -0.6, dy: -1.7, open: 16, close: 25, offer: 'Welcome drink before 7pm' },
  { id: 'harvest-hall', name: 'Harvest Hall', category: 'market', blurb: 'A covered hall of food stalls.', dx: 2.4, dy: 0.4, open: 9, close: 20 },
  { id: 'lotus-courtyard', name: 'Lotus Courtyard Hotel', category: 'hotel', blurb: 'Quiet courtyard rooms close to the old town.', dx: 0.4, dy: 0.6, open: 0, close: 24, offer: 'Free breakfast on stays of two nights', priceFrom: 3500 },
  { id: 'hilltop-guesthouse', name: 'Hilltop Guesthouse', category: 'hotel', blurb: 'Simple rooms with mountain views.', dx: -1.1, dy: 1.2, open: 0, close: 24, priceFrom: 2200 },
  { id: 'riverside-inn', name: 'Riverside Inn', category: 'hotel', blurb: 'Family-run inn with a garden terrace.', dx: 1.5, dy: -0.4, open: 0, close: 24, offer: '10% off bookings of 3+ nights', priceFrom: 4800 },
];

export const SEEDS: PlaceSeed[] = RAW.map((s, i) => ({
  ...s,
  phone: `+977 1 555 01${String(i).padStart(2, '0')}`,
  email: `info@${s.id}.example`,
  website: `https://${s.id}.example`,
}));