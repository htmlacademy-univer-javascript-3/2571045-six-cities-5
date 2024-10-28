import {Offer} from '../types/offer.ts';

export const OfferMock : Offer = {
  'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'Apartment',
  'price': 120,
  'city': {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'isFavorite': false,
  'isPremium': true,
  'rating': 4,
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'bedrooms': 3,
  'goods': [
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cabel TV',
    'Fridge',
  ],
  'host': {
    'name': 'Oliver Conner',
    'avatarUrl': 'img/avatar-angelina.jpg',
    'isPro': true
  },
  'images': [
    'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
  ],
  'maxAdults': 4
};
