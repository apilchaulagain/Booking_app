export type Mode = 'walk' | 'cycle' | 'drive';
export type Category = 'hotel' | 'eat' | 'cafe' | 'park' | 'museum' | 'nightlife' | 'market';
export interface LatLng { lat: number; lng: number }
export interface PlaceSeed {
  id: string; name: string; category: Category; blurb: string;
  dx: number; dy: number;
  open: number; close: number;
  offer?: string; priceFrom?: number;
  phone: string; email: string; website: string;
}
export interface Place extends PlaceSeed {
  lat: number; lng: number; km: number; minutes: Record<Mode, number>;
}
export interface Post { id: string; placeId: string; caption: string; image: string; createdAt: string }
