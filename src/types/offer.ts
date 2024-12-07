import {Location} from './location.ts';
import {City} from './city.ts';
import {User} from './user.ts';

export type OfferTypes = 'Apartment' | 'Private Room' | 'Hotel' | 'House';

export type Offer = {
  'id': string;
  'title': string;
  'type': OfferTypes;
  'price': number;
  'city': City;
  'location': Location;
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
  'description': string;
  'bedrooms': number;
  'goods': Array<string>;
  'host': User;
  'images': Array<string>;
  'maxAdults': number;
}
