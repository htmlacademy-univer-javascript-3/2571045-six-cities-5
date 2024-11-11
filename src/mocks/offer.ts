import {Offer} from '../types/offer.ts';

export const OfferMocks : Offer[] =
  [{
    id: '1',
    title: 'Cozy Apartment in the Heart of the City',
    type: 'Apartment',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
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
    host: {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    ],
    maxAdults: 4},
  {
    id: '2',
    title: 'Luxury House with a View',
    type: 'Private Room',
    price: 300,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
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
    host: {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '3',
    title: 'Modern Room in a Historic Building',
    type: 'Private Room',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.0,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
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
    host: {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    ],
    maxAdults: 4
  },
  {
    id: '4',
    title: 'Stylish Hotel Suite',
    type: 'Apartment',
    price: 250,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 12
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
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
    host: {
      'name': 'Oliver Conner',
      'avatarUrl': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    ],
    maxAdults: 4
  },
  ];
