import {createReducer} from '@reduxjs/toolkit';
import {setActiveCity, setOffers} from './action.ts';
import {PreviewOffer} from '../types/previewOffer.ts';
import {CitiesMock} from '../mocks/cities.ts';

const initialState = {
  activeCity: CitiesMock.find((city) => city.name === 'Paris') ?? CitiesMock[0],
  offers: [] as PreviewOffer[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
