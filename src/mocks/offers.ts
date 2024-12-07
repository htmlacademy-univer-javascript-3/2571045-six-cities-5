﻿import {PreviewOffer} from '../types/previewOffer.ts';

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
  },
  {
    id: '494a30bd-5816-4005-9e42-de695cdd890b',
    title: 'The house among olive ',
    type: 'House',
    price: 829,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.86861,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9
  },
  {
    id: 'b7205b80-8cc8-4dfd-9b0d-df140f492977',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 163,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85861,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2
  },
  {
    id: '3110218f-9a8b-4f26-8a9b-3cfcb96a2239',
    title: 'Wood and stone place',
    type: 'Apartment',
    price: 214,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.83461,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2
  },
  {
    id: '647d30e3-1a65-410a-9e30-cb0761ec9dde',
    title: 'The Joshua Tree House',
    type: 'House',
    price: 248,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.1
  },
  {
    id: '210eb026-f262-4566-bb71-50e39b84a242',
    title: 'Waterfront with extraordinary view',
    type: 'House',
    price: 103,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4
  },
  {
    id: 'ad14eee1-5754-4959-8412-1699d86f90ef',
    title: 'Perfectly located Castro',
    type: 'Apartment',
    price: 344,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7
  },
  {
    id: '51567379-781d-4757-ba80-e8718094f446',
    title: 'Amazing and Extremely Central Flat',
    type: 'Private Room',
    price: 252,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341,
      longitude: 10.018654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: '52c952f0-708e-44c3-bb88-60201fa56e04',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'Hotel',
    price: 345,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.538341,
      longitude: 9.976654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.5
  },
  {
    id: 'da0cec84-86e8-4748-b7bd-7627f728a743',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Hotel',
    price: 286,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.563341,
      longitude: 10.019654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4
  },
  {
    id: '2c4e8a2c-9385-4087-b28e-a1861f02caad',
    title: 'The Joshua Tree House',
    type: 'Apartment',
    price: 234,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.236402,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8
  },
  {
    id: '46877b46-94ca-4abe-b798-79f51def0489',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Hotel',
    price: 326,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.8
  }
];
