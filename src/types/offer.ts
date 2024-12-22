import {Location} from './location.ts';
import {City} from './city.ts';
import {User} from './user.ts';
import {PreviewOffer} from './previewOffer.ts';

export type CardTypes = 'CitiesCard' | 'FavoritesCard' | 'NearbyCard';

export type BookmarkTypes = 'OfferBookmark' | 'CitiesBookmark';

export type OfferTypes = 'Apartment' | 'Private Room' | 'Hotel' | 'House';

export type Offer = PreviewOffer & {
  id: string;
  title: string;
  type: OfferTypes;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: Array<string>;
  host: User;
  images: Array<string>;
  maxAdults: number;
}
