import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {PreviewOffer} from '../types/previewOffer.ts';
import {City} from '../types/city.ts';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../modules/api.ts';

export const setActiveCity = createAction<City>('setActiveCity');

export const setOffers = createAction<PreviewOffer[]>('setOffers');

export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<PreviewOffer[]>(APIRoute.Offers);
    dispatch(setLoadingStatus(false));
    dispatch(setOffers(data));
  },
);
