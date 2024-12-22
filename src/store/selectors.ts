import {createSelector} from '@reduxjs/toolkit';
import {selectOffers, selectOffersIds} from './reducer.ts';
import {State} from '../types/state.ts';

export const selectFavoriteCount = createSelector([selectOffers], (offers) => offers.filter((x) => x.isFavorite).length);

export const selectFavorites = createSelector([selectOffers],(offers) => offers.filter((x) => x && x.isFavorite));

export const selectNearbyOffers = createSelector(
  [selectOffersIds, (state: State) => state.offersNearby],
  (offersIds, offerNearbyIds) => offerNearbyIds.map((id) => offersIds[id])
    .filter((x) => x !== undefined)
    .map((x) => x!));
