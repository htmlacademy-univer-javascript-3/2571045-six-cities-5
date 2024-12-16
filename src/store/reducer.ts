import {createReducer} from '@reduxjs/toolkit';
import {
  setActiveCity,
  setOffers,
  setLoadingStatus,
  requireAuthorization,
  setOffer,
  setOffersNearby,
  setUserEmail, setFavorites
} from './action.ts';
import {PreviewOffer} from '../types/previewOffer.ts';
import {CitiesMock} from '../mocks/cities.ts';
import {AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {City} from '../types/city.ts';

type InitialState = {
  activeCity: City;
  offers: PreviewOffer[];
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  offer: Offer | null;
  offersNearby: PreviewOffer[];
  email: string;
  favorites: PreviewOffer[];
}

const initialState: InitialState = {
  activeCity: CitiesMock.find((city) => city.name === 'Paris') ?? CitiesMock[0],
  offers: [],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  offer: null,
  offersNearby: [],
  email: '',
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    });
});

export {reducer};
