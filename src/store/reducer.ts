import {createEntityAdapter, createReducer, EntityState} from '@reduxjs/toolkit';
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
import {CITIES} from '../components/cities-list/CITIES.ts';
import {AuthorizationStatus} from '../const.ts';
import {Offer} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {Review} from '../types/review.ts';

const offerAdapter = createEntityAdapter<PreviewOffer>();

export const { selectAll: selectOffers, selectEntities: selectOffersIds } = offerAdapter.getSelectors();

type InitialState = EntityState<PreviewOffer> & {
  activeCity: City;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  offer: Offer | null;
  offersNearby: string[];
  email: string;
  reviews: Review[];
}

const initialState: InitialState = {
  ...offerAdapter.getInitialState(),
  activeCity: CITIES.find((city) => city.name === 'Paris') ?? CITIES[0],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  offer: null,
  offersNearby: [],
  email: '',
  reviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      offerAdapter.upsertMany(state, action.payload);
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
      offerAdapter.upsertMany(state, action.payload);
      state.offersNearby = action.payload.map((x) => x.id);
    })
    .addCase(setUserEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      offerAdapter.upsertMany(state, action.payload);
    })
    .addCase(setFavoriteStatus, (state, action) => {
      const id = action.payload.id;
      const offer = state.entities[id];
      if (offer) {
        offer.isFavorite = action.payload.status;
      }
      if (id === state.offer?.id) {
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
