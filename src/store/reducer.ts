import {createReducer} from '@reduxjs/toolkit';
import {
  setActiveCity,
  setOffers,
  setLoadingStatus,
  requireAuthorization,
  setOffer,
  setOffersNearby,
  setUserEmail, setFavorites, setFavoriteStatus, fetchReviewsAction, AddReviewAction
} from './action.ts';
import {PreviewOffer} from '../types/previewOffer.ts';
import {CitiesMock} from '../mocks/cities.ts';
import {AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {Review} from '../types/review.ts';

type InitialState = {
  activeCity: City;
  offers: PreviewOffer[];
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  offer: Offer | null;
  offersNearby: PreviewOffer[];
  email: string;
  favorites: PreviewOffer[];
  reviews: Review[];
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
  reviews: [],
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
    })
    .addCase(setFavoriteStatus, (state, action) => {
      const offer = state.offers.find((x) => x.id === action.payload.id);
      if (offer) {
        offer.isFavorite = action.payload.status;
      }
      const nearbyOffer = state.offersNearby.find((x) => x.id === action.payload.id);
      if (nearbyOffer) {
        nearbyOffer.isFavorite = action.payload.status;
      }
      const favoriteOffer = state.offersNearby.find((x) => x.id === action.payload.id);
      if (favoriteOffer) {
        favoriteOffer.isFavorite = action.payload.status;
      }
      if (action.payload.id === state.offer?.id) {
        state.offer.isFavorite = action.payload.status;
      }
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(AddReviewAction.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
    });
});

export {reducer};
