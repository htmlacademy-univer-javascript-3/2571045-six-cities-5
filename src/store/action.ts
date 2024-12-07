import {createAction} from '@reduxjs/toolkit';
import {PreviewOffer} from '../types/previewOffer.ts';
import {City} from '../types/city.ts';

export const setActiveCity = createAction<City>('setActiveCity');

export const setOffers = createAction<PreviewOffer[]>('setOffers');
