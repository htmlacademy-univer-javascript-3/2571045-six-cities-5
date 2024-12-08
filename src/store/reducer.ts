import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers, setLoadingStatus} from './action.ts';
import {PreviewOffer} from '../types/previewOffer.ts';
import {CitiesMock} from '../mocks/cities.ts';

const initialState = {
  activeCity: CitiesMock.find((city) => city.name === 'Paris') ?? CitiesMock[0],
  offers: [] as PreviewOffer[],
  isLoading: false,
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
    });
});

export {reducer};
