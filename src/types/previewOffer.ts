import {City} from './city.ts';
import {Location} from './location.ts';
import {OfferTypes} from './offer.ts';

export type PreviewOffer = {
  'id': string;
  'title': string;
  'type': OfferTypes;
  'price': number;
  'city': City;
  'location': Location;
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
  'previewImage': string;
}
