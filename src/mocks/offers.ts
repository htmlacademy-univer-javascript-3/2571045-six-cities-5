import {PreviewOffer} from '../types/previewOffer.ts';

export const OffersMock : PreviewOffer[] = [
  {
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
    previewImage: '../../img/apartment-01.jpg',
  },
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
    previewImage: '../../img/apartment-02.jpg'
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
    previewImage: '../../img/apartment-03.jpg'
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
    previewImage: '../../img/apartment-small-03.jpg'
  }
];
